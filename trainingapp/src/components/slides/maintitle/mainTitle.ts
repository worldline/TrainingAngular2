import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../slideCommon/slideCommon';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../services/constants';

@Component({
	selector:'main-title',
	templateUrl:'src/components/slides/mainTitle/mainTitle.html',
	styleUrls: ['src/components/slides/mainTitle/mainTitle.css']
})
export class MainTitle extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string ){
		super(elt, hostClass);
	}
}
