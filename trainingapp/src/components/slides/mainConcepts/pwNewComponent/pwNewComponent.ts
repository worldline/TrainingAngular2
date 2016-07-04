import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'PwNewComponent',
	templateUrl:'src/components/slides/mainConcepts/pwNewComponent/pwNewComponent.html',
	styleUrls: ['src/components/slides/mainConcepts/pwNewComponent/pwNewComponent.css'],
	directives: [Editor, EditorTab]
})
export class PwNewComponent extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}