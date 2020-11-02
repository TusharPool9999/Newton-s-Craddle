
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball ;
var bar;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20)
  holder = new Ground(400, 200, 50,20)
  ball = new Ball(400,350,20,20);
  chain = new Chain(ball.body,holder.body)

 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  holder.display();
  chain.display();
  ball.display();
  ground.display()
  drawSprites();
}



