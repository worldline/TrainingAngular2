import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'AboutLifecycle4',
	templateUrl:'src/components/slides/mainConcepts/aboutLifecycle4/aboutLifecycle4.html',
	styleUrls: ['src/components/slides/mainConcepts/aboutLifecycle4/aboutLifecycle4.css'],
	directives: [Editor, EditorTab]
})
export class AboutLifecycle4 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}