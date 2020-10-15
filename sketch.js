
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, tree;
var mango1, mango2, mango3, mango4, mango5;
var stone, launcher;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Boy(200,600,200,300);
	tree = new Tree(700, 350, 500, 700);
	mango1 = new Mango(800,250,55, 55);
	
	mango2 = new Mango(700,200,55, 55);
	
	mango3 = new Mango(650,100,55, 55);
	
	mango4 = new Mango(750,140,55, 55);
	
	mango5 = new Mango(600,270,55, 55);
  stone = new Stone(140,530, 50, 50);
  launcher = new Launcher(stone.body, {x: 140, y:530});
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  /*mango1.scale = 0.05;
  mango2.scale = 0.05;
  mango3.scale = 0.05;
  mango4.scale = 0.05;
  mango5.scale = 0.05;*/
  
  boy.display();
  boy.debug = true;
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  launcher.display();
  stone.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function detectCollision(stone, mango){
  mangoBodyPosition = mango.body.position;
  stoneBodyPosition = stone.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<= mango.r + stone.r){
    Matter.Body.setStatic(mango.body, false);

  }

}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:235, y:420})
    launcher.attach(stone.body);
  }
}



