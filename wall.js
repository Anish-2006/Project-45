class Wall{
    constructor(x,y){
        this.image = loadImage("Barricade.png");
        this.wall = createSprite(x,y,0.1,0.1);
        this.x = x;
        this.y = y;
        this.wallIndex = null;

    }

    
    update(){
        
        var wallIndexRef = "Walls/wall" + this.wallIndex;
        database.ref(wallIndexRef).set({
          x:this.x,
          y:this.y,
          
        });
    }
    display(){

        imageMode(CENTER);
        image(this.image,this.wall.position.x,this.wall.position.y,60,80);
    }

}