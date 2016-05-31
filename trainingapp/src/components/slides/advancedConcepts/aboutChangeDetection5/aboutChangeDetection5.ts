import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'AboutChangeDetection5',
	templateUrl:'src/components/slides/advancedConcepts/aboutChangeDetection5/aboutChangeDetection5.html',
	styleUrls: ['src/components/slides/advancedConcepts/aboutChangeDetection5/aboutChangeDetection5.css'],
	directives: [Editor, EditorTab]
})
export class AboutChangeDetection5 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}