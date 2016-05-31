import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'NgCompare3',
	templateUrl:'src/components/slides/preamble/ngCompare3/ngCompare3.html',
	styleUrls: ['src/components/slides/preamble/ngCompare3/ngCompare3.css'],
	directives: [Editor, EditorTab]
})
export class NgCompare3 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}