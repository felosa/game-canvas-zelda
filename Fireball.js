class Fireball {
  constructor(player, posIniX, posIniY, dir) {
    this.game1 = player.game1;
    
    
    this.img = new Image();
    this.img.src = "./images/Fireball.png";
    this.x=posIniX;
    this.y= posIniY;
    this.step = 5;
    this.dir = dir;
  }



drawFireball() {
  this.game1.ctx.beginPath();
  //en principio la flecha es 5,30
  this.game1.ctx.drawImage(this.img,this.x+30,this.y+30,
    50,
    50);
  this.game1.ctx.closePath();
}

moveFireball(){
   switch(this.dir){
     case(0):
    this.y += this.step;
    this.x += this.step;
    break;
    case(1):
    this.y += this.step;
    break;
    case(2):
    this.y += this.step;
    this.x -= this.step;
    break;
  }
}






}