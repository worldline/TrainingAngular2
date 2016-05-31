import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'StartDI',
	templateUrl:'src/components/slides/mainConcepts/startDI/startDI.html',
	styleUrls: ['src/components/slides/mainConcepts/startDI/startDI.css'],
    directives: [Editor, EditorTab]
})
export class StartDI extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}