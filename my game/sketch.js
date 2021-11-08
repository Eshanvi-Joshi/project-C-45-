var girl, girl_walking;
var bg,  bg_image;
var cottage, cottage_image;
var chances = 3;
var edges;

function preload(){
  girl_walking = loadAnimation("images/g1.png","images/g3.png", "images/g6.png","images/g5.png","images/g4.png", "images/g6.png","images/g5.png");
  girl_back = loadAnimation("images/g4.png")
  bg_image = loadImage("images/bg1.jpg");
  cottage_image = loadImage("images/cottage.png")
  werewolf_Img = loadAnimation("images/werewolf7.png", "images/werewolf8.png", "images/werewolf9.png")
  werewolf_Img1 = loadAnimation("images/werewolf4.png", "images/werewolf5.png", "images/werewolf6.png")
}

function setup(){
  createCanvas(600, 400);

  frameDelay=90

  girl = createSprite(50,50, 10, 70);
  girl.addAnimation("walk", girl_walking);
  girl.addAnimation("back", girl_back);
  girl.scale = 0.44;

  cottage = createSprite(500,300,50,50);
  cottage.addImage("cottageImg", cottage_image);
  cottage.scale = 0.4

  w1 = createSprite(150,80, 150, 20)
  w2 = createSprite (120, 130, 20, 100)
  w3 = createSprite(90, 170, 130, 20)
  w4 = createSprite(200, 170, 20, 170)
  w5 = createSprite(270, 124, 130, 20)
  w6 = createSprite(190, 212, 140, 20)
  w7 = createSprite(305,188, 20, 110)
  w8 = createSprite(266,86, 20, 80)
  w9 = createSprite(60, 230, 20, 150)
  w10 = createSprite(150, 302, 160, 20)
  w11 = createSprite(322, 240, 80, 20)
  w12 = createSprite(338, 310, 20, 130)
  w12.shapeColor = "red"
  w13 = createSprite(65, 370, 130, 20)
  w13.shapeColor = "red"

  werewolf = createSprite(25, 340, 20, 20)
  werewolf.addAnimation("werewolfImg", werewolf_Img)
  werewolf.addAnimation("werewolfImg1", werewolf_Img1)
  werewolf.scale = 0.6
  werewolf.velocityX = 2

  // 0 = left, 1 = right, 2 = top, 3 = bottom
  edges = createEdgeSprites()
}

function draw(){
  background(bg_image);

  girlbounceOff();
  girl.bounceOff(edges)

  fill("white")
  text(mouseX + " : " + mouseY, 100,50);
  text("Chances: "+chances, 530, 20)

  if(keyDown(LEFT_ARROW)){
    girl.x = girl.x - 10;
    girl.changeAnimation("back")
  }

  if(keyDown(RIGHT_ARROW)){
    girl.x = girl.x + 10;
    girl.changeAnimation("walk")
  }

  if(keyDown(UP_ARROW)){
    girl.y = girl.y - 10;
    girl.changeAnimation("walk")
  }

  if(keyDown(DOWN_ARROW)){
    girl.y = girl.y + 10;
    girl.changeAnimation("walk")
  }

  if(girl.isTouching(cottage)){
    textSize(50)
    fill("darkblue")
    text("You Are Home!\n  YOU WIN!", 300, 300)
  }

  if(werewolf.bounceOff(w12)){
    werewolf.changeAnimation("werewolfImg1", werewolf_Img1)
  }

  if(werewolf.x<10){
    werewolf.changeAnimation("werewolfImg", werewolf_Img)
    werewolf.velocityX = 2
  }

  if(girl.isTouching(werewolf)){
    chances = chances-1;
    girl.x = 50;
    girl.y = 50;
  }

  if(chances<=0){
    textSize(50)
    fill("darkblue")
    text("Game Over!\n  TRY AGAIN!", 100, 300)
  }
  drawSprites();
}

function girlbounceOff(){
  girl.collide(w1)
  girl.collide(w2)
  girl.collide(w3)
  girl.collide(w4)
  girl.collide(w5)
  girl.collide(w6)
  girl.collide(w7)
  girl.collide(w8)
  girl.collide(w9)
  girl.collide(w10)
  girl.collide(w11)
  girl.collide(w12)
  girl.collide(w13)

}

