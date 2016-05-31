import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'StartFromScratch5',
	templateUrl:'src/components/slides/ecosystem/startFromScratch5/startFromScratch5.html',
	styleUrls: ['src/components/slides/ecosystem/startFromScratch5/startFromScratch5.css'],
    directives: [Editor, EditorTab]
})
export class StartFromScratch5 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}