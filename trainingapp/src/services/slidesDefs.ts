import {RouteDefinition} from '@angular/router-deprecated';


export interface SlideLinkModelItf{

	getComponentName(): string;
	setComponentName(componentName: string): void;

	getId(): number;
	setId(id: number): void;

	getText(): string;
	setText(text: string): void;

	getTooltip(): string;
	setTooltip(tooltip: string): void;

}


// Just a been which contains data about a slide
// Have a look at the SLideLink component to see
// where it's used
export class SlideLinkModel implements SlideLinkModelItf{
	private componentName: string;
	private id: number;
	private tooltip: string;
	private text: string;

	getComponentName(): string{
		return this.componentName;
	}

	setComponentName(componentName: string): void{
		this.componentName = componentName;
	}

	getId(): number{
		return this.id;
	}

	setId(id: number): void{
		this.id = id;
	}

	getText(): string{
		return this.text;
	}

	setText(text: string): void{
		this.text = text;
	}

	getTooltip(): string{
		return this.tooltip;
	}

	setTooltip(tooltip: string): void{
		this.tooltip = tooltip;
	}

	// Create an instance of SlideLinkModel based on a RouteDefinition object
	// and an index (index the slide)
	static fromRouteAndIndex(routeDef: RouteDefinition, index: number): SlideLinkModelItf {
		var newslide: SlideLinkModel = new SlideLinkModel();
		newslide.setId(index);
		newslide.setComponentName(routeDef.name);
		var slidePath = (<any>routeDef).slidePath;
		newslide.setTooltip(slidePath);
		newslide.setText('' + (index + 1));
		return newslide;
	}

}