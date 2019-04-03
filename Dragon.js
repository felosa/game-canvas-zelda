class Dragon {
  constructor(game1) {
    this.game1 = game1;
    
    
    this.img = new Image();
    this.img.src = "./images/dragonbuena.png";
    this.x=350;
    this.y= 0;
  }



drawDragon() {
  this.game1.ctx.beginPath();
  //en principio la flecha es 5,30
  this.game1.ctx.drawImage(this.img,this.x,this.y,
    150,
    150);
  this.game1.ctx.closePath();
}




}