import { Component, EventEmitter, Output } from '@angular/core';

//services
import {SlideLinkModelItf} from '../../services/slidesDefs';

@Component({
	selector:'slide-link',
	styleUrls: ['src/components/slideLink/slideLink.css'],
	templateUrl: 'src/components/slideLink/slideLink.html',
	inputs: ['model']
})
// Basic class which contains informations about a slide ( its name, its index)
// These informations can be used to display a tooltip when the cursor is on the 
// link element, and can also be used to navigate to a given slide
export class SlideLink {
	_model: SlideLinkModelItf;
	@Output() navigate: EventEmitter<number> = new EventEmitter();

	// Set the model informations for a slide (some text based on the component name, and the slide index)
	set model(model:SlideLinkModelItf){
		this._model = model;
	}

	get model():SlideLinkModelItf{
		return this._model;
	}

	// Send an event to the parent component (menu)
	// to trigger a change of slide
	goToSlide = (): boolean => {
		this.navigate.next(this.model.getId());
		return false;
	}
}