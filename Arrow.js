class Arrow {
  constructor(player, posIniX, posIniY, dir) {
    this.game = player.game;
    
    
    this.img = new Image();
    this.img.src = "./images/arrowUp.png";
    this.x=posIniX;
    this.y= posIniY;
    this.step = 7;
    this.dir = dir;
  }



drawArrow() {
  this.game.ctx.beginPath();
  //en principio la flecha es 5,30
  this.game.ctx.drawImage(this.img,this.x,this.y,
    50,
    30);
  this.game.ctx.closePath();
}

moveArrow(){
  switch(this.dir){
    case(0):
    this.img.src = "./images/arrowUp.png";
    this.y -= this.step;
    break;
    case(45):
    this.img.src = "./images/arrowRight.png";
    this.x += this.step;
    break;
    case(90):
    this.img.src = "./images/arrowDown.png";
    this.y += this.step;
    break;
    case(135):
    this.img.src = "./images/arrowLeft.png";
    this.x -= this.step;
    break;
  }
}






}