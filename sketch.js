var fireblue_moving, bluefire;
var go1Group,go2Group,go3Group,go4Group,go5Group,go6Goup
var background1, backgroundImage;
var firered_moving, redfire;
var firepink_moving, pinkfire;
var player, playerImage;
var a
var see,saw,seen,seed,sown,sed;
var go1,go2go3,go4,go5,go6
var stact,stact1,stact2,stact3,stact4,stact5
var player1,
  player11,
  player2,
  player22,
  player3,
  player33,
  player4,
  player44,
  player5,
  player55,
  player6,
  player66,
  player7,
  player77,
  player8;
var skillstate = 0
var weapon4 = 0
var speci,speci1,speci2,speci3,speci4
var weapon1,weapon11_moving,weapon2,weapon22,weapon33,weapon44,weapon55,weapon66
var back2
var click,click1,clicks
var write, writee,backdis;
var greenfire, greenImage;
var pinkGroup, blueGroup, redGroup, fireGroup;
var count = 0;
var score = 0;
var clicker
var LEVEL1 = 3;
var DISPLAYS = 5;
var DISPLAY = 4;
var DISPLAY2 = 6;
var DISPLAY3 = 7;
var DISPLAY4 = 8;
var DISPLAY5 = 9;
var DISPLAY6 = 10;
var DISPLAY7 = 11;
var SERVE = 2;
var PLAY = 1;
var END = 0;
var gameState = SERVE;
var over, overImage;
var restart, restartImage;
var invisibleground, ground2;
var oversound, bust, press;
var backsong;
var change, gange;
var special
var  timer = 0

function preload() {
  // weaponimg_moving = loadAnimation("hope.png","hope2.png","hope3.png")
  
weapon11_moving = loadAnimation("weapon6.png","weapon7.png","weapon8.png")
  weapon33_moving = loadAnimation("weapon4.png","weapon5.png")
  weapon22 = loadImage("weapon9.png")
  weapon33 = loadImage("weapon11.png")
  stact = loadImage("Capture234.PNG")
  clicker = loadImage("skill.png")
  see = loadImage("back1.jpg")
  saw_moving = loadAnimation("hammer1.png","hammer2.png","hammer3.png","hammer4.png","hammer5.png","hammer6.png")
  seen_moving = loadAnimation("doubleaxe1.png","doubleaxe2.png","doubleaxe3.png","doubleaxe4.png","doubleaxe5.png")
  seed_moving = loadAnimation("battleaxe1.png","battleaxe3.png","battleaxe4.png","battleaxe5.png","battleaxe6.png")
  sown_moving = loadAnimation("sword.png","sword1.png","sword2.png","sword3.png","sword4.png")
  sed_moving = loadAnimation("darkaxe1.png","darkaxe2.png","darkaxe3.png","darkaxe4.png")
  speci = loadImage("player1.png")
  speci1 = loadImage ("player2.png")
  speci2 = loadImage("player3.png")
  speci3 = loadImage("player5.png")
  speci4 = loadImage("player6.png")
  stact1 = loadImage("CaptureHTHRTHRTHRT.PNG")
  stact3 = loadImage("Capture234.PNG")
  weapon44 = loadImage("weapon10.png")
  weapon55 = loadImage("weapon33.png")
  clicks = loadImage("unnamed.png")
  weapon66 = loadImage("output-onlinepngtools (10).png")
  back2 = loadImage("photo-1579546929662-711aa81148cf.jpg")
  player11 = loadImage("output-onlinepngtools - 2021-06-12T100546.302.png");
  click1 = loadImage("111.PNG")
  gange = loadImage("output-onlinepngtools - 2021-06-12T110422.309.png");
  stact2 = loadImage("CaptureFUIOIJ;.PNG")
  backdis = loadImage("Capture.PNG")
  stact4 = loadImage("CaptureM M SD.PNG")
  stact6 = loadImage("Capture5T54TYRTGET.PNG")
  stact5 = loadImage("Capture345.PNG")
  player22 = loadImage("output-onlinepngtools - 2021-06-12T091254.770.png");
  player33 = loadImage("output-onlinepngtools - 2021-06-12T091236.278.png");
  player44 = loadImage("output-onlinepngtools - 2021-06-12T091138.457.png");
  player55 = loadImage("output-onlinepngtools - 2021-06-12T091128.263.png");
  player66 = loadImage("output-onlinepngtools - 2021-06-12T101848.498-1.png");
  player77 = loadImage("output-onlinepngtools - 2021-06-12T101837.976.png");
  writee = loadImage("output-onlinepngtools - 2021-06-12T103742.711.png");
  restartImage = loadImage("restart.png");
  overImage = loadImage("gameover.png");
  fireblue_moving = loadAnimation(
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png"
  );
  backgroundImage = loadImage("288-2888468_preview.png");
  firered_moving = loadAnimation(
    "1-1.png",
    "2-1.png",
    "3-1.png",
    "4-1.png",
    "5-1.png",
    "6-1.png"
  );
  firepink_moving = loadAnimation(
    "1-2.png",
    "2-2.png",
    "3-2.png",
    "4-2.png",
    "5-2.png",
    "6-2.png"
  );
  playerImage = loadImage("jvnq0p8wdqn51.png");
  greenImage_moving = loadAnimation(
    "Effects_Fire_0_01.png",
    "Effects_Fire_0_04.png",
    "Effects_Fire_0_06.png",
    "Effects_Fire_0_07.png",
    "Effects_Fire_0_11.png",
    "Effects_Fire_0_22.png"
  );
  oversound = loadSound("gameOver.mp3");
  bust = loadSound("bomb.wav");
  press = loadSound("jump.mp3");
  backsong = loadSound("swoosh1.mp3");
  fireringImg = loadImage("firering.png")
}

