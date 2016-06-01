import { Component, EventEmitter, Output } from '@angular/core';

//services
import {SlideLinkModelItf} from '../../services/slidesDefs';

@Component({
	selector:'slide-link',
	styleUrls: ['src/components/slideLink/slideLink.css'],
	templateUrl: 'src/components/slideLink/slideLink.html',
	inputs: ['model']
})
export class SlideLink {
	_model: SlideLinkModelItf;
	@Output() navigate: EventEmitter<number> = new EventEmitter();

	set model(model:SlideLinkModelItf){
		// console.log('SET MODEL');
		this._model = model;
	}

	get model():SlideLinkModelItf{
		// console.log('GETTING MODEL');
		return this._model;
	}

	goToSlide = (): boolean => {
		this.navigate.next(this.model.getId());
		return false;
	}
}