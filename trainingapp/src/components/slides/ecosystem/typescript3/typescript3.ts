import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'Typescript3',
	templateUrl:'src/components/slides/ecosystem/typescript3/typescript3.html',
	styleUrls: ['src/components/slides/ecosystem/typescript3/typescript3.css'],
    directives:[Editor, EditorTab]
})
export class Typescript3 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}