function setup() {
  canvas = createCanvas(1200, 800);

  background1 = createSprite(300, 150, 100, 100);
  background1.addImage(backgroundImage);

  background1.scale = 0.5;

  player = createSprite(100, 200, 10, 10);
  player.addImage(playerImage);
  player.scale = 0.2;
  player.setCollider("circle",0,0,140)

  player1 = createSprite(120, 90, 10, 10);
  player1.addImage(player22);
  player1.scale = 0.15;
  player1.setCollider("circle",0,0,140)

  player2 = createSprite(300, 90, 10, 10);
  player2.addImage(player33);
  player2.scale = 0.24;
  player2.setCollider("circle",0,0,140)

  player3 = createSprite(500, 90, 10, 10);
  player3.addImage(player44);
  player3.scale = 0.24;
  player3.setCollider("circle",0,0,140)

  player4 = createSprite(672, 93, 10, 10);
  player4.addImage(player55);
  player4.scale = 0.29;
  player4.setCollider("circle",0,0,140)

  player5 = createSprite(120, 250, 10, 10);
  player5.addImage(playerImage);
  player5.scale = 0.25;
  player5.setCollider("circle",0,0,140)

  player6 = createSprite(300, 240, 10, 10);
  player6.addImage(player11);
  player6.scale = 0.26;
  player6.setCollider("circle",0,0,140)

  player7 = createSprite(500, 230, 10, 10);
  player7.addImage(player66);
  player7.scale = 0.33;
  player7.setCollider("circle",0,0,140)

  write = createSprite(400, 365, 500, 80);
  write.addImage(writee);
  write.scale = 0.4;
  
  special = createSprite(80,65,30,80)
  special.addImage(clicker)
  special.scale = 0.1

  player8 = createSprite(690, 240, 10, 10);
  player8.addImage(player77);
  player8.scale = 0.29;

  change = createSprite(398, 52, 10, 10);
  change.addImage(gange);
  change.scale = 0.1;

  over = createSprite(300, 150, 20, 20);
  over.addImage(overImage);

  restart = createSprite(300, 200, 20, 20);
  restart.addImage(restartImage);
  restart.scale = 0.4;
  
  click = createSprite(500,300,20,20)
  click.addImage(clicks)
  click.scale = 0.5


  invisibleground = createSprite(300, 310, 600, 10);

  ground2 = createSprite(300, 6, 600, 10);

  pinkGroup1 = createGroup();
  pinkGroup = createGroup();
  blueGroup1 = createGroup();
  blueGroup = createGroup();
  redGroup = createGroup();
  redGroup1 = createGroup();
  go1Group = createGroup();
  go2Group = createGroup();
  go3Group = createGroup();
  go4Group = createGroup();
  go5Group = createGroup();
  go6Group = createGroup();
  fireGroup = createGroup();
}

