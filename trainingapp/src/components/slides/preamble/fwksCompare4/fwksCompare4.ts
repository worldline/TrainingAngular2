import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'fwksCompare4',
	templateUrl:'src/components/slides/preamble/fwksCompare4/fwksCompare4.html',
	styleUrls: ['src/components/slides/preamble/fwksCompare4/fwksCompare4.css'],
	directives: [Editor, EditorTab]
})
export class FwksCompare4 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}