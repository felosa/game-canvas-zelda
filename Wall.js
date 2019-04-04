class Wall {
  constructor(game, posLinkX, posLinkY) {
    this.game1 = game;
    this.x= posLinkX;
    this.y= posLinkY;
    this.img = new Image();
    this.img.src = "./images/muro.png";

    
  }

  
  drawWall() {
    
    this.game1.ctx.beginPath();
    this.game1.ctx.drawImage(this.img,this.x,this.y,
      127,
      57);
      
    this.game1.ctx.closePath();
    }
  }