function draw() {
  background("white");
  player.collide(invisibleground);
  player.collide(ground2);

  if (gameState === SERVE) {
    score = 0;
    background1.velocityX = 0;
    background1.addImage(back2)
    background1.changeImage(back2)
    background1.scale = 1.2
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    player.visible = false;
    click.visible = false;
    special.visible = false;
    over.visible = false;
    restart.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = true;
    change.visible = false;
    player1.visible = true;
    player2.visible = true;
    player3.visible = true;
    player4.visible = true;
    player5.visible = true;
    player6.visible = true;
    player7.visible = true;
    player8.visible = true;

    if (mousePressedOver(player1)) {
      gameState = DISPLAYS;
    }
    if (mousePressedOver(player2)) {
  
      gameState = DISPLAY2;
    }
    if (mousePressedOver(player3)) {
      gameState = DISPLAY3;
    }
    if (mousePressedOver(player4)) {
      gameState = DISPLAY;
      
    }
    if (mousePressedOver(player5)) {
      gameState = DISPLAY4;
    }
    
    if (mousePressedOver(player6)) {
      gameState = DISPLAY5;
    }
    if (mousePressedOver(player7)) {
      gameState = DISPLAY6;
    }
    if (mousePressedOver(player8)) {
      gameState = DISPLAY7;
    }
      
  }
  if(gameState === DISPLAY){
    player.addImage(player55);
    
    player.scale = 0.29; 
       
    player.visible = false;
    special.visible = false;
    click.visible = true;
    over.visible = false;
    restart.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = false;
    change.visible = false;
    player1.visible = false;
    player2.visible = false;
    player3.visible =false;
    player4.visible = false;
    player5.visible = false;
    player6.visible = false;
    player7.visible = false;
    player8.visible = false;
    background1.addImage(backdis)
    background1.changeImage(backdis)
    background1.scale = 1
        if (mousePressedOver(click)) {
          gameState = PLAY;
          weapon4 = 4
        }
    }
  if(gameState === DISPLAYS){
    player.addImage(player22);
    player.scale = 0.15;
    player.visible = false;
    click.visible = true;
    over.visible = false;
    restart.visible = false;
    special.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = false;
    change.visible = false;
    player1.visible = false;
    player2.visible = false;
    player3.visible =false;
    player4.visible = false;
    player5.visible = false;
    player6.visible = false;
    player7.visible = false;
    player8.visible = false;
    background1.addImage(click1)
    background1.changeImage(click1)
    background1.scale = 1
        if (mousePressedOver(click)) {

          gameState = PLAY;
          weapon4 = 1
        }
    }
    if(gameState === DISPLAY2){
    player.addImage(player33);
     player.scale = 0.24;
      click.y = 200
    player.visible = false;
    click.visible = true;
    over.visible = false;
    restart.visible = false;
      special.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = false;
    change.visible = false;
    player1.visible = false;
    player2.visible = false;
    player3.visible =false;
    player4.visible = false;
    player5.visible = false;
    player6.visible = false;
    player7.visible = false;
    player8.visible = false;
    background1.addImage(stact1)
    background1.changeImage(stact1)
    background1.scale = 1
        if (mousePressedOver(click)) {

          gameState = PLAY;
          weapon4 = 2
        }
    }
  if(gameState === DISPLAY3){
    player.addImage(player44);
     player.scale = 0.24;
    click.y = 320
    click.x = 200
    player.visible = false;
    click.visible = true;
    over.visible = false;
    restart.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = false;
    change.visible = false;
    special.visible = false;
    player1.visible = false;
    player2.visible = false;
    player3.visible =false;
    player4.visible = false;
    player5.visible = false;
    player6.visible = false;
    player7.visible = false;
    player8.visible = false;
    background1.addImage(stact2)
    background1.changeImage(stact2)
    background1.scale = 1
        if (mousePressedOver(click)) {

          gameState = PLAY;
          weapon4 = 3
        }
    }
    if(gameState === DISPLAY4){
    player.addImage(playerImage);
     player.scale = 0.2;
    click.y = 320
    click.x = 200
    player.visible = false;
    click.visible = true;
    over.visible = false;
    restart.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = false;
    change.visible = false;
    special.visible = false;
    player1.visible = false;
    player2.visible = false;
    player3.visible =false;
    player4.visible = false;
    player5.visible = false;
    player6.visible = false;
    player7.visible = false;
    player8.visible = false;
    background1.addImage(stact3)
    background1.changeImage(stact3)
    background1.scale = 1
        if (mousePressedOver(click)) {

          gameState = PLAY;
          weapon4 = 5
        }
    }
    if(gameState === DISPLAY5){
    player.addImage(player11);
     player.scale = 0.2;
    click.y = 320
    click.x = 200
    player.visible = false;
    click.visible = true;
    over.visible = false;
    restart.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = false;
    change.visible = false;
    special.visible = false;
    player1.visible = false;
    player2.visible = false;
    player3.visible =false;
    player4.visible = false;
    player5.visible = false;
    player6.visible = false;
    player7.visible = false;
    player8.visible = false;
    background1.addImage(stact4)
    background1.changeImage(stact4)
    background1.scale = 1
        if (mousePressedOver(click)) {

          gameState = PLAY;
          weapon4 = 6
        }
    }
     if(gameState === DISPLAY6){
    player.addImage(player66);
      player.scale = 0.29;
    click.y = 320
    click.x = 200
    player.visible = false;
    click.visible = true;
    over.visible = false;
    restart.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = false;
    change.visible = false;
    special.visible = false;
    player1.visible = false;
    player2.visible = false;
    player3.visible =false;
    player4.visible = false;
    player5.visible = false;
    player6.visible = false;
    player7.visible = false;
    player8.visible = false;
    background1.addImage(stact5)
    background1.changeImage(stact5)
    background1.scale = 1
        if (mousePressedOver(click)) {

          gameState = PLAY;
          weapon4 = 7
        }
    }
     if(gameState === DISPLAY7){
    player.addImage(player77);
     player.scale = 0.2
    click.y = 320
    click.x = 350
    player.visible = false;
    click.visible = true;
    over.visible = false;
    restart.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = false;
    change.visible = false;
    special.visible = false;
    player1.visible = false;
    player2.visible = false;
    player3.visible =false;
    player4.visible = false;
    player5.visible = false;
    player6.visible = false;
    player7.visible = false;
    player8.visible = false;
    background1.addImage(stact6)
    background1.changeImage(stact6)
    background1.scale = 1
        if (mousePressedOver(click)) {

          gameState = PLAY;
          weapon4 = 8
        }
    }
    //play state
  if (gameState === PLAY) {

    if (mousePressedOver(special)&& skillstate === 0) {
      skillstate = 1
       special.destroy();
      special1();
    }
  
    if(skillstate === 1){
      timer = timer + 1
      if(pinkGroup.isTouching(player)&& skillstate == 1){
        pinkGroup.destroyEach()
        pinkGroup1.destroyEach()
        blueGroup.destroyEach()
        blueGroup1.destroyEach();
        redGroup1.destroyEach();
        redGroup.destroyEach();
      }
    if(pinkGroup1.isTouching(player)&& skillstate == 1){
        pinkGroup.destroyEach()
        pinkGroup1.destroyEach()
        blueGroup.destroyEach()
        blueGroup1.destroyEach();
        redGroup1.destroyEach();
        redGroup.destroyEach();
      }
    if(blueGroup.isTouching(player)&& skillstate == 1){
        pinkGroup.destroyEach()
        pinkGroup1.destroyEach()
        blueGroup.destroyEach()
        blueGroup1.destroyEach();
        redGroup1.destroyEach();
        redGroup.destroyEach();
      }
    if(blueGroup1.isTouching(player)&& skillstate == 1){
        pinkGroup.destroyEach()
        pinkGroup1.destroyEach()
        blueGroup.destroyEach()
        blueGroup1.destroyEach();
        redGroup1.destroyEach();
        redGroup.destroyEach();
      }
    if(redGroup1.isTouching(player)&& skillstate == 1){
        pinkGroup.destroyEach()
        pinkGroup1.destroyEach()
        blueGroup.destroyEach()
        blueGroup1.destroyEach();
        redGroup1.destroyEach();
        redGroup.destroyEach();
      }
    if(redGroup.isTouching(player)&& skillstate == 1){
        pinkGroup.destroyEach()
        pinkGroup1.destroyEach()
        blueGroup.destroyEach()
        blueGroup1.destroyEach();
        redGroup1.destroyEach();
        redGroup.destroyEach();
      }
    }
    if (weapon4 === 4){
      special.remove();
    }
    if (weapon4 === 1){
      special.remove();
    }
    if(timer >= 700){
      skillstate = 0
      timer = 0
    }
    if (skillstate === 0 && weapon4 === 5){
      player.addImage( playerImage)
      player.changeImage(playerImage)
      player.scale = 0.2
     }else if(skillstate === 0 && weapon4 === 2){
      player.addImage( player33)
      player.changeImage(player33)
       player.scale = 0.24;
    }else if(skillstate === 0 && weapon4 === 3){
      player.addImage( player44)
      player.changeImage(player44)
      player.scale = 0.24;
    }else if(skillstate === 0 && weapon4 === 6){
      player.addImage( player11)
      player.changeImage(player11)
      player.scale = 0.2
   }else if(skillstate === 0 && weapon4 === 7){
      player.addImage( player66)
      player.changeImage(player66)
      player.scale = 0.29;
              }
    
    score = score + Math.round(getFrameRate() / 60);
     background1.addImage(backgroundImage)
     background1.changeImage(backgroundImage)
    background1.scale = 0.5
    if (score === 700) {
      gameState = LEVEL1;
    }
    //Skill for player5
    
    
    //changing the animations  
    if (mousePressedOver(change) && count == 0) {
      press.play();
      count = count + 3;
      change.visible = false;
      gameState = SERVE;
    }
    if (count === 3) {
      change.destroy();
    }

    if (fireGroup.isTouching(pinkGroup)) {
      fireGroup.destroyEach();
      pinkGroup.destroyEach();
    }
    if (fireGroup.isTouching(pinkGroup1)) {
      fireGroup.destroyEach();
      pinkGroup1.destroyEach();
    }
    if (fireGroup.isTouching(blueGroup)) {
      fireGroup.destroyEach();
      blueGroup.destroyEach();
    }
    if (fireGroup.isTouching(blueGroup1)) {
      fireGroup.destroyEach();
      blueGroup1.destroyEach();
    }
    if (fireGroup.isTouching(redGroup)) {
      fireGroup.destroyEach();
      redGroup.destroyEach();
    }
    if (fireGroup.isTouching(redGroup1)) {
      fireGroup.destroyEach();
      redGroup1.destroyEach();
    }
    if (background1.x < 100) {
      background1.x = 400;
    }

    background1.velocityX = -(7 + (7 * score) / 100);

    player.visible = true;
    over.visible = false;
    special.visible = true;
    restart.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = false;
    click.visible = false;
    change.visible = true;
    player1.visible = false;
    player2.visible = false;
    player3.visible = false;
    player4.visible = false;
    player5.visible = false;
    player6.visible = false;
    player7.visible = false;
    player8.visible = false;

    cyan();
    red2();
    pink2();
    cyan2();
    redba();
    redba1();
  }
  if (gameState === LEVEL1) {

    special.x = 580
    if (keyWentDown("up")) {
      player.velocityX = 0;
      player.velocityY = -5;
    }
    if (keyWentUp("up")) {
      player.velocityX = 0;
      player.velocityY = 0;
    }
    if (keyWentDown("down")) {
      player.velocityX = 0;
      player.velocityY = 5;
    }
    if (keyWentUp("down")) {
      player.velocityX = 0;
      player.velocityY = 0;
    }

    if (keyDown("space")) {
      backsong.play();
      shoot();
    }
    if (mousePressedOver(special)&& skillstate === 0) {
      skillstate = 1
       special.destroy();
      special1();
    }

    if(skillstate === 1){
      timer = timer + 1
      if(go1Group.isTouching(player)&& skillstate == 1){
        go1Group.destroyEach()
        go2Group.destroyEach()
        go3Group.destroyEach()
        go4Group.destroyEach();
        go5Group.destroyEach();
        go6Group.destroyEach();
      }
    if(go2Group.isTouching(player)&& skillstate == 1){
      go1Group.destroyEach()
      go2Group.destroyEach()
      go3Group.destroyEach()
      go4Group.destroyEach();
      go5Group.destroyEach();
      go6Group.destroyEach();
      }
    if(go3Group.isTouching(player)&& skillstate == 1){
      go1Group.destroyEach()
      go2Group.destroyEach()
      go3Group.destroyEach()
      go4Group.destroyEach();
      go5Group.destroyEach();
      go6Group.destroyEach();
      }
    if(go4Group.isTouching(player)&& skillstate == 1){
      go1Group.destroyEach()
      go2Group.destroyEach()
      go3Group.destroyEach()
      go4Group.destroyEach();
      go5Group.destroyEach();
      go6Group.destroyEach();
      }
    if(go5Group.isTouching(player)&& skillstate == 1){
      go1Group.destroyEach()
      go2Group.destroyEach()
      go3Group.destroyEach()
      go4Group.destroyEach();
      go5Group.destroyEach();
      go6Group.destroyEach();
      }
    if(go6Group.isTouching(player)&& skillstate == 1){
      go1Group.destroyEach()
      go2Group.destroyEach()
      go3Group.destroyEach()
      go4Group.destroyEach();
      go5Group.destroyEach();
      go6Group.destroyEach();
      }
    }
    if (weapon4 === 4){
      special.remove();
    }
    if (weapon4 === 1){
      special.remove();
    }
    if(timer >= 500){
      skillstate = 0
      timer = 0
    }
    if (skillstate === 0 && weapon4 === 5){
      player.addImage( playerImage)
      player.changeImage(playerImage)
      player.scale = 0.2
     }else if(skillstate === 0 && weapon4 === 2){
      player.addImage( player33)
      player.changeImage(player33)
       player.scale = 0.24;
    }else if(skillstate === 0 && weapon4 === 3){
      player.addImage( player44)
      player.changeImage(player44)
      player.scale = 0.24;
    }else if(skillstate === 0 && weapon4 === 6){
      player.addImage( player11)
      player.changeImage(player11)
      player.scale = 0.2
   }else if(skillstate === 0 && weapon4 === 7){
      player.addImage( player66)
      player.changeImage(player66)
      player.scale = 0.29;
              }
    
    score = score + Math.round(getFrameRate() / 60);
     background1.addImage(see)
     background1.changeImage(see)
    background1.scale = 2
    //Skill for player5
    
    
    //changing the animations  
    if (mousePressedOver(change) && count == 0) {
      press.play();
      count = count + 3;
      change.visible = false;
      gameState = SERVE;
    }
    if (count === 3) {
      change.destroy();
    }

    if (fireGroup.isTouching(go1Group)) {
      fireGroup.destroyEach();
      go1Group.destroyEach();
    }
    if (fireGroup.isTouching(go2Group)) {
      fireGroup.destroyEach();
      go2Group.destroyEach();
    }
    if (fireGroup.isTouching(go3Group)) {
      fireGroup.destroyEach();
      go3Group.destroyEach();
    }
    if (fireGroup.isTouching(go4Group)) {
      fireGroup.destroyEach();
      go4Group.destroyEach();
    }
    if (fireGroup.isTouching(go5Group)) {
      fireGroup.destroyEach();
      go5Group.destroyEach();
    }
    if (fireGroup.isTouching(go6Group)) {
      fireGroup.destroyEach();
      go6Group.destroyEach();
    }
    if (background1.x < 100) {
      background1.x = 400;
    }

    background1.velocityX = -(7 + (7 * score) / 100);

    player.visible = true;
    over.visible = false;
    special.visible = true;
    restart.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = false;
    click.visible = false;
    change.visible = true;
    player1.visible = false;
    player2.visible = false;
    player3.visible = false;
    player4.visible = false;
    player5.visible = false;
    player6.visible = false;
    player7.visible = false;
    player8.visible = false;

    obs();
    obs1();
    obs2();
    obs3();
    obs4();
    obs5();

  }
  if (gameState === PLAY) {
    if (keyWentDown("up")) {
      player.velocityX = 0;
      player.velocityY = -5;
    }
    if (keyWentUp("up")) {
      player.velocityX = 0;
      player.velocityY = 0;
    }
    if (keyWentDown("down")) {
      player.velocityX = 0;
      player.velocityY = 5;
    }
    if (keyWentUp("down")) {
      player.velocityX = 0;
      player.velocityY = 0;
    }

    if (keyDown("space")) {
      backsong.play();
      shoot();
    }
  }
  
  
  

  if (gameState === END) {
    if (mousePressedOver(restart)) {
      reset();
      press.play();
    }
    background1.velocityX = 0;
    player.visible = false;
    over.visible = true;
    restart.visible = true;
    special.visible = false;
    click.visible = false;
    write.visible = false;
    invisibleground.visible = false;
    change.visible = false;
  }

  if (player.isTouching(go1Group)) {
    bust.play();
    go1Group.destroyEach()
    go2Group.destroyEach()
    go3Group.destroyEach()
    go4Group.destroyEach();
    go5Group.destroyEach();
    go6Group.destroyEach();
    oversound.play();
    gameState = END;
  }

  if (player.isTouching(go2Group)) {
    gameState = END;
    oversound.play();
    go1Group.destroyEach()
    go2Group.destroyEach()
    go3Group.destroyEach()
    go4Group.destroyEach();
    go5Group.destroyEach();
    go6Group.destroyEach();
    bust.play();
  }
  if (player.isTouching(go3Group)) {
    gameState = END;
    oversound.play();
    go1Group.destroyEach()
    go2Group.destroyEach()
    go3Group.destroyEach()
    go4Group.destroyEach();
    go5Group.destroyEach();
    go6Group.destroyEach();
    bust.play();
  }
  if (player.isTouching(go4Group)) {
    gameState = END;
    oversound.play();
    go1Group.destroyEach()
    go2Group.destroyEach()
    go3Group.destroyEach()
    go4Group.destroyEach();
    go5Group.destroyEach();
    go6Group.destroyEach();
    bust.play();
    bust.play();
  }
  if (player.isTouching(go5Group)) {
    gameState = END;
    oversound.play();
    go1Group.destroyEach()
    go2Group.destroyEach()
    go3Group.destroyEach()
    go4Group.destroyEach();
    go5Group.destroyEach();
    go6Group.destroyEach();
    bust.play();
  }
  if (player.isTouching(go6Group)) {
    gameState = END;
    oversound.play();
    go1Group.destroyEach()
    go2Group.destroyEach()
    go3Group.destroyEach()
    go4Group.destroyEach();
    go5Group.destroyEach();
    go6Group.destroyEach();
    bust.play();
  }

  if (player.isTouching(pinkGroup)) {
    bust.play();
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    oversound.play();
    gameState = END;
  }

  if (player.isTouching(pinkGroup)) {
    gameState = END;
    oversound.play();
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    bust.play();
  }
  if (player.isTouching(pinkGroup1)) {
    gameState = END;
    oversound.play();
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    bust.play();
  }
  if (player.isTouching(blueGroup)) {
    gameState = END;
    oversound.play();
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    bust.play();
  }
  if (player.isTouching(blueGroup1)) {
    gameState = END;
    oversound.play();
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    bust.play();
  }
  if (player.isTouching(redGroup1)) {
    gameState = END;
    oversound.play();
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    bust.play();
  }
  if (player.isTouching(redGroup)) {
    gameState = END;
    oversound.play();
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    bust.play();
  }

  drawSprites();
if (gameState === PLAY){
  stroke("cyan");
  fill("cyan");
text("timer:"+ timer,200,50)
  text(mouseX + "," + mouseY, mouseX, mouseY);
  text("score:" + score, 450, 50);
}
if (gameState === LEVEL1){
  stroke("cyan");
  fill("cyan");
text("timer:"+ timer,200,50)
  text(mouseX + "," + mouseY, mouseX, mouseY);
  text("score:" + score, 450, 50);
  stroke("magenta");
  fill("magenta");
  text("LEVEL 2",300, 50)
}
  
}

