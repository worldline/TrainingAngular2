import {Component, Inject, ElementRef, ViewContainerRef, DynamicComponentLoader, Injector} from '@angular/core';
import {Location} from '@angular/common';
import {Router, RouteParams} from '@angular/router-deprecated';


@Component({
	selector:'proxy-cmp',
	template:'<span #content />'
})
export class ProxyCmp{

	constructor(
		inj: Injector,
		router: Router,
		routeParams: RouteParams,
		location: Location,
		@Inject(ElementRef) el:ElementRef,
		@Inject(DynamicComponentLoader) componentLoader: DynamicComponentLoader,
		vcr: ViewContainerRef
	){

		router.subscribe((e):void => { console.log(e); });
		location.subscribe((e): void => { console.log(e); });

		//Remove slash
		var targetSlide: string = location.path().substring(1);
		//Uppercase initiale
		var targetModule: string = targetSlide.substring(0, 1).toLocaleUpperCase() + targetSlide.substring(1);

		System.import('/src/components/slides/' + targetSlide + '/' + targetSlide + '.js')
		.then( (m:any):void => { 
			componentLoader.loadNextToLocation(m[targetModule], vcr);
			// componentLoader.loadIntoLocation(m[targetModule], el, 'content'); 
		});

	}

}