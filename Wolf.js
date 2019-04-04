class Wolf {
  constructor(game, posIniX, posIniY, dirY) {
    this.game = game;
    
    this.imgWolf = new Image();
    this.imgWolf.src = "./images/wolfderecha.png";
    this.x=this.game.w2;
    this.y= this.game.h2;
    this.dif=850;
    this.vy=1;
    this.yBot=this.y+this.dif;
    this.counterY=0;
    this.counterX=0;
    this.stepMaxX= 200;
    this.stepMaxY= 200;
    this.dirY = dirY;
    this.imgWidht=115;
    this.x= posIniX;
    this.y=posIniY;
    this.lastX = 0;
    this.lastY=0;

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
    if (this.game.framescounter % 6 === 0) {
      this.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.frameIndex > 2) this.frameIndex = 0;
    }
  }

  dirWolf(){
    this.dirY= Math.floor(Math.random() * (5 - 1) + 1);  
  }

  moveWolf() {

        if (this.dirY ===1){ 
          this.imgWolf.src = "./images/wolfup.png";
          this.lastY=this.y+20;
          this.y -= this.vy;
          this.animateImg();
        }
        if (this.dirY ===2){ 
          this.imgWolf.src = "./images/wolfdown.png";
          this.lastY=this.y-10;
          this.y += this.vy;
          this.animateImg();
          
        }
        if (this.dirY ===3){
          this.imgWolf.src = "./images/wolfizquierda.png";
          this.lastX=this.x+10;
           this.x -= this.vy;
           this.animateImg();
        }
          
        if (this.dirY ===4){
          this.imgWolf.src = "./images/wolfderecha.png";
          this.lastX=this.x-10;
           this.x += this.vy;
           this.animateImg();
          }
    }
  
    
    


   

  
    
}