function cyan() {
  if (frameCount % 180 === 0) {
    bluefire = Math.round(random(600, 500));
    bluefire = createSprite(600, 100, 20, 20);
    bluefire.addAnimation("moving", fireblue_moving);
    bluefire.scale = 0.4;
    bluefire.velocityX = -(4 + score / 100);

    bluefire.lifetime = 150;

    blueGroup.add(bluefire);
  }
}

function red2() {
  if (frameCount % 180 === 0) {
    pinkfire = createSprite(600, 200, 20, 20);
    pinkfire.addAnimation("moving", firepink_moving);
    pinkfire.scale = 0.4;
    pinkfire.velocityX = -(4 + score / 100);
    pinkfire.x = Math.round(random(600, 500));
    pinkfire.lifetime = 150;

    pinkGroup.add(pinkfire);
  }
}

function pink2() {
  if (frameCount % 180 === 0) {
    pinkfire = createSprite(600, 300, 20, 20);
    pinkfire.addAnimation("moving", firepink_moving);
    pinkfire.scale = 0.4;
    pinkfire.velocityX = -(4 + score / 100);
    pinkfire.x = Math.round(random(600, 500));
    pinkfire.lifetime = 150;

    pinkGroup1.add(pinkfire);
  }
}

function cyan2() {
  if (frameCount % 180 === 0) {
    bluefire = Math.round(random(600, 500));
    bluefire = createSprite(600, 200, 20, 20);
    bluefire.addAnimation("moving", fireblue_moving);
    bluefire.scale = 0.4;
    bluefire.velocityX = -(4 + score / 100);

    bluefire.lifetime = 150;
    blueGroup1.add(bluefire);
  }
}

