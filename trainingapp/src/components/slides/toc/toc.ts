import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../slideCommon/slideCommon';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../services/constants';


@Component({
	selector:'toc',
	templateUrl:'src/components/slides/toc/toc.html',
	styleUrls: ['src/components/slides/toc/toc.css']
})
export class Toc extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}
