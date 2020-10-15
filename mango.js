class Mango {
  constructor(x, y, width, height) {
    var options = {
        "isStatic":true,
        'restitution':0,
        'friction':0.02
         
      }
    
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("mango.png");
      this.width = width;
      this.height = height;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      
      //fill("white");
      //rect(0, 0, this.width, this.height);
      pop();
    }
  };

 
  