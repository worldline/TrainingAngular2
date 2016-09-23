import {Observable} from 'rxjs/Observable';
import {SlidesHelper} from './slidesHelper';
import {KeyupListener} from './keyupListener';

// IS NOT A SERVICE
// Abstract class for SlideMoveLeft and SlideMoveRight components
// See their comments for details
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

	// Subscribe to a stream and call the goToSlide method each time
	// an event is received in this stream
	keyupSubscribe= (): void =>{
		var that: SlideMove = this;
		this.getObservable()
		.subscribe( (val: number): void => {
			that.goToSlide();
		} )
	}

}