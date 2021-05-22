var player, background, playerman, play;

function preload() {
    back = loadImage("img/space-1.gif");
    iron = loadImage("img/iron.png");
    thor = loadImage("img/cat.png")
}

function setup() {
    createCanvas(1200, 1000);
    man = createSprite(625, 280);
    man.scale = 2.5;
    man.addImage(back);


    edge = createEdgeSprites();
    player = createSprite(200, 900, );
    player.addImage(iron);
    player.scale= .14;

    play = createSprite(1000,900);
    play.addImage(thor);
    play.scale=.4;


}

function draw() {
    background("black");
    drawSprites();

    if (keyDown("w")) {
        player.y = player.y - 20;
    }
    if (keyDown("s")) {
        player.y = player.y + 20;
    }
    if (keyDown("a")) {
        player.x = player.x - 20;
    }
    if (keyDown("d")) {
        player.x = player.x + 20;
    }
    if (keyDown("up")) {
        play.y = play.y - 20;
    }
    if (keyDown("down")) {
        play.y = play.y + 20;
    }
    if (keyDown("left")) {
        play.x = play.x - 20;
    }
    if (keyDown("right")) {
        play.x = play.x + 20;
    }

    player.bounceOff(edge[0]);
    player.bounceOff(edge[1]);
    player.bounceOff(edge[2]);
    player.bounceOff(edge[3]);

    play.bounceOff(edge[0]);
    play.bounceOff(edge[1]);
    play.bounceOff(edge[2]);
    play.bounceOff(edge[3]);

    if(player.isTouching(play)) {
        textSize(40)
        text("You Crash", 550,480)
    }
    
    if(play.isTouching(player)) {
        textSize(40)
        text("You Crash", 550,480)
    }
}