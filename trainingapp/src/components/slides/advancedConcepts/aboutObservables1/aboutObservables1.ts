import {Component, View, Inject, ElementRef} from 'angular2/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'AboutObservables1',
	templateUrl:'src/components/slides/advancedConcepts/aboutObservables1/aboutObservables1.html',
	styleUrls: ['src/components/slides/advancedConcepts/aboutObservables1/aboutObservables1.css'],
	directives: [Editor, EditorTab]
})
export class AboutObservables1 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}