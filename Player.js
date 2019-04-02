class Link {
  constructor(game, image, posLinkX, posLinkY) {
    this.game = game;
    this.vy=50;
    this.grav=2;
    this.step = 30;
    this.x= posLinkX;
    this.y= posLinkY;
    this.image = image;
    this.arrows=[];
    
  }

  
  drawLink() {
    
    this.game.ctx.beginPath();
    this.game.ctx.drawImage(this.image,this.x,this.y,50,50);
    this.drawArrows(this.x,this.y);
    this.game.ctx.closePath();
    };
  
  drawArrows(){
    this.game.ctx.beginPath();
    if (this.arrows.length >= 1){
    this.arrows.forEach(element => element.drawArrow(this.x, this.y));
    this.arrows.forEach(element => element.moveArrow());
    }
    this.game.ctx.closePath();
  }



  moveLinkUp(){
    if(this.y > 80)
    {
      this.y -= this.step;
    }
  }
  moveLinkDown(){
    if (this.y < this.game.canvas.height -130)
    {
    this.y += this.step;
    }
  }

  moveLinkLeft(){
    if (this.x > 90){
    this.x -= this.step;
    }
  }

  moveLinkRight(){
    if (this.x < this.game.canvas.width -120)
    this.x += this.step;
  }


  shoot(){
    this.arrows.push(new Arrow(this, this.x, this.y));

  }


}
