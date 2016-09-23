import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import {SlidesHelper} from '../../services/slidesHelper';
import {KeyupListener} from '../../services/keyupListener';
import {SlideMove} from '../../services/slideMove';


@Component({
	selector:'slide-move-right',
	templateUrl:'src/components/slideMove/slideMove.html',
	directives:[]
})
// Display a button which can be clicked to navigate to the next slide (see template)
// Also observe the right arrow keypress to navigate to the next slide
export class SlideMoveRight extends SlideMove{

	constructor(slidesHelper: SlidesHelper, keyupListener: KeyupListener) {
		super(slidesHelper, keyupListener);
		this.label = 'right';
	}	

	// Return the stream which has to be observed and which corresponds
	// to the right keypress
	getObservable(): Observable<number> {
		return this.keyupListener.rightObservable;
	}

	//Navigate to next slide
	goToSlide(): void {
		this.slidesHelper.nextSlide();
	}
}