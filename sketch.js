const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var blob1, blob2, blob3, blob4, blob5;
var rope1, rope2, rope3, rope4, rope5;

var num = 30;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;

	const blob_options = {
		restitution: 0.8
	};

	blob1 = Bodies.circle(300,300, num, blob_options);
	World.add(world, blob1);
	blob2 = Bodies.circle(357.5,300, num, blob_options);
	World.add(world, blob2);
	blob3 = Bodies.circle(415,300, num, blob_options);
	World.add(world, blob3);
	blob4 = Bodies.circle(472.5,300, num, blob_options);
	World.add(world, blob4);
	blob5 = Bodies.circle(530,300, num, blob_options);
	World.add(world, blob5);

	rope1 = new Rope({
		pointA: {x: 300, y: 110},
		bodyB: blob1,
		pointB: {x:0, y:0},
		stiffness: 0.1
	});

	rope2 = new Rope({
		pointA: {x: 357.5, y: 110},
		bodyB: blob2,
		pointB: {x:0, y:0},
		stiffness: 0.1
	});

	rope3 = new Rope({
		pointA: {x: 415, y: 110},
		bodyB: blob3,
		pointB: {x:0, y:0},
		stiffness: 0.1
	});

	rope4 = new Rope({
		pointA: {x: 472.5, y: 110},
		bodyB: blob4,
		pointB: {x:0, y:0},
		stiffness: 0.1
	});

	rope5 = new Rope({
		pointA: {x: 530, y: 110},
		bodyB: blob5,
		pointB: {x:0, y:0},
		stiffness: 0.1
	});

	const roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(415,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(150, 0, 77);

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
  //create ellipse shape for multiple bobs here
	ellipse(blob1.position.x, blob1.position.y, num);
	ellipse(blob2.position.x, blob2.position.y, num);
	ellipse(blob3.position.x, blob3.position.y, num);
	ellipse(blob4.position.x, blob4.position.y, num);
	ellipse(blob5.position.x, blob5.position.y, num);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed() {
	if(keyCode == UP_ARROW) {
		Body.applyForce(blob1, {x:0, y:0}, {x:-0.1, y:0});
	}
}
