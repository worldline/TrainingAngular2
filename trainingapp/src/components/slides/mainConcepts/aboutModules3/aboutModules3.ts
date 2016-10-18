import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'AboutModules3',
	templateUrl:'src/components/slides/mainConcepts/aboutModules3/aboutModules3.html',
	styleUrls: ['src/components/slides/mainConcepts/aboutModules3/aboutModules3.css'],
	directives: [Editor, EditorTab]
})
export class AboutModules3 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}