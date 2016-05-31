import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'FwksCompare',
	templateUrl:'src/components/slides/preamble/fwksCompare/fwksCompare.html',
	styleUrls: ['src/components/slides/preamble/fwksCompare/fwksCompare.css']
})
export class FwksCompare extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}