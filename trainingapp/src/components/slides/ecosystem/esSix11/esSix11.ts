import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'EsSix11',
	templateUrl:'src/components/slides/ecosystem/esSix11/esSix11.html',
	styleUrls: ['src/components/slides/ecosystem/esSix11/esSix11.css'],
    directives: [Editor, EditorTab]
})
export class EsSix11 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}