class Wolf {
  constructor(game) {
    this.game = game;
    
    this.imgWolf = new Image();
    this.imgWolf.src = "./images/lobo.png";
    this.x=this.game.w2;
    this.y= this.game.h2;
    this.dif=850;
    this.vy=30;
    this.yBot=this.y+this.dif;
    this.counterY=0;
    this.counterX=0;
    this.stepMaxX= 200;
    this.stepMaxY= 200;
    this.dirY;


  }

  
  drawWolf() {
    this.game.ctx.beginPath();
    this.game.ctx.drawImage(this.imgWolf,this.x,this.y,70,70);
    this.game.ctx.closePath();
  }

  moveWolf() {
    this.dirY= Math.floor(Math.random() * (5 - 1) + 1);    
    if((this.y > 80) && (this.y < this.game.canvas.height -130) && (this.x > 90) && (this.x < this.game.canvas.width -120))
    {
        if (this.dirY ===1){ 
          if (this.y <= 80){this.y = 200;}
          this.y -= this.vy;
        }
        if (this.dirY ===2){ 
          if (this.y >= this.game.canvas.height -130){this.y = this.canvas.height -300;}
          this.y += this.vy;
        }
        if (this.dirY ===3){
          if (this.x <= 90){this.x = 300;}
           this.x -= this.vy;
          }
        if (this.dirY ===4){
          if (this.x >= this.game.canvas.width-120){this.x = this.game.canvas.width-300;}
           this.x += this.vy;
          }
    }

    
    }


   

  
    
}