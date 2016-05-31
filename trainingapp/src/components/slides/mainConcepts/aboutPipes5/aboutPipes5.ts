import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'AboutPipes5',
	templateUrl:'src/components/slides/mainConcepts/aboutPipes5/aboutPipes5.html',
	styleUrls: ['src/components/slides/mainConcepts/aboutPipes5/aboutPipes5.css'],
	directives: [Editor, EditorTab]
})
export class AboutPipes5 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}