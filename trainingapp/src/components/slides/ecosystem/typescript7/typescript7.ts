import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'Typescript7',
	templateUrl:'src/components/slides/ecosystem/typescript7/typescript7.html',
	styleUrls: ['src/components/slides/ecosystem/typescript7/typescript7.css'],
    directives: [Editor, EditorTab]
})
export class Typescript7 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}