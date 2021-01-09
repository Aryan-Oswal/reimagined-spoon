
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var tree;
var stoneImg;
var stone1;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var rope;


var boy;
function preload()
{
	boy = loadImage('boy.png')
	tree= loadImage('tree.png')
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	ground = new Ground(400, 680, 800, 10);
	
	 stone = new Stone(25,580,10)

	mango1 = new Mango(600, 300, 10)
	mango2 = new Mango(510,310,10)
	mango3 = new Mango(620,200,10)
	mango4 = new Mango(690,300,10)
	mango5 = new Mango(400,280,10)
	
	rope = new SlingShot(stone.body , {x:25 , y: 580})
}


function draw() {
	rectMode(CENTER);
	imageMode(CENTER)
	background('white');
	image(boy, 100, 630, 240, 240)
	image(tree, 600, 400, 600, 600)
	

  ground.display();
	drawSprites();
	stone.display()
	mango1.display()
	mango2.display()
	mango3.display()
	mango4.display()
	mango5.display()
	rope.display()

	detectcollision(stone, mango1)
	detectcollision(stone , mango2)
	detectcollision(stone , mango3)
	detectcollision(stone , mango4)
	detectcollision(stone , mango5)
	

 
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body , {x: mouseX , y: mouseY})
}




function mouseReleased() {
	rope.fly()
}

function keyPressed() {
	if (keyCode === 32) {
		rope.attach(stone.body)
	}
}

function detectcollision(stone , mango) {
	pos1 = mango.body.position
	pos2 = stone.body.position

	var distance = dist(pos2.x, pos2.y, pos1.x, pos1.y)
	
	if (distance <= mango.radius + stone.radius) {
		Matter.Body.setStatic(mango.body , false)
	}
}