var SlideLinkModel = (function () {
    function SlideLinkModel() {
    }
    SlideLinkModel.prototype.getComponentName = function () {
        return this.componentName;
    };
    SlideLinkModel.prototype.setComponentName = function (componentName) {
        this.componentName = componentName;
    };
    SlideLinkModel.prototype.getId = function () {
        return this.id;
    };
    SlideLinkModel.prototype.setId = function (id) {
        this.id = id;
    };
    SlideLinkModel.prototype.getText = function () {
        return this.text;
    };
    SlideLinkModel.prototype.setText = function (text) {
        this.text = text;
    };
    SlideLinkModel.prototype.getTooltip = function () {
        return this.tooltip;
    };
    SlideLinkModel.prototype.setTooltip = function (tooltip) {
        this.tooltip = tooltip;
    };
    SlideLinkModel.fromRouteAndIndex = function (routeDef, index) {
        var newslide = new SlideLinkModel();
        newslide.setId(index);
        newslide.setComponentName(routeDef.name);
        var slidePath = routeDef.slidePath;
        newslide.setTooltip(slidePath);
        newslide.setText('' + (index + 1));
        return newslide;
    };
    return SlideLinkModel;
})();
exports.SlideLinkModel = SlideLinkModel;
//# sourceMappingURL=slidesDefs.js.map