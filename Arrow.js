class Arrow {
  constructor(game, posIniX, posIniY) {
    this.game = game;
    
    
    this.img = new Image();
    this.img.src = "./images/link.png";
    this.x=posIniX;
    this.y= posIniY;
    this.step = 10;
  }



drawArrow() {
  this.game.ctx.beginPath();
  this.game.ctx.drawImage(this.img,this.x,this.y,50,50);
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