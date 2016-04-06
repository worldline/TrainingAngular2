var SlideMove = (function () {
    function SlideMove(slidesHelper, keyupListener) {
        var _this = this;
        this.label = 'default';
        this.keyupSubscribe = function () {
            var that = _this;
            _this.getObservable()
                .subscribe(function (val) {
                that.goToSlide();
            });
        };
        this.slidesHelper = slidesHelper;
        this.keyupListener = keyupListener;
        this.keyupSubscribe();
    }
    return SlideMove;
})();
exports.SlideMove = SlideMove;
//# sourceMappingURL=slideMove.js.map