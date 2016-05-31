import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'E2e2',
	templateUrl:'src/components/slides/advancedConcepts/e2e2/e2e2.html',
	styleUrls: ['src/components/slides/advancedConcepts/e2e2/e2e2.css'],
	directives: [Editor, EditorTab]
})
export class E2e2 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}