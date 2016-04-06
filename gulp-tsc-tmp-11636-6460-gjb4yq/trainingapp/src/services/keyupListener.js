var async_1 = require('angular2/src/facade/async');
require('rxjs/add/operator/map');
require('rxjs/add/operator/filter');
var KeyupListener = (function () {
    function KeyupListener() {
        this.keydownObservable = async_1.Observable.fromEvent(document.getElementsByTagName('body')[0], 'keydown')
            .map(function (event) {
            return event.keyCode;
        });
        this.leftObservable = this.keydownObservable
            .filter(function (keyCode) {
            return (keyCode == 37);
        });
        this.rightObservable = this.keydownObservable
            .filter(function (keyCode) {
            return (keyCode == 39);
        });
    }
    return KeyupListener;
})();
exports.KeyupListener = KeyupListener;
//# sourceMappingURL=keyupListener.js.map