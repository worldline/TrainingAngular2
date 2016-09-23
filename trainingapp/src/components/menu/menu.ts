
import {Component} from '@angular/core';
import {NgFor} from '@angular/common';	
import {Observable} from 'rxjs/Observable';
// import {Observable} from 'angular2/src/facade/async';	
import {RouterLink, RouteDefinition} from '@angular/router-deprecated';
import {SlideLinkModelItf, SlideLinkModel} from '../../services/slidesDefs';
import { SlidesHelper } from '../../services/slidesHelper';
import { SlideLink } from '../slideLink/slideLink';
import {SlideMoveLeft} from '../slideMove/slideMoveLeft';
import {SlideMoveRight} from '../slideMove/slideMoveRight';

@Component({
	selector:'menu',
	styleUrls: ['src/components/menu/menu.css'],
	templateUrl: 'src/components/menu/menu.html', 
	directives: [NgFor, SlideLink, SlideMoveLeft, SlideMoveRight] 
})
// The menu allows both to  display a progress bar depending on the current slide
// and allows to navigate to a slide by clicking on the progress bar
export class Menu{
	//The progress bar is done of links
	links: Array<SlideLinkModelItf>;
	//The slideHelper service, to listen for route changes
	// and to navigate to a given slide
	slidesHelper: SlidesHelper;
	// The current slide index (so it's easy to set previous slide links
	// in red and next slide links in red in the progress bar)
	slidesIndex: number = 0;

	constructor(slidesHelper: SlidesHelper) {	

		this.slidesHelper = slidesHelper;
		this.links = new Array<SlideLinkModelItf>();

		// Listen for route definitions and create links based on route definitions
		this.slidesHelper.slidesObservable.subscribe( (routesDefs: Array<RouteDefinition>): void => {
			routesDefs.slice(0, routesDefs.length -1)
			.forEach((routeDef: RouteDefinition, index: number): void => {
				this.links.push(SlideLinkModel.fromRouteAndIndex(routeDef, index));
			});
		});

		// Listen for route changes and then update the index (so the green part / red part is updated)
		this.slidesHelper.slideChangedObservable.subscribe( (idx:number) : void=> {
			this.slidesIndex = idx;
		} );
	}

	//Navigate to the given slide based on its index, provided by the link
	// which has been clicked
	goto= (routeIndex: number): boolean => {
		this.slidesHelper.goto(routeIndex);
		return false;
	}

	// Use the progress-done class on links untill current index, and progress-todo for
	// links after current index
	getProgressClass= (nextIndex: number): string => {
		return (nextIndex <= this.slidesIndex ? "progress-done" : "progress-todo");
	}


} 