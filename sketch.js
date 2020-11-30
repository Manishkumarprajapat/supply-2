var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	rect1=createSprite(400,555,200,5);
	rect1.shapeColor="red"
	rect2=createSprite(300,490,20,100);
	rect2.shapeColor="white";
	rect3=createSprite(500,490,20,100);
	rect3.shapeColor="yellow";



	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(400,550,800,20);
	groundSprite.shapeColor=color(255)

	
	engine = Engine.create();

	world = engine.world;
	
	var ground_options={
	 isStatic:true 
	} 


	ground = Bodies.rectangle(400, 550, 800, 20 , {isStatic:true},ground_options );

	 World.add(world, ground); 

	 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true}); 

	 World.add(world, packageBody);

	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false)
    
  }
}



