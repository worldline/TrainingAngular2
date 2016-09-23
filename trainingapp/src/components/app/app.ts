import {provide, Component} from '@angular/core';
import {bootstrapStatic}    from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import {
	ROUTER_BINDINGS,
	ROUTER_DIRECTIVES,
} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http'; 

import {SlidesHelper} from '../../services/slidesHelper';
import {KeyupListener} from '../../services/keyupListener';
import {
	HOST_SLIDE_CONTAINER_CLASS,
	GPRETTIFYER,
	PrettyPrint,
	JQUERY
} from '../../services/constants';

import {Menu} from '../menu/menu'; 

import {COMPILER_PROVIDERS} from '@angular/compiler';
import {XHR} from '@angular/compiler';
import {XHRImpl} from '@angular/platform-browser-dynamic/src/xhr/xhr_impl';

import "google-code-prettify/src/prettify.js";
import "google-code-prettify/src/lang-basic.js";
import "jquery/dist/jquery.js";

@Component({
	selector: 'app',
	styleUrls:['src/components/app/app.css'],
	templateUrl: 'src/components/app/app.html',
	directives: [Menu, ROUTER_DIRECTIVES]
})
//The app component contains the app version and name
export class App {
	name: string = 'TrainingAngular2';
	version: string = '1.0.0'; 
	menu: Menu;

	constructor() {}
}

//Define providers for Router
const ALL_ROUTER_BINDINGS: Array<any> = [
	ROUTER_BINDINGS,
	provide(APP_BASE_HREF, {useValue:'/'}),
	provide(LocationStrategy, { useClass: HashLocationStrategy})
];

//Define providers coming from the app itself
const IN_BINDINGS: Array<any> = [SlidesHelper, KeyupListener,
	provide(HOST_SLIDE_CONTAINER_CLASS, { useValue: 'hostSlideContainer' })
];

//Define all needed providers
const ALL_BINDINGS: Array<any> = [
	ALL_ROUTER_BINDINGS,
	COMPILER_PROVIDERS,
	provide(XHR, { useClass: XHRImpl } ), //mandatory for this version
	HTTP_PROVIDERS, 
	IN_BINDINGS,
	// This service corresponds to the google prettify app, used to display code
	provide(GPRETTIFYER, { useValue: <PrettyPrint>(<any>window).prettyPrint }),
	// We also want a service for jQuery, used in editor/editortab components
	provide(JQUERY, { useValue: (<any>window).jQuery })
];


bootstrapStatic(App, [Menu,  ALL_BINDINGS]);