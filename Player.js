class Link {
  constructor(game, image, posLinkX, posLinkY) {
    this.game = game;
    this.vy=50;
    this.grav=2;
    this.step = 3;
    this.x= posLinkX;
    this.y= posLinkY;
    this.image = image;
    this.imgWidht=150;
    this.arrows=[];
    this.dir= 0;
    this.arrowX = this.x;
    this.botonPulsUp=false;
    this.botonPulsDown=false;
    this.botonPulsRight=false;
    this.botonPulsLeft=false;
    this.lastX=this.x;
    this.lastY=this.y;
    this.life=3;


    // número de imágenes diferentes
    this.frames = 3;
    this.frameIndex = 0;
    this.audioArrow= new Audio("sounds/OOT_Arrow_Hit.wav");

    
  }

  
  drawLink() {
    
    this.game.ctx.beginPath();
    this.game.ctx.drawImage(
      this.image,
      this.frameIndex * Math.floor(this.imgWidht / this.frames),
      0,
      Math.floor(this.imgWidht / this.frames),
      50,
      this.x,
      this.y,
      60,
      70);
      
    this.drawArrows(this.x,this.y, this.dir);
    this.game.ctx.closePath();
    }


    animateImg() {
      // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
   
      if (this.game.framescounter % 10 === 0) {
        this.frameIndex += 1;
  
        // Si el frame es el último, se vuelve al primero
        if (this.frameIndex > 2) this.frameIndex = 0;
      }
    }

    
  drawArrows(){
    if (this.arrows.length >= 1){
    this.arrows.forEach(element => {
      element.drawArrow();
    });

    }
  }

  moveArrows(){
    if (this.arrows.length >= 1){
      this.arrows.forEach(element => {
        element.moveArrow();
      });
  
      }
    }
  

  moveLink(){
    this.moveLinkUp();
    this.moveLinkDown();
    this.moveLinkLeft();
    this.moveLinkRight();
    this.moveArrows();
  }

  moveLinkUp(){
    
    if(this.y > 80 && this.botonPulsUp===true)
    {
      this.dir = 0;
      this.lastY = this.y;
      this.y -= this.step;
      this.animateImg();
    }
  }
  moveLinkDown(){
    
    if (this.y < this.game.canvas.height -130 && this.botonPulsDown===true)
    {
    this.dir = 90;
    this.lastY = this.y;
    this.y += this.step;
    this.animateImg();
    }
  }

  moveLinkLeft(){
    
    if (this.x > 90 && this.botonPulsLeft===true){
    this.dir = 135;
    this.lastX = this.x;
    this.x -= this.step;
    this.animateImg();
    }
  }

  moveLinkRight(){
    
    if (this.x < this.game.canvas.width -120 && this.botonPulsRight===true){
    this.dir=45;
    this.lastX = this.x;
    this.x += this.step;
    this.animateImg();
    }
  }


  shoot(){
    this.audioArrow.play();
    this.arrows.push(new Arrow(this, this.x, this.y, this.dir));
  }


}
