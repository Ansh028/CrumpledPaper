
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	rect1 = new Dustbin(740,555,20,200);
    rect2= new Dustbin(600,645,250,20);
	rect3 = new Dustbin(460,555,20,200)
	
	
	groundSprite=createSprite(800,650,1600,20);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	paperObject=Bodies.circle(150,200,20,ball_options)
	World.add(world,paperObject);
	
	var ball_options={
		isStatic:false,
		restitution:0.3,
		fricttion:0.5,
		density:1.2
	}  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  rect2.display();
  rect3.display();
  rect1.display();

  ellipseMode(RADIUS)
	ellipse(paperObject.position.x,paperObject.position.y,20,20,)

}
function keypressed(){
	if(keyCode === UP_ARROW){
Matter.Body.apllyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}



