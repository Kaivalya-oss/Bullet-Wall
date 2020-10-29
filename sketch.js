var bullet , thickness
var wall;
var speed , weight
var damage;
function setup() {
  createCanvas(900,300);

  wall = createSprite(90,160,thickness,height/2);
  wall.shapeColor = "white";
  bullet = createSprite(600, 200, 50, 50);
  bullet.shapeColor = "white"

  speed = random(50,82);
  weight = random(223,321);
  thickness = random(22,83);
}

function draw() {
  background("yellow");  
  // for the random of the speed & the weight
  

// for the velocity of the car
   bullet.velocityX =  -speed;
 console.log(damage);
  
 if(hasColliede(bullet,wall)){
  damage = 0.5* weight * speed * speed /(thickness * thickness * thickness);  
 
  if(damage<10)
  {
      wall.shapeColor = ("GREEN");
  }

  if(damage>10)
  {
    wall.shapeColor = ("RED");
  }

}
 

  drawSprites();

}
