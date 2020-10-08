var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gObject1 = createSprite(100,100,50,50);
  gObject1.shapeColor = "green";
  gObject2 = createSprite(200,100,50,50);
  gObject2.shapeColor = "green";
}


function draw() {
  background(0,0,0);  
 
  //movingRect controls
 movingRect.x = World.mouseX;
 movingRect.y = World.mouseY;
 
 if (isTouching(movingRect,gObject1)) {
  //movingRect's shape color
  movingRect.shapeColor = "red";
  //fixedRect's shape color
   gObject1.shapeColor = "red";
 }
 else 
 if (isTouching(movingRect,gObject2)) {
  //movingRect's shape color
  movingRect.shapeColor = "red";
  //fixedRect's shape color
   gObject2.shapeColor = "red";
 }
 else
 if (isTouching(movingRect,fixedRect)) {
  //movingRect's shape color
  movingRect.shapeColor = "red";
  //fixedRect's shape color
   fixedRect.shapeColor = "red";
 }
 else {
 
 //movingRect's shape color
 movingRect.shapeColor = "green";
 //fixedRect's shape color
  fixedRect.shapeColor = "green";
  //gObject1 color
  gObject1.shapeColor = "green";
  //gObject2 color
  gObject2.shapeColor = "green";
 }
 
 
  drawSprites();
}




