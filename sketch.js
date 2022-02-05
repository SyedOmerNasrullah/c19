var towerImg, tower;
var doorImg, door, doorsGroup;
var ghost, ghostImg;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
ghostImg = loadImage("ghost-standing.png");
}

function setup(){
  createCanvas(600,600);

  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}
function draw()
{
background(0);
  spawnDoors();
  drawSprites();
}

function spawnDoors() {
  //write code here to spawn the doors in the tower
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
   
    door.x = Math.round(random(120,400));
   
    
    door.addImage(doorImg);
  
    
    door.velocityY = 1;

   
    //assign lifetime to the variable
    door.lifetime = 800;
    

    
    //add each door to the group
    doorsGroup.add(door);
 
  }
}




