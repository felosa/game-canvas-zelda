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
    this.posLink1X = 100;
    this.posLink1Y = this.h - 125;
    this.imgLink1 = new Image();
    this.imgLink1.src = "./images/linkverdederecha.png";  
    this.link1 = new Link(this, this.imgLink1, this.posLink1X, this.posLink1Y);
    
    this.heartsLink2=[];
    this.posLink2X = 750;
    this.posLink2Y = 100;
    this.imgLink2 = new Image();
    this.imgLink2.src = "./images/linkrojoizq.png";
    this.link2 = new Link(this, this.imgLink2, this.posLink2X, this.posLink2Y);

    this.dirY = Math.floor(Math.random() * (5 - 1) + 1); 
    this.wolves= [];
    this.wolves.push(new Wolf(this, this.w2, this.h2-100, 1));
    this.wolves.push(new Wolf(this, this.w2-100, this.h2, 2));
    this.wolves.push(new Wolf(this, this.w2+100, this.h2, 3));
    this.wolves.push(new Wolf(this, this.w2, this.h2+100, 4));

    this.imgHeartLink = new Image();
    this.imgHeartLink.src = "./images/heart.png";
    this.heartsLink1=[];
    this.heartsLink1.push(new Heart(this, this.imgHeartLink,60, 10));
    this.heartsLink1.push(new Heart(this,this.imgHeartLink, 100, 10));
    this.heartsLink1.push(new Heart(this,this.imgHeartLink, 140, 10));

    this.heartsLink2=[];
    this.heartsLink2.push(new Heart(this, this.imgHeartLink, 710, 10));
    this.heartsLink2.push(new Heart(this,this.imgHeartLink, 750, 10));
    this.heartsLink2.push(new Heart(this,this.imgHeartLink, 790, 10));
    

    this.audio= new Audio("sounds/07 - mini-game.mp3");
    this.audio.onload = this.startGame();


    this.imgLink1Wins = new Image();
    this.imgLink1Wins.src = "./images/greenwins.png";
    this.imgLink2Wins = new Image();
    this.imgLink2Wins.src = "./images/redwins.png";

    this.framescounter=0;
    this.counter = 0;
    this.intervalId;
    this.setListener();
  
  }


  startGame() {
    this.audio.play();

    this.intervalId = setInterval(()=>{
     
      this.ctx.clearRect(0,0,this.w,this.h);
      this.framescounter++;
      this.counter++;
      this.draw();
      this.link1.moveLink();
      this.link2.moveLink();
      if (this.counter % 75 ===0) {
        this.wolves.forEach(wolf => wolf.dirWolf());
        if (this.counter===100) {this.counter = 0 ;} 
      }
      this.wolves.forEach(wolf => wolf.moveWolf());
      this.colision();
      this.stopGame();
      

    }, 1000/60);
    
  }

  

  stopGame() {
    if (this.link1.life ===0){
       
        clearInterval(this.intervalId);
        this.audio.pause();
        this.audio= new Audio("sounds/OOT_Fanfare_Item.wav")
        this.audio.play();
        this.ctx.drawImage(this.imgLink2Wins,0, 0);
      
      
    }
    if (this.link2.life ===0){
     
      clearInterval(this.intervalId);
      this.audio.pause();
      this.audio= new Audio("sounds/OOT_Fanfare_Item.wav")
      this.audio.play();
      this.ctx.drawImage(this.imgLink1Wins,
        0,
        0);
      
      
    }
    
  }


  draw() {
    this.background.drawBackground();
    this.link1.drawLink(this.imgLink1,this.posLink1X, this.posLink1Y);
    this.link2.drawLink(this.imgLink2, this.posLink2X, this.posLink2Y);
    this.heartsLink1.forEach(heart => heart.drawHeart());
    this.heartsLink2.forEach(heart => heart.drawHeart());
    this.wolves.forEach(wolf => wolf.drawWolf());
    
  }


  setListener(){

    window.onkeydown = function (e) {
      
      switch (e.keyCode) {
        case 38:
        this.link2.botonPulsUp=true;
        this.imgLink2.src = "./images/linkrojoup.png";
        break;
        
        case 40:
        this.link2.botonPulsDown=true;
        this.imgLink2.src = "./images/linkrojodown.png";
        break;

        case 39:
        this.link2.botonPulsRight=true;
        this.imgLink2.src = "./images/linkrojoright.png";
        break;
        
        case 37:
        this.link2.botonPulsLeft=true;
        this.imgLink2.src = "./images/linkrojoizq.png";
        break;

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

        case 80:
        this.link2.shoot();
        break;
      }
    }.bind(this);
    
      window.onkeyup = function (e) {
        switch (e.keyCode) {
          case 38:
          this.link2.botonPulsUp=false;
          this.imgLink2.src = "./images/linkrojoup.png";
          break;
          
          case 40:
          this.link2.botonPulsDown=false;
          this.imgLink2.src = "./images/linkrojodown.png";
          break;
  
          case 39:
          this.link2.botonPulsRight=false;
          this.imgLink2.src = "./images/linkrojoright.png";
          break;
          
          case 37:
          this.link2.botonPulsLeft=false;
          this.imgLink2.src = "./images/linkrojoizq.png";
          break;
  
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
    // Colision entre los players.
    if (this.link1.x < this.link2.x + 50 &&
      this.link1.x + 50 > this.link2.x  &&
      this.link1.y < this.link2.y + 50 &&
      50 + this.link1.y > this.link2.y){
        this.link1.x = this.link1.lastX;
        this.link1.y= this.link1.lastY;
        this.link2.x = this.link2.lastX;
        this.link2.y= this.link2.lastY;
       
      }


      //Colision entre lobos y paredes
      this.wolves.forEach(lobo =>{

        if (lobo.y < 80 || lobo.y > this.h-130 ||
          lobo.x < 90 || lobo.x > this.w -120
            ){
            lobo.x = lobo.lastX;
            lobo.y= lobo.lastY;
            lobo.dirWolf()
          
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
            this.heartsLink1.pop();
            this.link1.life-=1;
           
          }

      });


     

      //Colision entre player 2 y lobos

      this.wolves.forEach((lobo,index,arr) =>{

        if (this.link2.x < lobo.x + 50 &&
          this.link2.x + 50 > lobo.x  &&
          this.link2.y < lobo.y + 50 &&
          50 + this.link2.y > lobo.y){
            this.link2.x = this.link2.lastX;
            this.link2.y= this.link2.lastY;
            this.heartsLink2.pop();
            this.link2.life-=1;
           
          }

      });

// Colision entre flecha y personajes
        this.link2.arrows.forEach((arrow,index,arr) => {
  
        if (this.link1.x < arrow.x + 5 &&
          this.link1.x + 50 > arrow.x &&
          this.link1.y < arrow.y + 30 &&
          50+ this.link1.y > arrow.y) {
            this.heartsLink1.pop();
            this.link1.life-=1
          
         
            arr.splice(index,1);
       }
  });

          this.link1.arrows.forEach((arrow,index,arr) => {
   
          if (this.link2.x < arrow.x + 5 &&
            this.link2.x + 50 > arrow.x &&
            this.link2.y < arrow.y + 30 &&
            50+ this.link2.y > arrow.y) {
              this.heartsLink2.shift();
              this.link2.life-=1
             
             
              arr.splice(index,1);
              
         }
    });
//Flechas borradas fuera de tablero
    this.link1.arrows.forEach((arrow,index,arr) => {
   
      if (arrow.x < 0 || arrow.x > this.w || arrow.y < 0 || arrow.y > this.h)
          {arr.splice(index,1);}
    });
          

    //Colision entre lobos y flechas link 2
    this.link2.arrows.forEach((arrow,index,arr) => {

      for (var i=0; i< this.wolves.length; i++) {
        if (this.wolves[i].x < arrow.x + 5 &&
          this.wolves[i].x + 50 > arrow.x &&
          this.wolves[i].y < arrow.y + 30 &&
          50+ this.wolves[i].y > arrow.y) {
            
           
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
          
        
          arr.splice(index,1);
        }
     }
});
}
  
  }
