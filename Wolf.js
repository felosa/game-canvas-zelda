class Wolf {
  constructor(game) {
    this.game = game;
    this.imgWolf = new Image();
    this.imgWolf.src = "./images/link.png";
    this.y= Math.floor(Math.random()*(800 -200)+200);
    //this.y=-600;
    this.x=this.game.w2;
    this.dif=850;
    this.vx=3;
    this.yBot=this.y+this.dif;
    this.WolfW=200;
  }

  
  drawWolf() {
    this.game.ctx.beginPath();
    this.game.ctx.drawImage(this.imgWolf,this.x,this.y,this.WolfW,50);
    this.game.ctx.closePath();
  }

  // moveWolf() {
  //   this.x -= this.vx;
  // }
    
}