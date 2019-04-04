/** @type {CanvasRenderingContext2D} */
class Game1 {
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
    this.imgLink1.src = "./images/linkverdederecha.png";  
    this.link1 = new Link(this, this.imgLink1, this.posLink1X, this.posLink1Y);
    
    
    
    this.dirE = Math.floor(Math.random() * (5 - 1) + 1);
    this.dragon = new Dragon(this,1);

    
    this.dirY = Math.floor(Math.random() * (5 - 1) + 1); 
    this.wolves= [];
    this.wolves.push(new Wolf(this, this.w2, this.h2-100, 1));
    this.wolves.push(new Wolf(this, this.w2-100, this.h2, 2));
    this.wolves.push(new Wolf(this, this.w2+100, this.h2, 3));
    this.wolves.push(new Wolf(this, this.w2, this.h2+100, 4));

    this.imgHeartLink = new Image();
    this.imgHeartLink.src = "./images/heart.png";
    this.heartsLink1=[];
    this.heartsLink1.push(new Heart(this,this.imgHeartLink, 60, 10));
    this.heartsLink1.push(new Heart(this, this.imgHeartLink,100, 10));
    this.heartsLink1.push(new Heart(this, this.imgHeartLink,140, 10));

    this.imgHeartDragon = new Image();
    this.imgHeartDragon.src = "./images/heartdragon.png";
    this.lifeDragon= 10;
    this.heartsDragon=[];
    this.heartsDragon.push(new Heart(this,this.imgHeartDragon, 430, 10));
    this.heartsDragon.push(new Heart(this,this.imgHeartDragon, 470, 10));
    this.heartsDragon.push(new Heart(this,this.imgHeartDragon, 510, 10));
    this.heartsDragon.push(new Heart(this,this.imgHeartDragon, 550, 10));
    this.heartsDragon.push(new Heart(this,this.imgHeartDragon, 590, 10));
    this.heartsDragon.push(new Heart(this,this.imgHeartDragon, 630, 10));
    this.heartsDragon.push(new Heart(this,this.imgHeartDragon, 670, 10));
    this.heartsDragon.push(new Heart(this,this.imgHeartDragon, 710, 10));
    this.heartsDragon.push(new Heart(this,this.imgHeartDragon, 750, 10));
    this.heartsDragon.push(new Heart(this,this.imgHeartDragon, 790, 10));

    this.walls=[];
    this.walls.push(new Wall(this, 193, 350));
    this.walls.push(new Wall(this, 578, 350));
    
    this.framescounter=0;
    this.counter = 0;
    this.intervalId;
    this.setListener();

    this.audioVs= new Audio("sounds/19 - last battle.mp3");
    this.audioVs.onload = this.startGame();
  
  }



  startGame() {
    this.audioVs.play();
    this.intervalId = setInterval(()=>{
      this.framescounter++
      this.counter++;
      this.ctx.clearRect(0,0,this.w,this.h);
      this.draw();
      this.link1.moveLink();
      this.dragon.moveDragon();
      if (this.counter % 75 ===0) {
        this.wolves.forEach(wolf => wolf.dirWolf());
        this.dragon.dirDragon();
        
      }
      if (this.counter % 90 ===0){this.dragon.shootBall();}
      this.wolves.forEach(wolf => wolf.moveWolf());
      if (this.counter===100) {this.counter = 0 ;}

      this.colision();
      

    }, 1000/60);
  }

  stopGame() {
    clearInterval(this.intervalId);
  }


  draw() {
    this.background.drawBackground();
    this.link1.drawLink(this.imgLink1,this.posLink1X, this.posLink1Y);
    this.heartsLink1.forEach(heart => heart.drawHeart());
    this.heartsDragon.forEach(heart => heart.drawHeart());
    this.wolves.forEach(wolf => wolf.drawWolf());
    this.dragon.drawDragon();
    this.walls.forEach(wall => wall.drawWall());
    
  }


  setListener(){

    window.onkeydown = function (e) {
      
      switch (e.keyCode) {
       
        case 87:
        this.link1.botonPulsUp=true;
        this.imgLink1.src = "./images/linkverdearriba.png";
        break;
        
        case 83:
        this.link1.botonPulsDown=true;
        this.imgLink1.src = "./images/linkverdeabajoa.png";
        break;

        case 68:
        this.link1.botonPulsRight=true;
        this.imgLink1.src = "./images/linkverdederecha.png";
        break;
        
        case 65:
        this.link1.botonPulsLeft=true;
        this.imgLink1.src = "./images/linkverdeizq.png";
        break;

        case 82:
        this.link1.shoot();
        break;

      }
    }.bind(this);
    
      window.onkeyup = function (e) {
        switch (e.keyCode) {
         
          case 87:
          this.link1.botonPulsUp=false;
          this.imgLink1.src = "./images/linkverdearriba.png";
          break;
          
          case 83:
          this.link1.botonPulsDown=false;
          this.imgLink1.src = "./images/linkverdeabajoa.png";
          break;
  
          case 68:
          this.link1.botonPulsRight=false;
          this.imgLink1.src = "./images/linkverdederecha.png";
          break;
          
          case 65:
          this.link1.botonPulsLeft=false;
          this.imgLink1.src = "./images/linkverdeizq.png";
          break;
  
    
        }
    }.bind(this);
    

  }

  

  // moveWolves(){
  //   this.wolves.forEach(wolf => wolf.moveWolf());
  // }


