class Stone {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0,
          friction: 1,
          density: 1.2
         
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("stone.png");
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      
      //fill("white");
      //rect(0, 0, this.width, this.height);
      pop();
    }
  };