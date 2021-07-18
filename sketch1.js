var birdImage; 

function preload(){
	birdImage = loadImage("img/bird.png");
}

function setup() {
    HEIGHT = 600;
    createCanvas(600, HEIGHT);
    h = 50;
    v = 2
    g = 0.2
    bars = []
}

function draw() {
    background(220);
    v = v+g
    h = h+v
    if (h>HEIGHT | h<0){
        h = 0
        v = 2
    }
    //imageMode(CENTER);
    //image(birdImage, 20, h);
    textSize(50);
    text("🦉", 20, h);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        h = h - 70;
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