colision(){
    

//Colision entre player1 y muros
this.walls.forEach(wall =>{

  if (this.link1.x < wall.x + 127 &&
    this.link1.x + 50 > wall.x  &&
    this.link1.y < wall.y + 57 &&
    50 + this.link1.y > wall.y){
      this.link1.x = this.link1.lastX;
      this.link1.y= this.link1.lastY;
      console.log("colision");
    }

});



      //Colision entre player1 y lobos
this.wolves.forEach(lobo =>{

  if (this.link1.x < lobo.x + 50 &&
      this.link1.x + 50 > lobo.x  &&
      this.link1.y < lobo.y + 50 &&
      50 + this.link1.y > lobo.y){
        this.link1.x = this.link1.lastX;
        this.link1.y= this.link1.lastY;
        this.link1.life-=1;
        this.heartsLink1.pop();
        console.log("colision");
      }

});
     

//Colision entre bolas y personaje

this.dragon.fireballs.forEach((bola,index,arr) => {
  
  if (this.link1.x < bola.x + 50 &&
    this.link1.x + 50 > bola.x &&
    this.link1.y < bola.y + 30 &&
    50+ this.link1.y > bola.y) {
      this.link1.life-=1;
      this.heartsLink1.pop();
      if(this.link1.life ===0){console.log("muerto");}
      arr.splice(index,1);
      console.log("colision", this.link1.x );
  }
});

 


// Colision entre flecha1 y dragon
this.link1.arrows.forEach((arrow,index,arr) => {
  
  if (this.dragon.x < arrow.x + 5 &&
    this.dragon.x + 150 > arrow.x &&
    this.dragon.y < arrow.y + 30 &&
    150+ this.dragon.y > arrow.y) {
      this.lifeDragon-=1
      this.heartsDragon.shift();
      if(this.lifeDragon ===0){console.log("muerto")}
      console.log("colision flecha");
      arr.splice(index,1);
 }
});





    //Colision entre lobos y paredes
    this.wolves.forEach(lobo =>{

      if (lobo.y < 80 || lobo.y > this.h-130 ||
        lobo.x < 90 || lobo.x > this.w -120
          ){
          lobo.x = lobo.lastX;
          lobo.y= lobo.lastY;
          lobo.dirWolf()
          console.log("colision");
        }

    });

    //Cambio sentido Dragon
    if (this.dragon.x < 90){this.dragon.dirE = 2;}
    if (this.dragon.x > this.w -150){this.dragon.dirE = 1;}
       


//Flechas borradas fuera de tablero
    this.link1.arrows.forEach((arrow,index,arr) => {
   
      if (arrow.x < 0 || arrow.x > this.w || arrow.y < 0 || arrow.y > this.h)
          {arr.splice(index,1);}
    });
         
    

    //Colision entre bolas de fuego y muros

    this.dragon.fireballs.forEach((bola,index,arr) => {

      for (var i=0; i< this.walls.length; i++) {
        if (this.walls[i].x < bola.x + 5 &&
          this.walls[i].x + 50 > bola.x &&
          this.walls[i].y < bola.y + 30 &&
          50+ this.walls[i].y > bola.y) {
            
            console.log("colision bola");
            arr.splice(index,1);
          }
       }
  });

  //Colision entre lobos y muros

//   this.wolves.forEach((lobo,index,arr) => {

//     for (var i=0; i< this.walls.length; i++) {
//       if (this.walls[i].x < lobo.x +50 &&
//         this.walls[i].x + 127 > lobo.x &&
//         this.walls[i].y < lobo.y + 50 &&
//         57+ this.walls[i].y > lobo.y) {
          
//         }
//      }
// });


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
