import {Component, View, Inject, ElementRef} from 'angular2/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'MultipleProviders',
	templateUrl:'src/components/slides/mainConcepts/multipleProviders/multipleProviders.html',
	styleUrls: ['src/components/slides/mainConcepts/multipleProviders/multipleProviders.css'],
	directives: [Editor, EditorTab]
})
export class MultipleProviders extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}