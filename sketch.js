var changa,c1,p1,p2,p3,p4 ;
var canvas;
var rand;
var r1,r2;

var player;




function preload(){
  changa = loadImage("sprites/changa.png")
}

function setup() {
 canvas=  createCanvas(1800,1800);
c1 =  createSprite(350, 300, 1200, 1000);
 c1.addImage(changa);
 c1.scale = 0.7;

 p1 = createSprite(330,120,15,15);
 p2 = createSprite(370,120,15,15);
 p3 = createSprite(330,485,15,15);
 p4 = createSprite(370,485,15,15);

 r1= createSprite(600,30,15,20);

 
 
}

function draw() {
  background(255,255,255);  
  //text(randomNumber(1,6));
   console.log(rand);

   if(mousePressedOver(r1)){
   rand = Math.round(random(1,8));
  p1.x=p1.x+(5*rand);}

   //if(keyDown(UP_ARROW)){
     //p1.distance +=10
  // }
   
  drawSprites();
}