
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
export class EditorTab implements AfterViewInit
{
  @Input()
  public title: String;
  @Input()
  public fileType: String;
  
  public _alone: boolean= false;

  private elt: HTMLElement;
  private code: string;

  public visible: boolean= false;

  @Input()
  set alone(val: boolean){
    this._alone = val;
    if (val === true){
      this.visible = true;
    }
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

  getCssClass= (): string => {
    return (this.visible ? 'active' : 'inactive');
  }

  getCode= ():string => {
    return (<any>this.elt).text();
  }

  ngAfterViewInit(): void {
    if (this._alone){
      this.prettyPrint();
    }
    else{
      this.cdr.detectChanges();
    }
  };

}