import {Component, ElementRef} from '@angular/core';

export abstract class SlideCommon{

	constructor(elt: ElementRef, hostClass: string) {
		console.log('there');
		var classes: any = elt.nativeElement.classList;
		if (!classes.contains(hostClass)) {
			classes.add(hostClass);
		}
	}
	
}