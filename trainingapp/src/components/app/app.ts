import {bind, Component, View} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {
	ROUTER_BINDINGS,
	ROUTER_DIRECTIVES,
	APP_BASE_HREF,
	LocationStrategy,
	HashLocationStrategy,
	PathLocationStrategy,
	RouteDefinition,
	RouteConfig, 
	RouterLink, 
	Router
} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http'; 

import {SlidesHelper} from '../../services/slidesHelper';
import {KeyupListener} from '../../services/keyupListener';
import {
	HOST_SLIDE_CONTAINER_CLASS,
	GPRETTIFYER,
	PrettyPrint,
	JQUERY
} from '../../services/constants';

//components
import {Menu} from '../menu/menu'; 
//import {ProxyCmp} from '../proxycmp/proxycmp';

import "/google-code-prettify/src/prettify.js";
import "/google-code-prettify/src/lang-basic.js";
import "/jquery/dist/jquery.js";

@Component({
	selector: 'app'
})
@View({
	styleUrls:['src/components/app/app.css'],
	templateUrl: 'src/components/app/app.html',
	directives: [Menu, ROUTER_DIRECTIVES]
})
//TODO: Use ProxyCmp when issue https://github.com/angular/router/issues/353 is resolved
// @RouteConfig([
// {
// 	path:'/slide1',
// 	component: ProxyCmp,
// 	as: 'Slide1'
// }, 
// {
// 	path: '/slide2',
// 	component: ProxyCmp,
// 	as: 'Slide2'
// },
// {
// 	path: '/',
// 	redirectTo:'/slide1'
// }])
export class App {
	name: string = 'TrainingAngular2';
	version: string = '1.0.0'; 
	menu: Menu;

	constructor(
		// menu: Menu, router: Router, slidesHelper: SlidesHelper
	) {
		// this.menu = menu;
		// slidesHelper.configureSlides();
		// slidesHelper.slidesObservable.subscribe((routes: Array<RouteDefinition>) => router.config(routes));
	}
}

const ALL_ROUTER_BINDINGS: Array<any> = [
	ROUTER_BINDINGS,
	bind(LocationStrategy).toClass(HashLocationStrategy),
	bind(APP_BASE_HREF).toValue('/')
];

const IN_BINDINGS: Array<any> = [
	bind(SlidesHelper).toClass(SlidesHelper),
	bind(KeyupListener).toClass(KeyupListener),
	bind(HOST_SLIDE_CONTAINER_CLASS).toValue('hostSlideContainer')
];


const ALL_BINDINGS: Array<any> = [
	ALL_ROUTER_BINDINGS,
	HTTP_PROVIDERS, // TODO: Should not be needed, providers could be defined only when needed, but doesn't work
	IN_BINDINGS,
	bind(GPRETTIFYER).toValue(<PrettyPrint>(<any>window).prettyPrint),
	bind(JQUERY).toValue((<any>window).jQuery)
];


bootstrap(App, [Menu,  ALL_BINDINGS]);