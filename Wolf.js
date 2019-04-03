class Wolf {
  constructor(game) {
    this.game = game;
    
    this.imgWolf = new Image();
    this.imgWolf.src = "./images/wolfderecha.png";
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
    this.imgWidht=110;

    this.frames = 3;
    this.frameIndex = 0;

  }

  
  drawWolf() {
    this.game.ctx.beginPath();
    // this.game.ctx.drawImage(this.imgWolf,this.x,this.y,70,70);
    this.game.ctx.drawImage(
    this.imgWolf,
    this.frameIndex * Math.floor(this.imgWidht / this.frames),
    0,
    Math.floor(this.imgWidht / this.frames),
    50,
    this.x,
    this.y,
    75,
    75
    );
    this.game.ctx.closePath();
  }


  animateImg() {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.game.framescounter % 60 === 0) {
      this.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.frameIndex > 2) this.frameIndex = 0;
    }
  }


  moveWolf() {
    this.dirY= Math.floor(Math.random() * (5 - 1) + 1);    
    if((this.y > 80) && (this.y < this.game.canvas.height -130) && (this.x > 90) && (this.x < this.game.canvas.width -120))
    {
        if (this.dirY ===1){ 
          if (this.y <= 80){this.y = 200;}
          this.imgWolf.src = "./images/wolfup.png";
          this.y -= this.vy;
        }
        if (this.dirY ===2){ 
          if (this.y >= this.game.canvas.height -130){this.y = this.canvas.height -300;}
          this.imgWolf.src = "./images/wolfdown.png";
          this.y += this.vy;
        }
        if (this.dirY ===3){
          if (this.x <= 90){this.x = 300;}
          this.imgWolf.src = "./images/wolfizquierda.png";
           this.x -= this.vy;
          }
        if (this.dirY ===4){
          if (this.x >= this.game.canvas.width-120){this.x = this.game.canvas.width-300;}
          this.imgWolf.src = "./images/wolfderecha.png";
           this.x += this.vy;
          }
    }

    
    }


   

  
    
}