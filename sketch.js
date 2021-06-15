var gameState = 0;//0 is start page, 1 is main game page
//And 2 is score page

var tank1,tank2;
var allTanks;


var database;
var tankCount;

var form1,fight,tank;
var tankI1,tankI2,landI;

var tanks;

function preload(){

  tankI1 = loadImage("tank 1.png");
  tankI2 = loadImage("tank 2.png");

  landI = loadImage("land.png");
  
  
}

function setup() {
  createCanvas(1000,600);

  
  database = firebase.database();

  

  fight = new Fight();
  fight.getState();
  fight.start();
  
  
  
  

}

function draw() {

  background(210);  

  if(gameState == 0){
    textSize(60);
    fill(rgb(131, 136, 105));
    stroke("black");
    strokeWeight(5);
    text("Tank Battle",350,100);

    //tank1.visible = false;
    //tank2.visible = false;
    
  }
  if(tankCount === 2){
    fight.update(1);
  }
  if(gameState === 1){
  
    form1.greeting.hide();
    clear();

    fight.play();
    
    tank1.visible = true;
    tank2.visible = true;
    
    
  }
  
  
  drawSprites();

}//end of draw