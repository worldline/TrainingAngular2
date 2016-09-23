
import {
  Component, Directive, 
  Input, Inject, 
  Host, forwardRef, // AfterViewInit, 
  ElementRef, AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';

import {GPRETTIFYER, JQUERY} from '../../services/constants';

@Component({
  selector: 'editortab',
  templateUrl: 'src/components/editorTab/editorTab.html',
  styleUrls: ['src/components/editorTab/editorTab.css']
})
// An editortab can be used alone (to display some code whith highlighted syntax)
// or as child of the editor component, then it's a tab of the editor
export class EditorTab implements AfterViewInit
{
  @Input() public title: String;
  @Input() public fileType: String;
  @Input() _alone: boolean= false;

  //Correspond to the editortab element
  private elt: HTMLElement;
  //Correspond to the editortab code content
  private code: string;
  // Is the current visible (used by the editor
  // to hide inactive tabs)
  public visible: boolean= false;

  @Input()
  // Set alone to true to use the editortab outside
  // af an editor 
  set alone(val: boolean){
    this._alone = val;
    if (val === true){
      this.visible = true;
    }
  }

  get alone(){
    return this._alone;
  }

// TODO: Mieux comprendre la nécessité de forwardRef et comment s'en affranchir:
//  https://github.com/angular/angular/issues/2660
  constructor(
    eltRef: ElementRef,
    public cdr:ChangeDetectorRef,
    @Inject(JQUERY) jquery: any,
    @Inject(GPRETTIFYER) private prettyPrint: any
   ) {  
    this.elt = jquery(eltRef.nativeElement);
  };

  //The active class is set on the visible editortab,
  // whereas the inactive one is set on all other tabs
  getCssClass= (): string => {
    return (this.visible ? 'active' : 'inactive');
  }

  // Retrieve the code for the current editortab
  getCode= ():string => {
    return (<any>this.elt).text();
  }

  // When the view is "ready", call the prettyprint()
  // library which highlight the code
  ngAfterViewInit(): void {
    if (this.alone){
      this.prettyPrint();
    }
    else{
      this.cdr.detectChanges();
    }
  };

}