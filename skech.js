var player, background, playerman, play;
var score = 0;
var boost;
var left, right, front, small;
function preload() {
  back = loadImage("img/space-1.gif");
  iron = loadImage("img/iron.png");
  thor = loadImage("img/cat.png");
  fire = loadImage("img/fire.png");
  first = loadImage("img/first.png");
  huk = loadAnimation("img/hb.png");
  hulk = loadImage("img/hulk.png");
  ion = loadImage("img/ion.png");
  thanos = loadImage("img/thanos.png");
  space = loadImage("img/space.png");
  ult = loadImage("img/obs.png");
  dd = loadImage("img/d3.png");
  left = loadAnimation("img/left.png", "img/hb.png");
  right = loadAnimation("img/right.png");
  small = loadAnimation("img/small.png");
  front = loadAnimation("img/front.png");
  dimond = loadImage("img/dimond.png");
  dS = loadSound("sound/coinSound.mp3");
}

function setup() {
  createCanvas(1000, 900);
  man = createSprite(500, 280);
  man.scale = 2.5;
  man.addImage(space);

  edge = createEdgeSprites();
  player = createSprite(200, 500);
  player.addAnimation("hulkbuster", huk);
  player.scale = 0.2;

  // obs = createSprite(200,200);
  // obs.addImage(thanos);
  // obs.scale = .1;
  // player.visible = true

  obs = new Group();
  boss = new Group();
  dimondG = new Group();
  // obs3 = new Group();
  // obs4 = new Group();
}

function draw() {
  background("black");
  drawSprites();

  if (keyDown("w")) {
    player.y = player.y - 10;
    man.velocityY = 5;
    player.changeAnimation("left", small);
    dS.play();
  }
  if (keyDown("s")) {
    player.y = player.y + 10;
    man.velocityY = -5;
    player.changeAnimation("front", front);
  }
  if (keyDown("a")) {
    player.x = player.x - 10;
    man.velocityX = 5;
    player.changeAnimation("left", left);
  }
  if (keyDown("d")) {
    player.x = player.x + 10;
    man.velocityX = -5;
    player.changeAnimation("right", right);
  }
  if (keyDown("space")) {
    player.y = player.y - 20;
    man.velocityY = 10;
    // createSprite(50,50);
    // fan.addImage(fire);
    // fan.scale = 2;
    player.changeAnimation("small", small);
  }
  if (man.y > 1000) {
    man.y = man.height / 4;
  }
  if (man.y < 200) {
    man.y = man.height / 3;
  }
  if (man.x > 1000) {
    man.x = man.width / 3;
  }
  if (man.x < 100) {
    man.x = man.width / 3;
  }

  player.bounceOff(edge[0]);
  player.bounceOff(edge[1]);
  player.bounceOff(edge[2]);
  player.bounceOff(edge[3]);

  generateobs();

  generatebo();
  for (var i = 0; i < huk.length; i++) {
    var temp = huk.get(i);

    if (temp.isTouching(huk)) {
      //   coinSound.play();
      score++;
      temp.destroy();
      temp = null;
    }

    if (huk.isTouching(thanos)) {
      obs.distory();
      obs = null;
    }
  }

  generatedimond();
  for (var i = 0; i < huk.length; i++) {
    var temp = huk.get(i);

    if (temp.isTouching(huk)) {
      dS.play();
      score++;
      temp.destroy();
      temp = null;
    }
  }
}
function generateobs() {
  if (frameCount % 70 == 0) {
    var ob = createSprite(1200, 1);
    // ob.scale = 0.1;
    rand = Math.round(random(1, 2, 3));
    switch (rand) {
      case 1:
        ob.addImage(thanos);
        ob.x = random(50, 1100);
        ob.scale = 0.1;
        ob.velocityY = 9;
        ob.lifetime = 1200;
        break;
      case 2:
        ob.addImage(ult);
        ob.x = random(50, 1100);
        ob.scale = 0.05;
        ob.velocityY = 9;
        ob.lifetime = 1200;
        break;
      case 3:
        di.addImage(dimond);
        di.x = random(50, 1100);
        di.scale = 0.05;
        di.velocityY = 9;
        di.lifetime = 1200;
      default:
        break;
    }

    ob.lifetime = 1200;
    obs.add(ob);
  }
}
function generatebo() {
  if (frameCount % 400 === 0) {
    var coin = createSprite(1200, 120, 40, 10);
    coin.addImage(fire);
    coin.x = Math.round(random(50, 1150));
    coin.scale = 0.06;
    coin.velocityY = 8;
    coin.lifetime = 1200;
    boss.add(coin);
  }
}
function generatedimond() {
  if (frameCount % 120 === 0) {
    var dia = createSprite(1200, 120, 40, 10);
    dia.addImage(dimond);
    dia.x = Math.round(random(50, 1150));
    dia.scale = 0.02;
    dia.velocityY = 8;
    dia.lifetime = 1200;
    dimondG.add(dia);
  }
}
