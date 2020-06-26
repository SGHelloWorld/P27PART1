var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const  Constraint = Matter.Constraint;
 var bob1,rope1,roof1;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
    bob1=new Bob(700,100 );
                                                                                       
	//Create a Ground
	roof1 = new Roof(width/2,100, width,5 , {isStatic:true} );
 	World.add(world, roof1);
	rope1=new Rope(bob1,roof1,-20 ,0)
	World.add(world, rope1);
	World.add(world, bob1);  
	Engine.run(engine);
  
}
  

function draw() {
  rectMode(CENTER);
  background(255);
   bob1.display();
   rope1.display();
   roof1.display();
  drawSprites();
 
}



