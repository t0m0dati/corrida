var cleiton,cleitonImg;
var fundoImg,fundo;
var invisiblechao
var PLAY=1;
var END=0;
var gameState=PLAY;
var chao;

function preload(){

 cleitonImg= loadAnimation("cleiton1.png.png", "cleiton2.png.png");
  
 fundoImg=loadImage("fundo.png.png");

}

function setup() {
createCanvas(600,600);

fundo=createSprite(300,300);
fundo.addImage(fundoImg);

cleiton = createSprite(50,200,50,50);
cleiton.scale=0.50;
cleiton.addAnimation("running",cleitonImg);

invisiblechao=createSprite(500,490,1000,50);
invisiblechao.visible=false;

}


function draw()
 {
    background(220);

    if (gameState===PLAY)
    {
        chao.velocityX=-4;


        if(chao.x<0)
        {
            chao.x= chao.width/2
        }

        if (keyDown("space") && cleiton.y >=100){
            cleiton.velocityY=-13;
        }

        cleiton.velocityY=cleiton.velocityY+0.8

    }


    else if (gameState===END)
    {

    chao.velocityX=0;
    } 

    cleiton.collide(invisibleChao);

    drawSprites();


    }
