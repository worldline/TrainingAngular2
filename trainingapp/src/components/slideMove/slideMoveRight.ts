import {Component, View} from 'angular2/core';
import {Observable} from 'angular2/src/facade/async';
import 'rxjs/add/observable/fromEvent';
import {SlidesHelper} from '../../services/slidesHelper';
import {KeyupListener} from '../../services/keyupListener';
import {SlideMove} from '../../services/slideMove';


@Component({
	selector:'slide-move-right'
})
@View({
	templateUrl:'src/components/slideMove/slideMove.html',
	directives:[]
})
export class SlideMoveRight extends SlideMove{

	constructor(slidesHelper: SlidesHelper, keyupListener: KeyupListener) {
		super(slidesHelper, keyupListener);
		this.label = 'right';
	}	

	getObservable(): Observable<number> {
		return this.keyupListener.rightObservable;
	}

	goToSlide(): void {
		this.slidesHelper.nextSlide();
	}
}