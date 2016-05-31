import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'PWE2E',
	templateUrl:'src/components/slides/advancedConcepts/pWE2E/pWE2E.html',
	styleUrls: ['src/components/slides/advancedConcepts/pWE2E/pWE2E.css'],
	directives: [Editor, EditorTab]
})
export class PWE2E extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}