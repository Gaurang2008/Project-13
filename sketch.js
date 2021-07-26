var garden,rabbit;
var gardenImg,rabbitImg;
var apple

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  redleafImg = loadImage("redImage.png");
  orangeleafImg = loadImage("orangeLeaf.png");
}

function setup(){

  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);




//generate random numbers
var rand=Math.round(random(1,100))
console.log(rand)

}


function draw() {
  background(0);
  
  if(keyDown("left")){
    rabbit.velocityX=-2
  }
  if(keyDown("right")){
    rabbit.velocityX=2
  }
  if(rabbit.isTouching("apple")){
    apple.destroy();
  }
  

  edges= createEdgeSprites();
  rabbit.bounce(edges);

  
//spawn clouds
spawnApples()
spawnLeaf()
spawnRedleaf()
spawnOrangeleaf()

  drawSprites();
}

//spawn Apple
function spawnApples(){
if(frameCount % 80 === 0){
apple=createSprite(300,10,40,10)
apple.addImage(appleImg)
apple.x=Math.round(random(10,390))
apple.scale=0.1;
apple.velocityY=3
apple.depth=rabbit.depth
rabbit.depth = rabbit.depth+1
}
}
function spawnLeaf(){
  if(frameCount % 80 === 0){
  leaf=createSprite(300,10,40,10)
  leaf.addImage(leafImg)
  leaf.x=Math.round(random(10,390))
  leaf.scale=0.1;
  leaf.velocityY=3
  leaf.depth=rabbit.depth
  rabbit.depth = rabbit.depth+1
  }
  
  }

  function spawnRedleaf(){
    if(frameCount % 80 === 0){
    redleaf=createSprite(300,10,40,10)
    redleaf.addImage(redleafImg)
    redleaf.x=Math.round(random(10,390))
    redleaf.scale=0.1;
    redleaf.velocityY=3
    redleaf.depth=rabbit.depth
rabbit.depth = rabbit.depth+1
    }
    
    }
  
  
    function spawnOrangeleaf(){
      if(frameCount % 80 === 0){
      orangeleaf=createSprite(300,10,40,10)
      orangeleaf.addImage(orangeleafImg)
      orangeleaf.x=Math.round(random(10,390))
      orangeleaf.scale=0.1;
      orangeleaf.velocityY=3
      orangeleaf.depth=rabbit.depth
rabbit.depth = rabbit.depth+1
      }
    }
