var Knight;
var Healer;
var Espirit;

var backgroundImg;
var KnighImg;
var HealerImg;
var EspiritImg;

function preload(){
    // carregue o som aqui
    backgroundImg = loadImage('bg.png');

    KnighImg = loadImage('KnightImage.png');
    HealerImg = loadImage('HealerImage.png');
    EspiritImg = loadImage('EspiritImage.png');

    music = loadSound('music.mp3');

}

function setup(){
    tela = createCanvas(800,600);

    Knight = createSprite(200,470,50,50);
    Knight.addImage(KnighImg);
    Knight.scale = 0.1;

    Healer = createSprite(100,470,50,50);
    Healer.addImage(HealerImg);
    Healer.scale = 0.09;

    Espirit = createSprite(300,470,50,50);
    Espirit.addImage(EspiritImg);
    Espirit.scale = 0.1;
}

function draw() {
    background(backgroundImg);
    edges=createEdgeSprites();
    drawSprites();
}