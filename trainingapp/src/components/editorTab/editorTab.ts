
import {Component, Directive, View, Input, Inject, Host, forwardRef, // AfterViewInit, 
  ElementRef} from 'angular2/core';
import {Editor} from '../editor/editor';
import {JQUERY} from '../../services/constants';

@Component({
  selector: 'editortab'
})
@View({
   templateUrl: 'src/components/editorTab/editorTab.html',
   styleUrls: ['src/components/editorTab/editorTab.css']
})
export class EditorTab //implements AfterViewInit 
{
  @Input()
  public title: String;
  @Input()
  public fileType: String;

  private elt: HTMLElement;

  private position: number;

  public visible: boolean= false;

// TODO: Mieux comprendre la nécessité de forwardRef et comment s'en affranchir:
//  https://github.com/angular/angular/issues/2660
  constructor(
    @Host() @Inject(forwardRef(() => Editor)) public editor: Editor, 
    eltRef: ElementRef,
    @Inject(JQUERY) jquery: any
   ) {  
    this.elt = jquery(eltRef.nativeElement);
    this.position = this.editor.registerTab();
    this.visible = (this.position === 0);
  }

  getCssClass= (): string => {
    return (this.visible ? 'active' : 'inactive');
  }

  getCode= ():string => {
    return (<any>this.elt).text();
  }

  // ngAfterViewInit(): void {
    // console.log('registering child');
    // this.editor.registerTab();
  // }



}