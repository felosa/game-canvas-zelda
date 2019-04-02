/** @type {CanvasRenderingContext2D} */
class Game {
  constructor(id, width, height){
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.canvas.setAttribute('width', width);
    this.canvas.setAttribute('height', height);
    this.w= this.canvas.width;
    this.h= this.canvas.height;
    this.w2 = this.w/2;
    this.h2 = this.h/2;   
    this.background = new Background(this);
    
  
    this.posLink1X = 100;
    this.posLink1Y = this.h - 125;
    this.imgLink1 = new Image();
    this.imgLink1.src = "./images/provisoinal.png";
    this.link1 = new Link(this, this.imgLink1, this.posLink1X, this.posLink1Y);
    
    this.posLink2X = 750;
    this.posLink2Y = 100;
    this.imgLink2 = new Image();
    this.imgLink2.src = "./images/provisoinal.png";
    this.link2 = new Link(this, this.imgLink2, this.posLink2X, this.posLink2Y);

    this.posIniW= 100;
    this.wolves= [];
    this.wolves.push(new Wolf(this,this.posIniW));
    this.wolves.push(new Wolf(this, this.posIniW+100));
    this.wolves.push(new Wolf(this, this.posIniW+200));
    this.wolves.push(new Wolf(this, this.posIniW+300));
    
    this.counter = 0;
    this.intervalId;
  
  }




  startGame() {
    this.intervalId = setInterval(()=>{
      this.ctx.clearRect(0,0,this.w,this.h);
      this.counter++;
      this.draw();
      this.move();
      this.colision();
    }, 1000/60);
  }

  stopGame() {
    clearInterval(this.intervalId);
  }


  draw() {
    this.background.drawBackground();
    this.link1.drawLink(this.imgLink1,this.posLink1X, this.posLink1Y);
    this.link2.drawLink(this.imgLink2, this.posLink2X, this.posLink2Y);
    this.wolves.forEach(wolf => wolf.drawWolf());
    console.log(this.link1.x);
    console.log(this.link2.arrows.forEach(arrow => arrow.y),"colision flecha");
    
    
  }

  move(){

    window.onkeydown = function (e) {
      
      switch (e.keyCode) {
        case 38:
        this.link2.moveLinkUp();
        break;
        
        case 40:
        this.link2.moveLinkDown();
        break;

        case 39:
        this.link2.moveLinkRight();
        break;
        
        case 37:
        this.link2.moveLinkLeft();
        break;

        case 87:
        this.link1.moveLinkUp();
        break;
        
        case 83:
        this.link1.moveLinkDown();
        break;

        case 68:
        this.link1.moveLinkRight();
        break;
        
        case 65:
        this.link1.moveLinkLeft();
        break;

        case 18:
        this.link1.shoot();
        break;

        case 16:
        this.link2.shoot();
        break;
      }
    
    
    }.bind(this);
    

    this.wolves.forEach(wolf => wolf.moveWolf());

  }


  colision(){
    // Colision entre los players.
    if (this.link1.x < this.link2.x + 50 &&
      this.link1.x + 50 > this.link2.x  &&
      this.link1.y < this.link2.y + 50 &&
      50 + this.link1.y > this.link2.y){
        console.log("colision");
      }
// Colision entre flecha y personajes
      if (this.link1.x < this.link2.arrows.forEach(arrow => arrow.x) + 5 &&
        this.link1.x + 50 > this.link2.arrows.forEach(arrow => arrow.x) &&
        this.link1.y < this.link2.arrows.forEach(arrow => arrow.y) + 30 &&
        50+ this.link1.y > this.link2.arrows.forEach(arrow => arrow.y)) {
         // collision detected!
         
     }

  }


  

}
