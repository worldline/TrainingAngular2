import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'Pw1_router',
	templateUrl:'src/components/slides/ecosystem/pw1_router/pw1_router.html',
	styleUrls: ['src/components/slides/ecosystem/pw1_router/pw1_router.css'],
    directives: [Editor, EditorTab]
})
export class Pw1_router extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}