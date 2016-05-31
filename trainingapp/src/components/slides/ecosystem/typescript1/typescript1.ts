import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'Typescript1',
	templateUrl:'src/components/slides/ecosystem/typescript1/typescript1.html',
	styleUrls: ['src/components/slides/ecosystem/typescript1/typescript1.css']
})
export class Typescript1 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}