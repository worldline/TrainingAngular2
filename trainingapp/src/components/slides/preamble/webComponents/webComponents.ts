import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'WebComponents',
	templateUrl:'src/components/slides/preamble/webComponents/webComponents.html',
	styleUrls: ['src/components/slides/preamble/webComponents/webComponents.css']
})
export class WebComponents extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}