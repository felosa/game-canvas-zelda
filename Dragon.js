class Dragon {
  constructor(game1) {
    this.game1 = game1;
    
    
    this.img = new Image();
    this.img.src = "./images/dragonbuena.png";
    this.x=350;
    this.y= 0;
    this.vy=2;
    this.dirE=1;
    this.fireballs=[];
  }



drawDragon() {
  this.game1.ctx.beginPath();
  //en principio la flecha es 5,30
  this.game1.ctx.drawImage(this.img,this.x,this.y,
    150,
    150);
    this.drawFireballs(this.x,this.y, this.dir)
  this.game1.ctx.closePath();
}

drawFireballs(){
  if (this.fireballs.length >= 1){
  this.fireballs.forEach(element => {
    element.drawFireball();
  });

  }
}
moveFireballs(){
  if (this.fireballs.length >= 1){
    this.fireballs.forEach(element => {
      element.moveFireball();
    });

    }
  }

dirDragon(){
  this.dirE= Math.floor(Math.random() * (3 - 1) + 1);  
}

moveDragon(){
  
  if (this.dirE ===1){
  
     this.x -= this.vy;
     
  }
    
  if (this.dirE ===2){
  
   
     this.x += this.vy;
    }

    this.moveFireballs()
}

shootBall(){
  this.fireballs.push(new Fireball(this, this.x, this.y, 0));
  this.fireballs.push(new Fireball(this, this.x, this.y, 1));
  this.fireballs.push(new Fireball(this, this.x, this.y, 2));

}


}