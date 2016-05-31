import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'EsSix12',
	templateUrl:'src/components/slides/ecosystem/esSix12/esSix12.html',
	styleUrls: ['src/components/slides/ecosystem/esSix12/esSix12.css'],
    directives: [EditorTab, Editor]
})
export class EsSix12 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}