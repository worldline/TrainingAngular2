import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'AboutPipes7',
	templateUrl:'src/components/slides/mainConcepts/aboutPipes7/aboutPipes7.html',
	styleUrls: ['src/components/slides/mainConcepts/aboutPipes7/aboutPipes7.css'],
	directives: [Editor, EditorTab]
})
export class AboutPipes7 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}