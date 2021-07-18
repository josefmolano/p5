var birdImage; 

function preload(){
	birdImage = loadImage("img/bird.png");
}

function setup() {
    createCanvas(400, 400);
    h = 50;
    v = 3
    g = 0.3
    bars = []
}

function draw() {
    background(220);
    textSize(32);
    v = v+g
    h = h+v
    if (h>400 | h<0){
        h = 0
        v = 2
    }
    //imageMode(CENTER);
    //image(birdImage, 20, h);
    text("🦉", 20, h);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        h = h - 50;
        v = 0
    }
  }

function mouseClicked() {
    h = h - 50;
    v = 0
    return false;
}

function touchStarted() {
    h = h - 50;
    v = 0
    return false;
}