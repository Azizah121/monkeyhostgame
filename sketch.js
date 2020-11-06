
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var floor1
var survivalTime=0
var backg
function preload(){
  backimage=loadImage("jungle.jpg");
  monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");              
  
  bananaimage = loadImage("banana.png");
  obstacleimage= loadImage("obstacle.png");
 
}



function setup() {
   backg=createSprite(200,200);
  backg.addImage(backimage);
  backg.velocityX=-2;
  monkey=createSprite(80,350);
  monkey.addAnimation("mk",monkeyrunning);
  monkey.scale=0.2;  floor1=createSprite(400,400,900,10);
  floor1.velocityX=-4
  floor1.x=floor1.width/2;
FoodGroup=new Group();
  obstacleGroup=new Group();
 
}


function draw() {
 createCanvas(400,400);
  background("white");
  if(backg.x<-100){
    backg.x=400;
  }
  floor1.visible=false;
  if (keyDown("space")){
    monkey.velocityY=-4;
  }
  if (monkey.y<120){
      monkey.velocityY=4;
  }
  monkey.collide(floor1);
  if (floor1.x/2){
    floor1.x=200;
  }
  food();
  obstacles();
   if (FoodGroup.isTouching(monkey)){
   survivalTime=survivalTime+2;
    FoodGroup.destroyEach();
   }
  switch(survivalTime){
    case 10:monkey.scale=0.22;
      break;
    case 20: monkey.scale=0.24;
      break;
      case 30:monkey.scale=0.26;
      break;
        case 40:monkey.scale=0.28;
      break;
      default:break;
  }
  if (obstacleGroup.isTouching(monkey)){
    monkey.scale=0.2;
  }
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime, 50,50);
}
function food(){
  if (frameCount%80==0){
    banana=createSprite(500,200,10,10);
    banana.y=random(120,200);
    banana.addAnimation("bn",bananaimage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=-10;
    FoodGroup.add(banana);
  }
}
function obstacles(){
  if (frameCount%300==0){
  
    obstacle=createSprite(610,380);
    obstacle.addAnimation("obi",obstacleimage);
    obstacle.scale=0.1
    obstacle.velocityX=-4;
    obstacle.lifetime=-10;
    obstacleGroup.add(obstacle);

  }

}




