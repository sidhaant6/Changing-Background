
var r = 0;


var g = 50;
var b=255;
var ball
// INITIALIZE ALL YOUR VARIABLES

// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1020,400);
  ball= createSprite(200,200,40,40);
ball.shapeColor="red";
}


function draw(){
 // ellipse(mouseX,mouseY,)
 
ball.x=World.mouseX;



r=ball.x
if(r>0||r<255){
  g=0
  b=0
  background(r,g,b);
  
}

if(ball.x>255 && ball.x<510){
  g= ball.x-255;
  r=0
  b=0
  background(r,g,b);
}

if(ball.x>510 && ball.x<765){
  g= 0;
  r=0
  b=ball.x-510
  background(r,g,b);
}

if(ball.x>765 && ball.x<1020){
 var rand=random(0,255);
  r= rand
  b= rand+1
  g= rand-1
  background(r,g,b);
}

drawSprites();
text(mouseX+" , "+mouseY,500,100);
// change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}