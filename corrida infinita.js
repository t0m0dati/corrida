var cleiton,cleitonImg,cleitonImg2
var fundoImg,fundo;

function preload(){
 cleiton_running=loadAnimation("cleiton1.png.png","cleiton2.png.png");
cleitonImg=loadImage("cleiton1.png.png");
cleitonImg2=loadImage("cleiton2.png.png");   
 fundoImg=loadImage("fundo.png.png");
}

function setup() {
createCanvas(600,600);
fundo=createSprite(300,300);
fundo.addImage("fundo",fundoImg);
fundo.velocityX=-1;
cleiton=createSprite(50,200,50,50);
cleiton.scale=0.50;
cleiton.addImage("cleiton",cleitonImg);
cleiton.addAnimation("running",cleiton_running);
fundo.addImage("fundo",fundoImg);
fundo.X=fundo.width/2;
invisibleGround=createSprite(200,190,400,10);
invisibleGround.visible=false;

}
function draw() {
background(220);
fundo.velocityX=-2;
console.log(fundo.x);
drawSprites();
if(fundo.x >400){
    fundo.x=300
}
if (keyDown("space"))
{
    cleiton.velocityY=-10;   
}
 cleiton.velocityY=cleiton.velocityY+0.5;
 if (fundo.x<0)
 {
    fundo.X=fundo.width/2;}
 }
