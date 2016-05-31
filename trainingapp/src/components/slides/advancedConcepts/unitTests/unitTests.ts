import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'UnitTests',
	templateUrl:'src/components/slides/advancedConcepts/unitTests/unitTests.html',
	styleUrls: ['src/components/slides/advancedConcepts/unitTests/unitTests.css'],
	directives: [Editor, EditorTab]
})
export class UnitTests extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}