import {Component, View, Inject, ElementRef, DynamicComponentLoader, Injector
	//, RenderViewRef
} from 'angular2/core';
import {Router, RouteParams, Location} from 'angular2/router';


//TODO: On ne devrait pas avoir besoin de l'annotation @inject pour les paramètres.
//      Voir https://github.com/angular/angular/issues/4497
//      Peut être essayer avec une version plus récente d'angular (et de tsc)

// TODO: Le composant n'est instancié qu'une fois, donc il faudrait pouvoir écouter
//		 les changements de route pour mettre à jour le composant chargé, attente de
//       l'issue https://github.com/angular/router/issues/353

@Component({selector:'proxy-cmp'})
@View({template:'<span #content />'})
export class ProxyCmp{

	constructor(
		inj: Injector,
		router: Router,
		routeParams: RouteParams,
		location: Location,
		@Inject(ElementRef) el:ElementRef,
		@Inject(DynamicComponentLoader) componentLoader: DynamicComponentLoader
	){

		// var rvr:RenderViewRef = el.renderView;


		router.subscribe((e):void => { console.log(e); });
		location.subscribe((e): void => { console.log(e); });

		//Remove slash
		var targetSlide: string = location.path().substring(1);
		//Uppercase initiale
		var targetModule: string = targetSlide.substring(0, 1).toLocaleUpperCase() + targetSlide.substring(1);

		System.import('/src/components/slides/' + targetSlide + '/' + targetSlide + '.js')
		.then( (m:any):void => { componentLoader.loadIntoLocation(m[targetModule], el, 'content'); });

	}

}