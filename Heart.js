class Heart {
  constructor(game, img, posIniHeartX, posIniHeartY) {
    this.game = game;
    
    this.imgHeart = img;
    
    this.x=posIniHeartX;
    this.y=posIniHeartY;


  }

  
  drawHeart() {
    this.game.ctx.beginPath();
    this.game.ctx.drawImage(this.imgHeart,this.x,this.y,50,50);
    
    this.game.ctx.closePath();
  }

}
