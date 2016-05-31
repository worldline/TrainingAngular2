import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'MoreDI4',
	templateUrl:'src/components/slides/mainConcepts/moreDI4/moreDI4.html',
	styleUrls: ['src/components/slides/mainConcepts/moreDI4/moreDI4.css'],
    directives: [Editor, EditorTab]
    
})
export class MoreDI4 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}