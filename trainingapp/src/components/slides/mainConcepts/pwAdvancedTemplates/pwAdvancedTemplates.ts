import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'PwAdvancedTemplates',
	templateUrl:'src/components/slides/mainConcepts/pwAdvancedTemplates/pwAdvancedTemplates.html',
	styleUrls: ['src/components/slides/mainConcepts/pwAdvancedTemplates/pwAdvancedTemplates.css'],
	directives: [Editor, EditorTab]
})
export class PwAdvancedTemplates extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}