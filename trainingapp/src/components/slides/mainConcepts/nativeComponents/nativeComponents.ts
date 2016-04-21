import {Component, Inject, ElementRef} from 'angular2/core';

import {SlideCommon} from '../../slideCommon/slideCommon';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'nativeComponents',
	templateUrl:'src/components/slides/mainConcepts/nativeComponents/nativeComponents.html',
	styleUrls: ['src/components/slides/mainConcepts/nativeComponents/nativeComponents.css']
})
export class NativeComponents extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}