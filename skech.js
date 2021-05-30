var player, background, playerman, play;

function preload() {
    back = loadImage("img/space-1.gif");
    iron = loadImage("img/iron.png");
    thor = loadImage("img/cat.png");
    fire = loadImage("img/fire.png");
    first = loadImage("img/first.png");
    huk = loadImage("img/hb.png");
    hulk = loadImage("img/hulk.png");
    ion = loadImage("img/ion.png");
    thanos = loadImage("img/thanos.png");
    space = loadImage("img/space.png");
}

function setup() {
    createCanvas(1000, 900);
    man = createSprite(500, 280);
    man.scale = 2.5;
    man.addImage(space);

    edge = createEdgeSprites();
    player = createSprite(200, 500);
    player.addImage(huk);
    player.scale= .2;

    // obs = createSprite(200,200);
    // obs.addImage(thanos);
    // obs.scale = .1;
    // player.visible = true

    // obs1 = new Group();
    // obs2 = new Group();
    // obs3 = new Group();
    // obs4 = new Group();
}

function draw() {
    background("black");
    drawSprites();

    if (keyDown("w")) {
        player.y = player.y - 10;
        man.velocityY = 5
    }
    if (keyDown("s")) {
        player.y = player.y + 10;
        man.velocityY = -5
    }
    if (keyDown("a")) {
        player.x = player.x - 10;
        man.velocityX = 5
    }
    if (keyDown("d")) {
        player.x = player.x + 10;
        man.velocityX = -5
    }
    if(keyDown("space")){
        player.y = player.y - 20;
        man.velocityY = 10;
        // createSprite(50,50);
        // fan.addImage(fire);
        // fan.scale = 2;
    }
    if(man.y>1000){
        man.y = man.height/4
    }
    if(man.y<200){
        man.y = man.height/3
    }
    if(man.x>1000){
        man.x = man.width/3
    }
    if(man.x<100){
        man.x = man.width/3
    }

    player.bounceOff(edge[0]);
    player.bounceOff(edge[1]);
    player.bounceOff(edge[2]);
    player.bounceOff(edge[3]);


   
}

