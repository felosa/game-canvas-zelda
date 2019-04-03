class Link {
  constructor(game, image, posLinkX, posLinkY) {
    this.game = game;
    this.vy=50;
    this.grav=2;
    this.step = 15;
    this.x= posLinkX;
    this.y= posLinkY;
    this.image = image;
    this.imgWidht=150;
    this.arrows=[];
    this.dir= 0;
    this.arrowX=this.x;
    this.botonPuls=false;

    // número de imágenes diferentes
    this.frames = 3;
    this.frameIndex = 0;
    
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
      
    this.drawArrows(this.x,this.y);
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

    
  drawArrows(){
    if (this.arrows.length >= 1){
    this.arrows.forEach(element => {
      element.drawArrow();
      element.moveArrow();
    })

    }
  }

  moveLink(){
    this.moveLinkUp();
    this.moveLinkDown();
    this.moveLinkLeft();
    this.moveLinkRight();
  }

  moveLinkUp(){
    this.dir = 0;
    if(this.y > 80 && this.botonPuls===false)
    {
      this.y -= this.step;
      this.animateImg();
    }
  }
  moveLinkDown(){
    this.dir = 90;
    if (this.y < this.game.canvas.height -130 && this.botonPuls===false)
    {
    this.y += this.step;
    this.animateImg();
    }
  }

  moveLinkLeft(){
    this.dir = 135;
    if (this.x > 90 && this.botonPuls===false){
    this.x -= this.step;
    this.animateImg();
    }
  }

  moveLinkRight(){
    this.dir=45;
    if (this.x < this.game.canvas.width -120 && this.botonPuls===false)
    this.x += this.step;
    this.animateImg();
  }


  shoot(){
    this.arrows.push(new Arrow(this, this.x, this.y, this.dir));
  }


}
