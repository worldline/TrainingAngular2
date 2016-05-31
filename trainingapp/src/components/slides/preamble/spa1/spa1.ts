import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'Spa1',
	templateUrl:'src/components/slides/preamble/spa1/spa1.html',
	styleUrls: ['src/components/slides/preamble/spa1/spa1.css']
})
export class Spa1 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}