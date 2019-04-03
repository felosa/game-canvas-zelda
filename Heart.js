class Heart {
  constructor(game, posIniHeartX, posIniHeartY) {
    this.game = game;
    
    this.imgHeart = new Image();
    this.imgHeart.src = "./images/heart.png";
    this.x=posIniHeartX;
    this.y=posIniHeartY;


  }

  
  drawHeart() {
    this.game.ctx.beginPath();
    this.game.ctx.drawImage(this.imgHeart,this.x,this.y,50,50);
    
    this.game.ctx.closePath();
  }

}