function redba() {
  if (frameCount % 180 === 0) {
    redfire = Math.round(random(600, 500));
    redfire = createSprite(600, 200, 20, 20);
    redfire.addAnimation("moving", firered_moving);
    redfire.scale = 0.4;
    redfire.velocityX = -(4 + score / 100);

    redfire.lifetime = 150;

    redGroup.add(redfire);
  }
}

function redba1() {
  if (frameCount % 180 === 0) {
    redfire = Math.round(random(600, 500));
    redfire = createSprite(600, 50, 20, 20);
    redfire.addAnimation("moving", firered_moving);
    redfire.scale = 0.4;
    redfire.velocityX = -(4 + score / 100);

    redfire.lifetime = 150;

    redGroup1.add(redfire);
  }
}
function obs5() {
  if (frameCount % 180 === 0) {
    go6 = Math.round(random(600, 500));
    go6 = createSprite(600, 100, 20, 20);
    go6.addAnimation("moving", saw_moving);
    go6.scale = 1;
    go6.velocityX = -(4 + score / 100);

    go6.lifetime = 150;

    go6Group.add(go6);
  }
}

function obs4() {
  if (frameCount % 180 === 0) {
    go5 = createSprite(600, 200, 20, 20);
    go5.addAnimation("moving", seen_moving);
    go5.scale = 1;
    go5.velocityX = -(4 + score / 100);
    go5.x = Math.round(random(600, 500));
    go5.lifetime = 150;

    go5Group.add(go5);
  }
}

