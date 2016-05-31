import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'StartFromScratch6',
	templateUrl:'src/components/slides/ecosystem/startFromScratch6/startFromScratch6.html',
	styleUrls: ['src/components/slides/ecosystem/startFromScratch6/startFromScratch6.css'],
    directives: [Editor, EditorTab]
})
export class StartFromScratch6 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}