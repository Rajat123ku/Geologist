const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   //creating hammer
     hammer = new Hammer(100,100);

   //creating stone
   stone = new Stone(450,690,100,100);

   //creating ground
   ground = new Ground(400,700,800,10);

   //creating iron
   iron = new Iron(200,690,120,90);

   //creating sand particles
   sand1 = new Sand(505,450,10);
   sand2 = new Sand(510,450,10);
   sand3 = new Sand(515,450,10);
   sand4 = new Sand(525,450,10);
   sand5 = new Sand(535,450,10);

   //creating rubber
   rubber = new Rubber(650,650,70);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#ADD8E6");
  
  hammer.display();
  stone.display();
  ground.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  rubber.display();


 
}



