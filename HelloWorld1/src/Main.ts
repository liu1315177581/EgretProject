//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {


    public constructor()
   {
       super();
       this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
   }
   private onAddToStage(e:egret.Event){
       //声明ImageLoader类
       var imgLoader:egret.ImageLoader = new egret.ImageLoader;
       //加载图片，并回掉imgLoadHandler函数
       imgLoader.once(egret.Event.COMPLETE,this.imgLoadHandler,this);
       imgLoader.load('resource/assets/star.png');
   }
   private _txInfo:egret.TextField;
   private _bgInfo:egret.Shape;
   private imgLoadHandler(e:egret.Event):void{
        //声明找到图片类信息
        var bmd:egret.BitmapData = e.currentTarget.data;
        //new一个位图对象，把位图信息添加进去
        var bird:egret.Bitmap = new egret.Bitmap(bmd);
        //设置位图位置属性
        bird.x = 100;
        bird.y = 100;
        //把位图添加进列表中
        this.addChild(bird);
        //设置锚点和坐标位置
        bird.anchorOffsetX = bmd.width/2;
        bird.anchorOffsetY = bmd.width/2;
        bird.x = this.stage.stageWidth*.5;
        bird.y = this.stage.stageHeight*.5;
        // new一个text的对象，并把他添加进列表层
        this._txInfo = new egret.TextField;
        this.addChild(this._txInfo);
        // 添加文本的样式
        this._txInfo.size = 28;
        this._txInfo.x = 50;
        this._txInfo.y = 50;
        this._txInfo.textAlign = egret.HorizontalAlign.LEFT;
        this._txInfo.textColor = 0x000000;
        this._txInfo.type = egret.TextFieldType.DYNAMIC;
        this._txInfo.lineSpacing = 6;
        this._txInfo.multiline = true;
        this._txInfo.text = '轻触屏幕调整显示对象位置';
        // 舞台点击的时候，把位图的位置设置成舞台的位置
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END,function(e:egret.TouchEvent){
            bird.x = e.localX;
            bird.y = e.localY;
        },this)
     
       
   }
}
   

 



