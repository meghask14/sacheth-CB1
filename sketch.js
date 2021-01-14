
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var rightBox1,leftBox2,bottomBox3,paper1,ground1



function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	
	

	

	ground1 = new ground(600,595,1200,20);

	
	
	//Create the Bodies Here.
	rightBox1 = createSprite(1025,550,20,70);
	leftBox2 = createSprite(885,550,20,70);
	bottomBox3 = createSprite(955,575,120,20);
   
	rightBox1.shapeColor = "red";
   leftBox2.shapeColor = "red";
   bottomBox3.shapeColor = "red";
   paper1=new paper(200,575);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Blue");
  Engine.update(engine);
 
  ground1.display();
  
  paper1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50});
	}
}