function obs3() {
  if (frameCount % 180 === 0) {
    go4 = createSprite(600, 300, 20, 20);
    go4.addAnimation("moving", sed_moving);
    go4.scale =1;
    go4.velocityX = -(4 + score / 100);
    go4.x = Math.round(random(600, 500));
    go4.lifetime = 150;

    go4Group.add(go4);
  }
}

function obs2() {
  if (frameCount % 180 === 0) {
    go3 = Math.round(random(600, 500));
    go3 = createSprite(600, 200, 20, 20);
    go3.addAnimation("moving", sown_moving);
    go3.scale = 1;
    go3.velocityX = -(4 + score / 100);

    go3.lifetime = 150;
    go3Group.add(go3);
  }
}

function obs1() {
  if (frameCount % 180 === 0) {
    go2 = Math.round(random(600, 500));
    go2 = createSprite(600, 200, 20, 20);
    go2.addAnimation("moving", seed_moving);
    go2.scale = 1;
    go2.velocityX = -(4 + score / 100);

    go2.lifetime = 150;

    go2Group.add(go2);
  }
}

function obs() {
  if (frameCount % 180 === 0) {
    go1= Math.round(random(600, 500));
    go1 = createSprite(600, 50, 20, 20);
    go1.addAnimation("moving", sed_moving);
    go1.scale = 1;
    go1.velocityX = -(4 + score / 100);

    go1.lifetime = 150;

    go1Group.add(go1);
  }
}

