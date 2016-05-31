import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../slideCommon/slideCommon';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../services/constants';


@Component({
	selector:'todo',
	templateUrl:'src/components/slides/todo/todo.html'
})
export class Todo extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}	
	// tmp(): void{
	// 	var v= new View({});

	// }
	
}