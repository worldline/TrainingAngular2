import {Component, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {zipAll} from 'rxjs/operator/zipAll';
import {zipStatic} from 'rxjs/operator/zip';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/concat';
import {Router, Route, RouteDefinition, AsyncRoute} from '@angular/router-deprecated';
import {HTTP_PROVIDERS, Http, Response} from '@angular/http';

import {App} from '../components/app/app';

interface SlideDef{path: string;}

interface SlidesDefs {
	mainPath: string;
	slides: Array<SlideDef>;
}

interface ConventionValues {
	name: string, path: string, moduleName?: string
}

@Component({
	providers: [HTTP_PROVIDERS]
})
// This service is used in the application for all navigation
// purpose (router service should not be used outside of this service)
// More specifically, the service does the following:
// -> configure the routes based on the data/slides.json file (have a look a configureSlide method)
// -> Get the route definitions if needed (observe the slidesObservable stream to do so)
// -> Observe that a slide has been accessed successfully (observe the slideChangedObservable stream to do so)
// -> Navigate to a given slide (use the goto method to do so)
// -> Navigate to the preivous or next slide (use the previousSlide and nextSlide methods to do so)
export class SlidesHelper{
	currentSlideIndex: number;
	routesConfig: Array<RouteDefinition> = new Array<RouteDefinition>();

	//Subscribe to this in order to observe that a slide has been accessed successfully
	slideChangedObservable: EventEmitter<number>;
	// Subscribe to this in order to be notified when the routes are configured and eventually
	// to retrieve the routes definition
	slidesObservable: EventEmitter<Array<RouteDefinition>> = new EventEmitter<Array<RouteDefinition>>();

	constructor(public http: Http, public router: Router){

		this.slideChangedObservable = new EventEmitter<number>();

		// Listen for route changes in oder 
		// -> set the current index (slide1 means index = 0, etc )
		// -> to emit an event on the slideChangedObservable stream
		router.subscribe((routePath: any) => {
			// console.log('new route: ' + routePath);
			var regex: RegExp = new RegExp('slide[\\d]+');
			if (!regex.test(routePath)) { return; }
			this.currentSlideIndex = parseInt(routePath.split(new RegExp('slide'))[1]) - 1;
			this.slideChangedObservable.next(this.currentSlideIndex);
		});

		// Call the configureSlides method in order to aliment the slidesObservable stream
		this.configureSlides();
		// Subscribe the slidesObservable stream in order to configure the router
		// with the route definitions
		this.slidesObservable.subscribe((routesConfig: Array<RouteDefinition>): void => {
			router.config(routesConfig);
			this.routesConfig = routesConfig;
		});

	}


	configureSlides= (): void => {

		//routeDefsObs is a stream containing the array of route definitions
		// ie: Observable< Array<RouteDefinition> >
		var routeDefsObs= this.http.get('data/slides.json')
			.flatMap((response: Response): Observable<RouteDefinition> => {

				var data = <SlidesDefs>response.json();
				var slidesDefs: Array<SlideDef> = data.slides;


				return zipStatic(
					// Create a stream from integer: (0, 1, ..., slidesDefs.length )
					Observable.range(0, slidesDefs.length),
					// Create a stream from the array of slides ( {slide1 data}, {slide2 data}, ... )
					Observable.from(slidesDefs),
					// Call this call back by associating data from the first and second streams to generate our new observable:
					// ( callback(0, {slide1 data}), callback(1, {slide1 data}), ...)
					(index: number, slideDef: SlideDef): RouteDefinition => {
						var conventions: ConventionValues = this.getConventionInfos(index, slideDef);
						var res: AsyncRoute = new AsyncRoute({
							path: conventions.path,
							loader: () => {
								return new Promise((resolve, reject) => {
									System.import(data.mainPath + slideDef.path).then((imported: any) => {
										resolve(imported[conventions.moduleName]);
									});
								});
							},
							name: conventions.name,
							useAsDefault: index === 0
						});

						(<any>res).slidePath = slideDef.path;

						return res;
					}
				);
			})
			// Value returns by flatMap is an observable of RouteDefinition
			// -> ( RouteDef 1, RouteDef2, ... )
			// And we want an observable of array of RouteDefinition...
			// ( [RouteDef1, RouteDef2, ...] )
			.toArray();
            
		// The route definitions array is passed to the slidesObservable stream
		// So the slidesObservable stream will just contains the array of route
		// definitions and notify every observer which subscribed to id
		routeDefsObs.subscribe(this.slidesObservable);
	}

	private getModuleNameFromSlidePath= (slidePath: string) : string => {
		var lastIndex: number = slidePath.lastIndexOf('/');
		return slidePath.substring(lastIndex + 1, lastIndex + 2).toUpperCase() + slidePath.substring(lastIndex + 2);		

	}

	// Get RouteDefinitions values based on slides.json data with help of some conventions
	private getConventionInfos= (i: number, slideDef?: SlideDef): ConventionValues => {

		return {
			moduleName: slideDef? this.getModuleNameFromSlidePath(slideDef.path) : undefined,
			name: 'Slide' + (i + 1),
			path: '/slide' + (i + 1)
		};
	}

	// Use the router service to go to a specific slide based on its index
	goto= (routeIdx: number):void => {
		var componentName = this.routesConfig[routeIdx].name;
		this.router.navigate(['./' + componentName, {}])
	}

	// Go to the previous slide
	previousSlide= (): void => {
		var isMin: boolean = (this.currentSlideIndex === 0);
		!isMin && this.goto(this.currentSlideIndex - 1);
	}

	// Go to the next slide
	nextSlide= ():void => {
		var isMax: boolean = (this.currentSlideIndex === this.routesConfig.length - 2);
		!isMax && this.goto(this.currentSlideIndex + 1);
	}


}