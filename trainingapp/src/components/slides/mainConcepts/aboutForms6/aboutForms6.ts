import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'AboutForms6',
	templateUrl:'src/components/slides/mainConcepts/aboutForms6/aboutForms6.html',
	styleUrls: ['src/components/slides/mainConcepts/aboutForms6/aboutForms6.css'],
	directives: [Editor, EditorTab]
})
export class AboutForms6 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}