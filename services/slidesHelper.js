var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var async_1 = require('angular2/src/facade/async');
var zip_static_1 = require('rxjs/operator/zip-static');
require('rxjs/add/observable/range');
require('rxjs/add/observable/fromArray');
require('rxjs/add/operator/mergeMap');
require('rxjs/add/operator/toArray');
require('rxjs/add/operator/concat');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var SlidesHelper = (function () {
    function SlidesHelper(http, router) {
        var _this = this;
        // _subject: EventEmitter<string> = new EventEmitter();
        this.routesConfig = new Array();
        //Observable to use to retrieve route definitions
        this.slidesObservable = new core_1.EventEmitter();
        this.configureSlides = function () {
            var routeDefsObs = _this.http.get('data/slides.json')
                .flatMap(function (response) {
                var data = response.json();
                var slidesDefs = data.slides;
                return zip_static_1.zip(async_1.Observable.range(0, slidesDefs.length), async_1.Observable.fromArray(slidesDefs), function (index, slideDef) {
                    var conventions = _this.getConventionInfos(index, slideDef);
                    var res = new router_1.AsyncRoute({
                        path: conventions.path,
                        loader: function () {
                            return new Promise(function (resolve, reject) {
                                System.import(data.mainPath + slideDef.path).then(function (imported) {
                                    resolve(imported[conventions.moduleName]);
                                });
                            });
                        },
                        name: conventions.name
                    });
                    res.slidePath = slideDef.path;
                    return res;
                }).concat(async_1.Observable.fromArray([{
                        path: '/',
                        redirectTo: [_this.getConventionInfos(0).name]
                    }]));
                // return Observable.zip<RouteDefinition>(
                // 	Observable.range(0, slidesDefs.length),
                // 	Observable.fromArray(slidesDefs),
                // 	(index: number, slideDef: SlideDef): RouteDefinition => {
                // 		var conventions: ConventionValues = this.getConventionInfos(index, slideDef);
                // 		return new AsyncRoute({
                // 			path: conventions.path,
                // 			loader: () => {
                // 				return new Promise((resolve, reject) => {
                // 					System.import(data.mainPath + slideDef.path).then((imported: any) => {
                // 						resolve(imported[conventions.moduleName]);
                // 					});
                // 				});
                // 			},
                // 			name: conventions.name
                // 		});
                // 	}
                // ).concat(Observable.fromArray([{
                // 	path: '/',
                // 	redirectTo: this.getConventionInfos(0).path
                // }]));
            }).toArray();
            //    this.http.get('/').
            routeDefsObs.subscribe(_this.slidesObservable);
            // routeDefsObs.toPromise()
        };
        this.getModuleNameFromSlidePath = function (slidePath) {
            var lastIndex = slidePath.lastIndexOf('/');
            return slidePath.substring(lastIndex + 1, lastIndex + 2).toUpperCase() + slidePath.substring(lastIndex + 2);
        };
        this.getConventionInfos = function (i, slideDef) {
            return {
                moduleName: slideDef ? _this.getModuleNameFromSlidePath(slideDef.path) : undefined,
                name: 'Slide' + (i + 1),
                path: '/slide' + (i + 1)
            };
        };
        this.goto = function (routeIdx) {
            var componentName = _this.routesConfig[routeIdx].name;
            _this.router.navigate(['./' + componentName, {}]);
        };
        this.previousSlide = function () {
            var isMin = (_this.currentSlideIndex === 0);
            !isMin && _this.goto(_this.currentSlideIndex - 1);
        };
        this.nextSlide = function () {
            var isMax = (_this.currentSlideIndex === _this.routesConfig.length - 2);
            !isMax && _this.goto(_this.currentSlideIndex + 1);
        };
        this.http = http;
        this.router = router;
        this.slideChangedObservable = new core_1.EventEmitter();
        this.router.subscribe(function (routePath) {
            // console.log('new route: ' + routePath);
            var regex = new RegExp('slide[\\d]+');
            if (!regex.test(routePath)) {
                return;
            }
            _this.currentSlideIndex = parseInt(routePath.split(new RegExp('slide'))[1]) - 1;
            // this._subject.next(this.routesConfig[this.currentSlideIndex]);
            _this.slideChangedObservable.next(_this.currentSlideIndex);
        });
        this.configureSlides();
        this.slidesObservable.subscribe(function (routesConfig) {
            router.config(routesConfig);
            _this.routesConfig = routesConfig;
        });
    }
    SlidesHelper = __decorate([
        core_1.Component({
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], SlidesHelper);
    return SlidesHelper;
})();
exports.SlidesHelper = SlidesHelper;
//# sourceMappingURL=slidesHelper.js.map