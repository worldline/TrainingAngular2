
import {EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


// Create three observable streams to listen respectively
//  stream1: ( keypress, keypress, keypress)
//  stream2: stream1.filter(left keypress): (left keypress) 
//  stream3: stream1.filter(right keypress): (left keypress)
// This service will be used by: slideMoveLeft and slideMoveRight components
export class KeyupListener{
	private keydownObservable: Observable<number>;
	leftObservable: Observable<number>;
	rightObservable: Observable<number>;

	constructor(){
		//Stream which observe all keydown events
		this.keydownObservable = Observable.fromEvent(document.getElementsByTagName('body')[0], 'keydown')
		.map((event: KeyboardEvent) : any => {
			return event.keyCode;
		});

		//Filters left arrow keydown events
		this.leftObservable = this.keydownObservable
			.filter((keyCode: number): boolean => {
				return (keyCode == 37);
			});

		// Filters right arrow keydown events
		this.rightObservable = this.keydownObservable
		.filter( (keyCode: number): boolean  => {
			return (keyCode == 39);
		});

	}

}