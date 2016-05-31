import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'NgCompare',
	templateUrl:'src/components/slides/preamble/ngCompare/ngCompare.html',
	styleUrls: ['src/components/slides/preamble/ngCompare/ngCompare.css']
})
export class NgCompare extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}