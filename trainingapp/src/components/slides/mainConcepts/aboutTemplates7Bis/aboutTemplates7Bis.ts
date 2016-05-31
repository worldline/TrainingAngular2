import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'AboutTemplates7Bis',
	templateUrl:'src/components/slides/mainConcepts/aboutTemplates7Bis/aboutTemplates7Bis.html',
	styleUrls: ['src/components/slides/mainConcepts/aboutTemplates7Bis/aboutTemplates7Bis.css'],
	directives: [Editor, EditorTab]
})
export class AboutTemplates7Bis extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}