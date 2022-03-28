var gato;
var imagemGato1;
var imagemGato2;

var rato;
var imagemRato1;
var imagemRato2;

var juntos;
var canvas;
var bg;

function preload() {
    //load the images here
    bg=loadImage("images/garden.png");

    imagemGato1=loadAnimation("images/cat1.png");
    imagemGato2=loadAnimation("images/cat2.png","images/cat3.png");
    imagemGato3=loadAnimation("images/cat4.png");

    imagemRato1=loadAnimation("images/mouse1.png");
    imagemRato2=loadAnimation("images/mouse2.png","images/mouse3.png");
    imagemRato3=loadAnimation("images/mouse4.png");
}

function setup(){
     
    canvas=createCanvas(1000,800);
    
    gato=createSprite(870,600);
    gato.addAnimation("gatoDormindo",imagemGato1);
    gato.scale=0.2;

    rato=createSprite(200,600);
    rato.addAnimation("ratoEmPé",imagemRato1);
    rato.scale=0.15;

}

function draw() {

    background(bg);
    
if (gato.x - rato.x<(gato.width-rato.width)/2){
    gato.velocityX=0;
    gato.addAnimation("gatoParado",imagemGato3);
    gato.x=300;
    gato.scale=0.2;
    gato.changeAnimation("gatoParado");

    rato.addAnimation("ultimoRato",imagemRato3);
    rato.scale=0.15;
    rato.changeAnimation("ultimoRato");
}

    drawSprites();
}


function keyPressed(){

 if (keyCode===LEFT_ARROW){
     gato.velocityX=-5;
     gato.addAnimation("gatoCorrendo",imagemGato2);
     gato.changeAnimation("gatoCorrendo");

    rato.addAnimation("ratoComendo",imagemRato2);
    rato.frameDelay=25;
    rato.changeAnimatiom("ratoComendo");
 }


}
