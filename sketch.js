var score = 0;

var monkey,monkey_running,monkeyImage; 

var bananaGroup,banana,bananaImage; 

var obstacleGroup,obstacle,obstacleImage; 

var ground, invisibleGround, groundImage; 

var background,backgroundImage; 

function preload()
{ 
  groundImage = loadImage("jungle.jpg"); 
  
 monkey_running= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png"); 
  obstacleImage = loadImage("stone.png"); 
}
function setup()
 {
  score = 0;
   
 ground = createSprite(200,200,400,400);
   
 ground.addImage("jungle",groundImage); 
   
 ground.velocityX = -2; 
   
 invisibleGround = createSprite(200,390,400,10); 
   
 invisibleGround.visible = false; 
   
 monkey = createSprite(80,310,20,50);
   
 monkey.scale = 0.10   ;
 ground.scale = 0.6;
   
 bananaGroup = new Group();
 obstacleGroup = new Group();
   
 monkey.addAnimation("monkeyImage",monkey_running);
 } 
function draw() 
 { background(220);
  
  
 
  
   if(keyDown("space") && monkey.y >= 280) {
    monkey.velocityY = -16; 
  }
  
  //console.log(monkey.y);
  
  monkey.velocityY = monkey.velocityY + 0.8
  
 if (ground.x < 100){
    ground.x = ground.width/4;
  }
  
if (frameCount % 100 === 0) {
    var banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(50,120));
    banana.addImage(bananaImage);
    banana.scale = 0.07 ;
    banana.velocityX = -3;
    bananaGroup.add(banana);
}
  if (frameCount % 170 === 0) {
    var obstacle = createSprite(400,380,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.07 ;
    obstacle.velocityX = -5;
    obstacleGroup.add(obstacle);
}
  
  switch(score){
      
    case 10 : monkey.scale = 0.12;
      break;
        
    case 20 : monkey.scale = 0.14;
      break;
        
    case 40 : monkey.scale = 0.16;
      break;
        
    case 50 : monkey.scale = 0.18;
      break;
        
    case 60 : monkey.scale = 0.20;
      break;
        
    case 70 : monkey.scale = 0.22;
      break;
        
    case 85 : monkey.scale = 0.24;
      break;
        
    case 100 : monkey.scale = 0.28;
      break;
    
    default: break;
      
    
      
  }

  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score = score +2;
  }
  
   if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.3;
    score = 0;
  }
  
  monkey.collide(invisibleGround);
  
  
  drawSprites() 
 textsize = 40;
 fill("red");
 text("Score: "+ score, 310,50);
 }
