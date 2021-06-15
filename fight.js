class Fight {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        tank = new Tank();
        var tankRef = await database.ref('tankCount').once("value");

        if(tankRef.exists()){
          tankCount = tankRef.val();
          tank.getCount();
        }
        form1 = new Form1()
        form1.display();

      }// end if

      
      tank1 = createSprite(80,300);
      tank1.scale = 0.6;
      tank1.addImage(tankI1);
  
      tank2 = createSprite(925,300);
      tank2.scale = 0.6;
      tank2.addImage(tankI2);
      
      tank1.visible = false;
      tank2.visible = false;
      tanks = [tank1, tank2];
      
    }//end of start

    
  
    play(){

      form1.hide();

      Tank.getTankInfo();

      if(allTanks !== undefined){
        imageMode(CENTER);
        image(landI,500,300,1000,600);
        
        var index = 0;

        //x and y position of the cars
        var x = -740;
        var y;
  
        for(var plr in allTanks){
          //add 1 to the index for every loop
          index = index + 1 ;
  
        
          y = 300 - allTanks[plr].y;

          x = x + 830;
          tanks[index-1].y = y;
          tanks[index-1].x = x;
         // console.log(index, player.index)
  
          if(index === tank.index){

          fill(rgb(131, 136, 105));

          }else {
            fill("red");
            stroke("");
          }

         textSize(20);
         stroke("black");
         strokeWeight(2);
         
         text(allTanks[plr].name,x-40,y-40)
  
        }
        
  
      }

    }//end of play

}//end of class
  