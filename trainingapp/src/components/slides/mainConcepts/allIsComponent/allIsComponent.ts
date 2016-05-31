import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'AllIsComponent',
	templateUrl:'src/components/slides/mainConcepts/allIsComponent/allIsComponent.html',
	styleUrls: ['src/components/slides/mainConcepts/allIsComponent/allIsComponent.css'],
    directives: [Editor, EditorTab]
})
export class AllIsComponent extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}