var box
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background("yellow");
  if (keyDown("right")){
    background("red")
  }
box = createSprite(100,100,50,50)
drawSprites()
}




