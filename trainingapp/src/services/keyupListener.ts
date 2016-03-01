
import {EventEmitter} from 'angular2/core';
import {Observable} from 'angular2/src/facade/async';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


export class KeyupListener{
	private keydownObservable: Observable<number>;
	leftObservable: Observable<number>;
	rightObservable: Observable<number>;

	constructor(){

		this.keydownObservable = Observable.fromEvent(document.getElementsByTagName('body')[0], 'keydown')
		.map((event: KeyboardEvent) : any => {
			return event.keyCode;
		});

		this.leftObservable = this.keydownObservable
			.filter((keyCode: number): boolean => {
				return (keyCode == 37);
			});

		this.rightObservable = this.keydownObservable
		.filter( (keyCode: number): boolean  => {
			return (keyCode == 39);
		});

	}

}