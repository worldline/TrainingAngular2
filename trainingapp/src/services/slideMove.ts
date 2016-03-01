import {Observable} from 'angular2/src/facade/async';
import {SlidesHelper} from './slidesHelper';
import {KeyupListener} from './keyupListener';

export abstract class SlideMove {
	protected slidesHelper: SlidesHelper;
	protected keyupListener: KeyupListener;
	protected label: string = 'default';

	constructor(slidesHelper: SlidesHelper, keyupListener: KeyupListener) {
		this.slidesHelper = slidesHelper;
		this.keyupListener = keyupListener;
		this.keyupSubscribe();
	}

	abstract getObservable(): Observable<number>;
	abstract goToSlide(): void;

	keyupSubscribe= (): void =>{
		var that: SlideMove = this;
		this.getObservable()
		.subscribe( (val: number): void => {
			that.goToSlide();
		} )
	}

}