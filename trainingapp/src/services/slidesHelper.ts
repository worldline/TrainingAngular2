import {Component, EventEmitter} from 'angular2/core';
import {Observable} from 'angular2/src/facade/async';
import {zipAll} from 'rxjs/operator/zipAll';
import {zip} from 'rxjs/operator/zip-static';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/fromArray';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/concat';
import {Router, RouteDefinition, AsyncRoute, Route} from 'angular2/router';
import {HTTP_PROVIDERS, Http, Response} from 'angular2/http';

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
export class SlidesHelper{
	http: Http;
	router: Router;
	currentSlideIndex: number;
	// _subject: EventEmitter<string> = new EventEmitter();
	routesConfig: Array<RouteDefinition> = new Array<RouteDefinition>();
	//Observable to use for route changes (so slide changes)
	slideChangedObservable: EventEmitter<number>;
	//Observable to use to retrieve route definitions
	slidesObservable: EventEmitter<Array<RouteDefinition>> = new EventEmitter<Array<RouteDefinition>>();


	constructor(http: Http, router: Router){
		this.http = http;
		this.router = router;

		this.slideChangedObservable = new EventEmitter<number>();
		this.router.subscribe((routePath: any) => {
			// console.log('new route: ' + routePath);
			var regex: RegExp= new RegExp('slide[\\d]+');
			if (!regex.test(routePath)) { return; }
			this.currentSlideIndex = parseInt(routePath.split(new RegExp('slide'))[1]) - 1;
			// this._subject.next(this.routesConfig[this.currentSlideIndex]);
			this.slideChangedObservable.next(this.currentSlideIndex);
		});
		this.configureSlides();
		this.slidesObservable.subscribe((routesConfig: Array<RouteDefinition>): void => {
			router.config(routesConfig);
			this.routesConfig = routesConfig;
		});
	}


	configureSlides= (): void => {

		var routeDefsObs= this.http.get('data/slides.json')
			.flatMap((response: Response): Observable<RouteDefinition> => {

				var data = <SlidesDefs>response.json();
				var slidesDefs: Array<SlideDef> = data.slides;

				return zip(
					Observable.range(0, slidesDefs.length),
					Observable.fromArray(slidesDefs),
					(index: number, slideDef: SlideDef): RouteDefinition => {
						var conventions: ConventionValues = this.getConventionInfos(index, slideDef);
						var res:AsyncRoute = new AsyncRoute({
							path: conventions.path,
							loader: () => {
								return new Promise((resolve, reject) => {
									System.import(data.mainPath + slideDef.path).then((imported: any) => {
										resolve(imported[conventions.moduleName]);
									});
								});
							},
							name: conventions.name
						});

						(<any>res).slidePath = slideDef.path;

						return res;
					}
				).concat(Observable.fromArray([{
					path: '/',
					redirectTo: [this.getConventionInfos(0).name]
				}]));

				// return Observable.zip<RouteDefinition>(
				// 	Observable.range(0, slidesDefs.length),
				// 	Observable.fromArray(slidesDefs),
				// 	(index: number, slideDef: SlideDef): RouteDefinition => {
				// 		var conventions: ConventionValues = this.getConventionInfos(index, slideDef);
				// 		return new AsyncRoute({
				// 			path: conventions.path,
				// 			loader: () => {
				// 				return new Promise((resolve, reject) => {
				// 					System.import(data.mainPath + slideDef.path).then((imported: any) => {
				// 						resolve(imported[conventions.moduleName]);
				// 					});
				// 				});
				// 			},
				// 			name: conventions.name
				// 		});
				// 	}
				// ).concat(Observable.fromArray([{
				// 	path: '/',
				// 	redirectTo: this.getConventionInfos(0).path
				// }]));

			}).toArray();
            
    //    this.http.get('/').

		routeDefsObs.subscribe(this.slidesObservable);
        // routeDefsObs.toPromise()
	}

	private getModuleNameFromSlidePath= (slidePath: string) : string => {
		var lastIndex: number = slidePath.lastIndexOf('/');
		return slidePath.substring(lastIndex + 1, lastIndex + 2).toUpperCase() + slidePath.substring(lastIndex + 2);		

	}

	private getConventionInfos= (i: number, slideDef?: SlideDef): ConventionValues => {

		return {
			moduleName: slideDef? this.getModuleNameFromSlidePath(slideDef.path) : undefined,
			name: 'Slide' + (i + 1),
			path: '/slide' + (i + 1)
		};
	}

	goto= (routeIdx: number):void => {
		var componentName = this.routesConfig[routeIdx].name;
		this.router.navigate(['./' + componentName, {}])
	}


	previousSlide= (): void => {
		var isMin: boolean = (this.currentSlideIndex === 0);
		!isMin && this.goto(this.currentSlideIndex - 1);
	}

	nextSlide= ():void => {
		var isMax: boolean = (this.currentSlideIndex === this.routesConfig.length - 2);
		!isMax && this.goto(this.currentSlideIndex + 1);
	}


}