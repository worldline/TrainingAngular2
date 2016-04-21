import {Component} from 'angular2/core';
import {Observable} from 'angular2/src/facade/async';
import 'rxjs/add/observable/fromEvent';
import {SlidesHelper} from '../../services/slidesHelper';
import {KeyupListener} from '../../services/keyupListener';
import {SlideMove} from '../../services/slideMove';


@Component({
	selector:'slide-move-left',
	templateUrl:'src/components/slideMove/slideMove.html',
	directives:[]
})
export class SlideMoveLeft extends SlideMove{

	constructor(slidesHelper: SlidesHelper, keyupListener: KeyupListener) {
		super(slidesHelper, keyupListener);
		this.label = 'left';
	}

	getObservable(): Observable<number> {
		return this.keyupListener.leftObservable;
	}

	goToSlide(): void {
		this.slidesHelper.previousSlide();
	}
}