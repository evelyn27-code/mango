
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5, mango6,mango7,mango8,mango9;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,200,30);
	mango2=new mango(1070,120,30);
	mango3=new mango(1130,80,30);
	mango4=new mango(1150,150,30);
	mango5=new mango(1210,230,30);
	mango6=new mango(1000,170,30);
    mango7=new mango(900,200,30);
	mango8=new mango(1070,50,30);
  mango9=new mango(1000,60,30);
  
  stone1 =new stone(237,405,30)
  slingshot = new SlingShot(stone1.body,{x:237, y:425});
  
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  slingshot.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stone1.display();
detectcollision();
  groundObject.display();
}


function detectcollision(){
  mangoBodyPosition = mango1.body.position
  stoneBodyPosition = stone1.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.y)
  if(distance<=mango1.r+stone1.r){
    Matter.Body.setStatic(mango1.body,false);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

