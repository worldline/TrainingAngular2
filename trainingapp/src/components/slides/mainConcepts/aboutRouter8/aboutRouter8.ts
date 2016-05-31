import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'AboutRouter8',
	templateUrl:'src/components/slides/mainConcepts/aboutRouter8/aboutRouter8.html',
	styleUrls: ['src/components/slides/mainConcepts/aboutRouter8/aboutRouter8.css'],
	directives: [Editor, EditorTab]
})
export class AboutRouter8 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}