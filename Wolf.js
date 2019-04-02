class Wolf {
  constructor(game, posIniX, posIniY) {
    this.game = game;
    
    this.imgWolf = new Image();
    this.imgWolf.src = "./images/link.png";
    this.x=posIniX;
    this.y= 200;
    this.dif=850;
    this.vy=10;
    this.yBot=this.y+this.dif;
    this.wolfW=200;
    this.counterY=0;
    this.counterX=0;
    this.stepMaxX= 200;
    this.stepMaxY= 200;
    this.dirY;

  }

  
  drawWolf() {
    this.game.ctx.beginPath();
    this.game.ctx.drawImage(this.imgWolf,this.x,this.y,this.wolfW,50);
    this.game.ctx.closePath();
  }

  // moveWolf() {
  //   this.counterY++

  //   if (this.counterY <= 30 ){
  //     this.dirY=Boolean(Math.round(Math.random()));
  //       if (this.dirY ===true){ this.y -= this.vy;}
  //       else {this.y += this.vy;} 
  //   }


  //   if ((this.counterY > 31) && (this.counterY < 60)){
  //   //   this.counterX++
  //     this.dirY=Boolean(Math.round(Math.random()));;
  //       if (this.dirY ===true){ this.x -= this.vy;}
  //       else {this.x += this.vy;}
  //   }


  //   if(this.counterY ===60){this.counterY=0;}
   

  // }
    
}