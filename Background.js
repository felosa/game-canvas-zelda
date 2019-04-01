class Background{
  constructor(game){
   this.game = game;
   this.imgBack1 = new Image();
   this.imgBack1.src = "./images/background1.png";


  }

  drawBackground() {
    this.game.ctx.beginPath();
    this.game.ctx.drawImage(this.imgBack1,0,0,this.game.w,this.game.h);
    this.game.ctx.closePath();
}

}