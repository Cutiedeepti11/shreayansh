var sprite1, sprite2
function setup() {
  createCanvas(800,400);
  sprite1=createSprite(400, 200, 50, 50);
  sprite2=createSprite(200,200,20,20);
}

function draw() {
  background(255,255,255);  
  sprite1.x=mouseX;
  sprite1.y=mouseY;
  console.log(sprite1.x-sprite2.x);
  console.log(sprite1.width/2+sprite2.width/2)
  if(sprite1.x-sprite2.x<sprite1.width/2+sprite2.width/2&&sprite2.x-sprite1.x<sprite2.width/2+sprite1.width/2)
  {
    sprite1.shapeColor="green"
    sprite2.shapeColor="green"
  }
  else
  {
    sprite1.shapeColor="red";
    sprite2.shapeColor="red";
  }
  drawSprites();
}