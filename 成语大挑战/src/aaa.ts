class aaa extends eui.Component {
    private btn_begin:any;
    public constructor() {
          super();
          this.skinName = "src/Game/SceneBeginSkin.exml";
          this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_begin,this);
    }
    private onclick_begin(){
        console.log("game begin!");
    }
}