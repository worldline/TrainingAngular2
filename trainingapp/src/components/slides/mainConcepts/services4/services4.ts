import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'Services4',
	templateUrl:'src/components/slides/mainConcepts/services4/services4.html',
	styleUrls: ['src/components/slides/mainConcepts/services4/services4.css'],
	directives: [Editor, EditorTab]
})
export class Services4 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}