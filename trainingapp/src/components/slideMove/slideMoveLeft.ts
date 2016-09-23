import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import {SlidesHelper} from '../../services/slidesHelper';
import {KeyupListener} from '../../services/keyupListener';
import {SlideMove} from '../../services/slideMove';


@Component({
	selector:'slide-move-left',
	templateUrl:'src/components/slideMove/slideMove.html',
	directives:[]
})
// Display a button which can be clicked to navigate to the previous slide (see template)
// Also observe the left arrow keypress to navigate to the previous slide
export class SlideMoveLeft extends SlideMove{

	constructor(slidesHelper: SlidesHelper, keyupListener: KeyupListener) {
		super(slidesHelper, keyupListener);
		this.label = 'left';
	}

	// Return the stream which has to be obesrved and which corresponds
	// to left keypress
	getObservable(): Observable<number> {
		return this.keyupListener.leftObservable;
	}

	//Navigate to previous slide
	goToSlide(): void {
		this.slidesHelper.previousSlide();
	}
}