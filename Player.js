class Link {
  constructor(game, image, posLinkX, posLinkY) {
    this.game = game;
    this.vy=50;
    this.grav=2;
    this.step = 15;
    this.x= posLinkX;
    this.y= posLinkY;
    this.image = image;
    this.arrows=[];
    this.dir= 0;
    this.arrowX=this.x;
    
  }

  
  drawLink() {
    
    this.game.ctx.beginPath();
    this.game.ctx.drawImage(this.image,this.x,this.y,50,50);
    this.drawArrows(this.x,this.y);
    this.game.ctx.closePath();
    }
  
  drawArrows(){
    if (this.arrows.length >= 1){
    this.arrows.forEach(element => {
      element.drawArrow();
      element.moveArrow();
    })

    }
  }


  moveLinkUp(){
    this.dir = 0;
    if(this.y > 80)
    {
      this.y -= this.step;
    }
  }
  moveLinkDown(){
    this.dir = 90;
    if (this.y < this.game.canvas.height -130)
    {
    this.y += this.step;
    }
  }

  moveLinkLeft(){
    this.dir = 135;
    if (this.x > 90){
    this.x -= this.step;
    }
  }

  moveLinkRight(){
    this.dir=45;
    if (this.x < this.game.canvas.width -120)
    this.x += this.step;
  }


  shoot(){
    this.arrows.push(new Arrow(this, this.x, this.y, this.dir));
  }


}
