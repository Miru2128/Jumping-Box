var music;
var box;
var surface1, surface2, surface3, surface4;
var border1, border2, border3, border4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    
//creating canvas
createCanvas(800,600);


//surfaces
surface1 = createSprite(100,570,110,35);
surface2 = createSprite(290,570,110,35);
surface3 = createSprite(470,570,110,35);
surface4 = createSprite(650,570,110,35);


//box
box = createSprite(random(20,750),0,30,30);
box.velocityY = 3;
box.velocityX = -3;


//borders
border1 = createSprite(0,200,10,800);
border1.shapeColor = "black";
border2 = createSprite(800,200,10,800);
border2.shapeColor = "black";
border3 = createSprite(500,0,1000,10);
border3.shapeColor = "black";
border4 = createSprite(500,600,1000,10);
border4.shapeColor = "black";

}

function draw() {
//background
background(rgb(169,169,169));

//playing the music
music.play();


//making the box bounce off the edges
box.bounceOff(border1);
box.bounceOff(border2);
box.bounceOff(border3);
box.bounceOff(border4);


//assigning colors to the surfaces
surface1.shapeColor = "pink";
surface2.shapeColor = "orange";
surface3.shapeColor = "aqua";
surface4.shapeColor = "red";


//changing the color of the box same as the surfaces
if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor = "pink";

   }

if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor = "orange";
    
    }

if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor = "aqua";
    music.stop();
    box.velocityX = 0;
    box.velocityY = 0;

    }

if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor = "red";
        
    }


//drawing the sprites
drawSprites();
}



