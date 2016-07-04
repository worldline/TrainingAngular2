import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '#{relativeCommonSlidePath}/slideCommon/slideCommon';
import {Editor} from '#{relativeCommonSlidePath}/../editor/editor';
import {EditorTab} from '#{relativeCommonSlidePath}/../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '#{relativeServicePath}/services/constants';


@Component({
	selector:'#{cmpName}',
	templateUrl:'src/components/slides/#{categoryFolder}/#{moduleName}/#{moduleName}.html',
	styleUrls: ['src/components/slides/#{categoryFolder}/#{moduleName}/#{moduleName}.css'],
	directives: [Editor, EditorTab]
})
export class #{cmpName} extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}