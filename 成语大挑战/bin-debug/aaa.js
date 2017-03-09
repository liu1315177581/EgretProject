var aaa = (function (_super) {
    __extends(aaa, _super);
    function aaa() {
        _super.call(this);
        this.skinName = "src/Game/SceneBeginSkin.exml";
        this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_begin, this);
    }
    var d = __define,c=aaa,p=c.prototype;
    p.onclick_begin = function () {
        console.log("game begin!");
    };
    return aaa;
}(eui.Component));
egret.registerClass(aaa,'aaa');
//# sourceMappingURL=aaa.js.map