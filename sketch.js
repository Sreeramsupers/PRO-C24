const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(700,100,50);
    iron = new Iron(300,100)

    stone1 = new Stone(600,300)
    stone2 = new Stone(610,300)
    stone3 = new Stone(620,300)
    stone4 = new Stone(630,300)
    stone5 = new Stone(640,300)
    stone6 = new Stone(650,300)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();

}