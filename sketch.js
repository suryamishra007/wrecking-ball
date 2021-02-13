const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world
var b1,b2,b3,b4,b5
var ground
var rope
var ball


function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world

  ground = new Ground(600,600,1200,20)

  b1 = new Box(700,550,100,100);
  b2 = new Box(700,450,100,100);
  b3 = new Box(700,350,100,100);
  b4 = new Box(700,250,100,100);
  b5 = new Box(700,150,100,100);

  ball = new Ball(300,450,100);

  rope = new Rope(ball.body,{x:300,y:50});

}

function draw() {
  background(255,255,255);  

  Engine.update(engine)

  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  ball.display();

  rope.display();

  drawSprites();
}

function mouseDragged()
{
 Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
