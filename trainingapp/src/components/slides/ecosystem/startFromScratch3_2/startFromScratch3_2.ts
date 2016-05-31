import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'StartFromScratch3_2',
	templateUrl:'src/components/slides/ecosystem/startFromScratch3_2/startFromScratch3_2.html',
	styleUrls: ['src/components/slides/ecosystem/startFromScratch3_2/startFromScratch3_2.css'],
	directives: [Editor, EditorTab]
})
export class StartFromScratch3_2 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}