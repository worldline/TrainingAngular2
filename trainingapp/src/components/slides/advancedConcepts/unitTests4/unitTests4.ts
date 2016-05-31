import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'UnitTests4',
	templateUrl:'src/components/slides/advancedConcepts/unitTests4/unitTests4.html',
	styleUrls: ['src/components/slides/advancedConcepts/unitTests4/unitTests4.css'],
	directives: [Editor, EditorTab]
})
export class UnitTests4 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}