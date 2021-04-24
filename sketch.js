var helicopterIMG, helicopterSprite, packageSprite,packageIMG,leftSprite, rightSprite,bottomSprite;
var packageBody,ground,leftBar, rightBar,bottomBar;
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
	
	//leftSprite=createSprite(width/2, 600, 20,20);
	//leftSprite.shapeColor("red");
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0 , isStatic: true});
	World.add(world, packageBody);
	
	leftBar = Bodies.rectangle(width/2-110,610,20,100,{isStatic :true});
	World.add(world,leftBar);

	rightBar = Bodies.rectangle(width/2+110,610,20,100,{isStatic :true});
	World.add(world,rightBar);

	bottomBar = Bodies.rectangle(width/2,650,200,20,{isStatic :true});
	World.add(world,bottomBar);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
  fill("red");
 rectMode(CENTER);
 rect(rightBar.position.x,rightBar.position.y,20,100);

 fill("red");
 rectMode(CENTER);
 rect(leftBar.position.x,leftBar.position.y,20,100);

 fill("red");
 rectMode(CENTER);
 rect(bottomBar.position.x,bottomBar.position.y,200,20);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}



