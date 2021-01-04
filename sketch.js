
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;
  
  top = new Ground(400, 160, 400,10);

  bob1 = new Bob(100,200,10,30);
  chain1=new Slingshot(bob1.body, {x:200, y:160});

  bob2=new Bob(120,200,10,30);
  chain2=new Slingshot(bob2.body,{x:230, y:160});

  bob3=new Bob(140,200,10,30);
  chain3=new Slingshot(bob3.body,{x:260,y:160});

  bob4=new Bob(160,200,10,30);
  chain4=new Slingshot(bob4.body,{x:290,y:160});

  //Engine.run(engine);
}


function draw() {

  Engine.update(engine);
  background(220);

  top.display();
  chain1.display();
  bob1.display();

  chain2.display();
  bob2.display();

  chain3.display();
  bob3.display();

  chain4.display();
  bob4.display();
}

function keyPressed(){
  if(keyCode===LEFT_ARROW){
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-2,y:2});
  }
}