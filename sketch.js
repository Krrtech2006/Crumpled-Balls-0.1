
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,height,1000,30)
	log=new Box(700,625,20,100)
	log1=new Box(810,660,200,20)
	log2=new Box(900,625,20,100)
	paper1=new Paper(200,200,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  log.display();
  log1.display();
  log2.display();
  paper1.display();
  drawSprites();
   
  
}






function keyPressed(){
if(keyCode ===DOWN_ARROW){

  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:58,y:-63})
}



}