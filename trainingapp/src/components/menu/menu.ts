
import { 
	Component, 
	View} from 'angular2/core';
import {NgFor} from 'angular2/common';	
import {Observable} from 'angular2/src/facade/async';
// import {Observable} from 'angular2/src/facade/async';	
import {RouterLink, RouteDefinition} from 'angular2/router';
import {SlideLinkModelItf, SlideLinkModel} from '../../services/slidesDefs';
import { SlidesHelper } from '../../services/slidesHelper';
import { SlideLink } from '../slideLink/slideLink';
import {SlideMoveLeft} from '../slideMove/slideMoveLeft';
import {SlideMoveRight} from '../slideMove/slideMoveRight';

@Component({
	selector:'menu'
})
@View({ 
	styleUrls: ['src/components/menu/menu.css'],
	templateUrl: 'src/components/menu/menu.html', 
	directives: [NgFor, SlideLink, SlideMoveLeft, SlideMoveRight] 
})
export class Menu{
	links: Array<SlideLinkModelItf>;
	slidesHelper: SlidesHelper;
	slidesIndex: number = 0;

	constructor(slidesHelper: SlidesHelper) {	

		this.slidesHelper = slidesHelper;
		this.links = new Array<SlideLinkModelItf>();

		this.slidesHelper.slidesObservable.subscribe( (routesDefs: Array<RouteDefinition>): void => {
			routesDefs.slice(0, routesDefs.length -1)
			.forEach((routeDef: RouteDefinition, index: number): void => {
				this.links.push(SlideLinkModel.fromRouteAndIndex(routeDef, index));
			});
		});

		this.slidesHelper.slideChangedObservable.subscribe( (idx:number) : void=> {
			this.slidesIndex = idx;
		} );
	}

	goto= (routeIndex: number): boolean => {
		this.slidesHelper.goto(routeIndex);
		return false;
	}

	getProgressClass= (nextIndex: number): string => {
		// console.log('nextIndex: ' + nextIndex);
		// console.log('slidesIndex: ' + this.slidesIndex);
		// console.log('nextIndex <= this.slidesIndex? ' + (nextIndex <= this.slidesIndex));
		// var res = (nextIndex <= this.slidesIndex ? "progress-done" : "progress-todo");
		// console.log('res? ' + res);
		return (nextIndex <= this.slidesIndex ? "progress-done" : "progress-todo");
	}


} 