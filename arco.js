class Arco {
  constructor(game, posLinkX, posLinkY) {
    this.game1 = game;
    this.img = new Image();
    this.img.src = "./images/muro.png";

    
  }

  
  drawWall() {
    
    this.game1.ctx.beginPath();
    this.game1.ctx.drawImage(this.img,this.w2,this.h2,
      100,
      100);
      
    this.game1.ctx.closePath();
    }
  }