class Link {
  constructor(game, image, posLinkX, posLinkY) {
    this.game = game;
    this.vy=50;
    this.grav=2;
    this.linkW=50;
    this.x= posLinkX;
    this.y= posLinkY;
    this.step = 10;
    this.image = image;
    
  }

  
  drawLink() {
    this.game.ctx.beginPath();
    this.game.ctx.drawImage(this.image,this.x,this.y,this.linkW,35);
    this.game.ctx.closePath();
  }
  

  moveLinkUp(){
      this.y -= this.step;
  }
  moveLinkDown(){
    this.y += this.step;
  }

  moveLinkLeft(){
    this.x -= this.step;
  }

  moveLinkRight(){
    this.x += this.step;
  }




}
