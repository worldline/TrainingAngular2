import {
	Component, 
	View,
	Input,
	Inject, 
	ContentChildren, 
	AfterViewInit, 
	QueryList, 
	ElementRef
}
from 'angular2/core';

import {NgIf} from 'angular2/common';

import {EditorTab} from '../editorTab/editorTab';
import {GPRETTIFYER, JQUERY} from '../../services/constants';

@Component({
	selector:'editor', inputs:['localexec']
})
@View({
  templateUrl:'src/components/editor/editor.html',
  directives:[Editor, EditorTab, NgIf],
  styleUrls: ['src/components/editor/editor.css']
})
export class Editor implements AfterViewInit {

	//@Input() public fiddle: boolean = true;
	@Input() public fiddle: boolean = true;
	@Input() public localExec: string = 'false';
	@Input() public title: string = 'sample';
	@Input() public description: string = 'sample';
	@Input() public framework: string = 'library';
	@Input() public version: string = 'pure';
	@Input() public wrap: string = 'domReady';

	private nbRegisteredTabs: number = 0;
	private elt: HTMLElement;
	private formElement: any;
	public fiddleUrl = 'http://jsfiddle.net/api/post/' + this.framework + '/' + this.version + '/';


	@ContentChildren(EditorTab) tabs: QueryList<EditorTab>;
  
	constructor( 
		@Inject(GPRETTIFYER) private prettyPrint: any,
		@Inject(JQUERY) private jquery: any, 
		eltRef: ElementRef
	) {
		this.elt = eltRef.nativeElement;
	}

	displayTab = (index: number) => {
		this.tabs.toArray().forEach((currentEditor: EditorTab, currentIndex: number) => {
			currentEditor.visible = false;
			if (currentIndex === index){
				currentEditor.visible = true;
			}
		});
	};

	ngAfterViewInit(): void {
		this.prettyPrint();
		this.formElement= this.jquery(this.elt).find('form');
	};

	registerTab= ():number => {
		return this.nbRegisteredTabs++;
	}

	getCode= (filteType: string):string => {
		var res= "";
		this.tabs.toArray().forEach( (tab:EditorTab, index: number): void => {
			// console.log(tab.title);
			if (tab.fileType === filteType){
				res += tab.getCode();
			}
			// console.log(tab.getCode());
		} );

		return res;
	}

	toFiddle= (e:Event): void =>{
		e.preventDefault();
		this.formElement[0].submit();
	}

	execJs= (): void => {
		this.tabs.toArray().forEach((tab: EditorTab, index: number): void => {
			// console.log(tab.title);
			if (tab.fileType === 'js') {
				// this.jquery.
				console.log('Eval ' + tab.title);
				eval(tab.getCode());
			}
			// console.log(tab.getCode());
		});
	}

}