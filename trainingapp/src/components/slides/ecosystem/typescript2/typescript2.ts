import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'Typescript2',
	templateUrl:'src/components/slides/ecosystem/typescript2/typescript2.html',
	styleUrls: ['src/components/slides/ecosystem/typescript2/typescript2.css']
})
export class Typescript2 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}