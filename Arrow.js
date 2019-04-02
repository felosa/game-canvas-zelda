class Arrow {
  constructor(player, posIniX, posIniY) {
    this.game = player.game;
    
    
    this.img = new Image();
    this.img.src = "./images/link.png";
    this.x=posIniX;
    this.y= posIniY;
    this.step = 3;
  }



drawArrow() {
  this.game.ctx.beginPath();
  this.game.ctx.drawImage(this.img,this.x,this.y,5,30);
  this.game.ctx.closePath();
}


moveArrow(){
  {
    this.y -= this.step;
  }
}
moveArrowDown(){
  {
    this.y += this.step;
  }
}
moveArrowLeft(){
  {
    this.x -= this.step;
  }
}
moveArrowRigth(){
  {
    this.x += this.step;
  }
}




}