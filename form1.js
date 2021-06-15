class Form1 {
    constructor(){
      this.input = createInput();
      this.button = createButton("Play");
      this.reset = createButton("reset");
      this.message = createElement('h4');
      this.greeting = createElement('h2');
      
    }// end constructor

    hide(){
      
      this.button.hide();
      this.input.hide();
      this.message.hide();

    }
    display(){
     

      this.message.html("Write your name here");
      

      this.input.position(60,240);
      this.button.position(60,280);
      this.reset.position(20,560);
      this.message.position(60,200);
      
      
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.message.hide();
        tank.name = this.input.value();
        tankCount+=1;
        tank.index = tankCount;
        tank.update();
        tank.updateCount(tankCount);
        this.greeting.html("Let the other player start");
        this.greeting.position(370,200);

        
    });//end of button mousePress

    this.reset.mousePressed(()=>{
    tank.updateCount(0);
    fight.update(0);
    database.ref('Tanks').remove();
    database.ref('Walls').remove();
    
  
    });//end of reset

}//end of display

}//end class
