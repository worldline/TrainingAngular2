import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'WebComponents4_2',
	templateUrl:'src/components/slides/preamble/webComponents4_2/webComponents4_2.html',
	styleUrls: ['src/components/slides/preamble/webComponents4_2/webComponents4_2.css'],
	directives: [Editor, EditorTab]
})
export class WebComponents4_2 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}