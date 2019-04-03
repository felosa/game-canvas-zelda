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
    
    this.heartsLink1=[];
    this.lifeLink1= 3;
    this.posLink1X = 100;
    this.posLink1Y = this.h - 125;
    this.imgLink1 = new Image();
    this.imgLink1.src = "./images/linkverdederecha.png";  
    this.link1 = new Link(this, this.imgLink1, this.posLink1X, this.posLink1Y);
    
    this.heartsLink2=[];
    this.lifeLink2= 3;
    this.posLink2X = 750;
    this.posLink2Y = 100;
    this.imgLink2 = new Image();
    this.imgLink2.src = "./images/linkrojoizq.png";
    this.link2 = new Link(this, this.imgLink2, this.posLink2X, this.posLink2Y);

    
    this.wolves= [];
    this.wolves.push(new Wolf(this));
    this.wolves.push(new Wolf(this));
    this.wolves.push(new Wolf(this));
    this.wolves.push(new Wolf(this));

    this.heartsLink1=[];
    this.heartsLink1.push(new Heart(this, 60, 10));
    this.heartsLink1.push(new Heart(this, 100, 10));
    this.heartsLink1.push(new Heart(this, 140, 10));

    this.heartsLink2=[];
    this.heartsLink2.push(new Heart(this, 710, 10));
    this.heartsLink2.push(new Heart(this, 750, 10));
    this.heartsLink2.push(new Heart(this, 790, 10));
    
    this.framescounter=0;
    this.counter = 0;
    this.intervalId;
  
  }




  startGame() {
    this.intervalId = setInterval(()=>{
      this.framescounter=0;
      this.counter++;
      this.ctx.clearRect(0,0,this.w,this.h);
      this.draw();
      this.move();
      this.link1.moveLink();
      this.link2.moveLink();
      if (this.counter===50){
      this.wolves.forEach(wolf => wolf.moveWolf());
      this.counter=0;
    }
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
    this.heartsLink1.forEach(heart => heart.drawHeart());
    this.heartsLink2.forEach(heart => heart.drawHeart());
    this.wolves.forEach(wolf => wolf.drawWolf());
    
  }
  move(){

    window.onkeydown = function (e) {
      
      switch (e.keyCode) {
        case 38:
        this.link2.botonPuls=true;
        this.imgLink2.src = "./images/linkrojoup.png";
        break;
        
        case 40:
        this.link2.botonPuls=true;
        this.imgLink2.src = "./images/linkrojodown.png";
        break;

        case 39:
        this.link2.botonPuls=true;
        this.imgLink2.src = "./images/linkrojoright.png";
        break;
        
        case 37:
        this.link2.botonPuls=true;
        this.imgLink2.src = "./images/linkrojoizq.png";
        break;

        case 87:
        this.link1.botonPuls=true;
        this.imgLink1.src = "./images/linkverdearriba.png";
        break;
        
        case 83:
        this.link1.botonPuls=true;
        this.imgLink1.src = "./images/linkverdeabajoa.png";
        break;

        case 68:
        this.link1.botonPuls=true;
        this.imgLink1.src = "./images/linkverdederecha.png";
        break;
        
        case 65:
        this.link1.botonPuls=true;
        this.imgLink1.src = "./images/linkverdeizq.png";
        break;

        case 18:
        this.link1.shoot();
        break;

        case 16:
        this.link2.shoot();
        break;
      }
    
      window.onkeyup = function (e) {
        switch (e.keyCode) {
          case 38:
          this.link2.botonPuls=false;
          this.imgLink2.src = "./images/linkrojoup.png";
          break;
          
          case 40:
          this.link2.botonPuls=false;
          this.imgLink2.src = "./images/linkrojodown.png";
          break;
  
          case 39:
          this.link2.botonPuls=false;
          this.imgLink2.src = "./images/linkrojoright.png";
          break;
          
          case 37:
          this.link2.botonPuls=false;
          this.imgLink2.src = "./images/linkrojoizq.png";
          break;
  
          case 87:
          this.link1.botonPuls=false;
          this.imgLink1.src = "./images/linkverdearriba.png";
          break;
          
          case 83:
          this.link1.botonPuls=false;
          this.imgLink1.src = "./images/linkverdeabajoa.png";
          break;
  
          case 68:
          this.link1.botonPuls=false;
          this.imgLink1.src = "./images/linkverdederecha.png";
          break;
          
          case 65:
          this.link1.botonPuls=false;
          this.imgLink1.src = "./images/linkverdeizq.png";
          break;
  
          case 18:
          this.link1.shoot();
          break;
  
          case 16:
          this.link2.shoot();
          break;
        }
    }.bind(this);
    

  }

  }

  // moveWolves(){
  //   this.wolves.forEach(wolf => wolf.moveWolf());
  // }


  colision(){
    // Colision entre los players.
    if (this.link1.x < this.link2.x + 50 &&
      this.link1.x + 50 > this.link2.x  &&
      this.link1.y < this.link2.y + 50 &&
      50 + this.link1.y > this.link2.y){
        console.log("colision");
      }

      //Colision entre player1 y lobos
      this.wolves.forEach(lobo =>{

        if (this.link1.x < lobo.x + 50 &&
          this.link1.x + 50 > lobo.x  &&
          this.link1.y < lobo.y + 50 &&
          50 + this.link1.y > lobo.y){
            console.log("colision");
          }

      })
     

      //Colision entre player 2 y lobos

      this.wolves.forEach((lobo,index,arr) =>{

        if (this.link2.x < lobo.x + 50 &&
          this.link2.x + 50 > lobo.x  &&
          this.link2.y < lobo.y + 50 &&
          50 + this.link2.y > lobo.y){
            console.log("colision");
          }

      })

// Colision entre flecha y personajes
        this.link2.arrows.forEach((arrow,index,arr) => {
  
        if (this.link1.x < arrow.x + 5 &&
          this.link1.x + 50 > arrow.x &&
          this.link1.y < arrow.y + 30 &&
          50+ this.link1.y > arrow.y) {
            this.lifeLink1-=1
            this.heartsLink1.pop();
            if(this.lifeLink1 ===0){console.log("muerto")}
            console.log("colision flecha");
            arr.splice(index,1);
       }
  });

          this.link1.arrows.forEach((arrow,index,arr) => {
   
          if (this.link2.x < arrow.x + 5 &&
            this.link2.x + 50 > arrow.x &&
            this.link2.y < arrow.y + 30 &&
            50+ this.link2.y > arrow.y) {
              this.lifeLink2-=1
              this.heartsLink2.shift();
              if(this.lifeLink2 ===0){console.log("muerto")}
              console.log("colision flecha"); 
              arr.splice(index,1);
              
         }
    });

    //Colision entre lobos y flechas link 2
    this.link2.arrows.forEach((arrow,index,arr) => {

      for (var i=0; i< this.wolves.length; i++) {
        if (this.wolves[i].x < arrow.x + 5 &&
          this.wolves[i].x + 50 > arrow.x &&
          this.wolves[i].y < arrow.y + 30 &&
          50+ this.wolves[i].y > arrow.y) {
            
            console.log("colision flecha");
            arr.splice(index,1);
          }
       }
  });
//Colision entre lobos y flechas Link1
  this.link1.arrows.forEach((arrow,index,arr) => {

    for (var i=0; i< this.wolves.length; i++) {
      if (this.wolves[i].x < arrow.x + 5 &&
        this.wolves[i].x + 50 > arrow.x &&
        this.wolves[i].y < arrow.y + 30 &&
        50+ this.wolves[i].y > arrow.y) {
          
          console.log("colision flecha");
          arr.splice(index,1);
        }
     }
});
  
}

}