function shoot() {
  greenfire = createSprite(100, 100, 5, 10);
  greenfire.velocityX = 6;
  greenfire.y = player.y;
  greenfire.lifetime = 100;
if(weapon4 === 3){
  greenfire.addAnimation("moving1",weapon11_moving)
  greenfire.scale = 0.5
}else if (weapon4 === 5){greenfire.addAnimation("moving", greenImage_moving)}else if(weapon4 === 4){
  greenfire.addImage(weapon22)
  greenfire.scale = 0.5
}else if(weapon4 === 7){
  greenfire.addAnimation("moving2",weapon33_moving)
  greenfire.scale = 0.7}else if(weapon4 === 1){
  greenfire.addImage(weapon55)
  greenfire.scale = 0.5 }else if(weapon4 === 6){
  greenfire.addImage(weapon44)
  greenfire.scale = 0.2}else if(weapon4 === 8){
  greenfire.addImage(weapon33)
  greenfire.scale = 0.2}else if(weapon4 === 2){
  greenfire.addImage(weapon66)
  greenfire.scale = 0.4}
  
  fireGroup.add(greenfire);

}
function special1() {
  if (weapon4 === 5) {
    player.addImage(speci);
    player.changeImage(speci);
    player.scale = 0.5;
  } else if (weapon4 === 2) {
    player.addImage(speci2);
    player.changeImage(speci2);
    player.scale = 0.5;
  } else if (weapon4 === 3) {
    player.addImage(speci3);
    player.changeImage(speci3);
    player.scale = 0.5;
  } else if (weapon4 === 6) {
    player.addImage(speci1);
    player.changeImage(speci1);
    player.scale = 0.5;
  } else if (weapon4 === 7) {
    player.addImage(speci4);
    player.changeImage(speci4);
    player.scale = 0.5;
  }
}
function shoot2() {
  weapon = createSprite(100, 100, 5, 10);
  weapon.velocityX = 6;
  weapon.addAnimation("moving", weaponimg_moving);
}
function reset() {
  gameState = PLAY;
  over.visible = false;
  restart.visible = false;
  pinkGroup.destroyEach();
  blueGroup.destroyEach();
  redGroup.destroyEach();
  pinkGroup1.destroyEach();
  blueGroup1.destroyEach();
  redGroup1.destroyEach();
  score = 0;
}