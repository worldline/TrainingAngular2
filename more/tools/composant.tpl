import {Component, View, Inject, ElementRef} from 'angular2/core';

import {SlideCommon} from '#{relativeCommonSlidePath}/slideCommon/slideCommon';

import {HOST_SLIDE_CONTAINER_CLASS} from '#{relativeServicePath}/services/constants';


@Component({
	selector:'#{cmpName}'
})
@View({
	templateUrl:'src/components/slides/#{categoryFolder}/#{moduleName}/#{moduleName}.html',
	styleUrls: ['src/components/slides/#{categoryFolder}/#{moduleName}/#{moduleName}.css']
})
export class #{cmpName} extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}