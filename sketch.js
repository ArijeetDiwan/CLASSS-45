var Legends ;
var obstacle;
var enemy;
var ground;

function setup() {
  createCanvas(displayWidth,displayHeight);
  Legends=createSprite(displayWidth/2,displayHeight-50,40,40);
  Legends.shapeColor="red";
 obstacle=createSprite(displayWidth/4,displayHeight-60,20,20);
 enemy=createSprite(displayWidth/2+20,displayHeight-70,60,60);
 ground=createSprite(displayWidth/2,displayHeight-30,displayWidth,10);
}






function draw() {
  background(255,255,255);  
  rectMode(CENTER);
  if(keyDown(UP_ARROW)){
  Legends.x=0;
  Legends.y-=50;
  }

  if(keyDown(DOWN_ARROW)){
     
    Legends.x =-0;
    Legends.y+=40;
  }
  if(keyDown(LEFT_ARROW)){
    Legends.x-=40;
    Legends.y=0;
  }
  if(keyDown(RIGHT_ARROW)){
    Legends.x+=40;
    Legends.y=0;
  }
if(ground.x< 0 ){
  ground.x=ground.width/2
}
  drawSprites();
}