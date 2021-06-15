class Tank {
    constructor(){
      this.index = null;
      this.y = 0;
      this.name = null;
      this.hitpoints = 150;
      this.bullets = 50;
      this.x = 0;

      
      
    }
  
    updateCount(count){
      database.ref('/').update({
        tankCount: count
      });
    }

    getCount(){
        var tankRef = database.ref('tankCount');
        tankRef.on("value",(data)=>{
          tankCount = data.val();
        })
      }
  
    update(){
      var tankIndex = "Tanks/tank" + this.index;
      database.ref(tankIndex).set({
        name:this.name,
        x:this.x,
        y:this.y,
        hitpoints:this.hitpoints,
        bullets:this.bullets

      });//end of set

    }//end of update

    static getTankInfo(){
      var tankInfoRef = database.ref('Tanks');
      tankInfoRef.on("value",(data)=>{
        allTanks = data.val();
      })
    }

}//end of class