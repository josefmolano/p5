let polySynth;
let mySound;

function preload() {
    mySound = [
        loadSound("sounds/slash-21834.mp3")
    ];
}

function setup() {
    WIDHT = 400;
    HEIGHT = 750;
    RADIUS = 0.8*WIDHT;
    DOT_SIZE = 5;
    TEXT_SPACE_HEIGHT = 200;
    TEXT_OFFSET = 50;
    //frameRate(100);
    createCanvas(WIDHT, HEIGHT);
    inside = 0;
    outside = 0;
} 

function draw() {
    //background(255);
    noFill();
    circle(WIDHT/2,HEIGHT/2,RADIUS);
    noFill();
    rect((WIDHT/2)-RADIUS/2,(HEIGHT/2)-RADIUS/2,RADIUS,RADIUS);
    x_rand = (WIDHT/2)-RADIUS/2+Math.random()*RADIUS;
    y_rand = (HEIGHT/2)-RADIUS/2+Math.random()*RADIUS;
    if (((WIDHT/2-x_rand)**2+(HEIGHT/2-y_rand)**2)<(RADIUS/2)**2){
        fill(0,0,255);
        inside++;
    }
    else {
        fill(255,0,0);
        outside++;
    }
    noStroke();
    //fill(0,0,255);
    circle(
        x_rand,
        y_rand,
        DOT_SIZE
    );
    fill(255);
    rect(0,0,WIDHT,HEIGHT/2-RADIUS/2);
    fill(0);
    textSize(15);
    text("4 x ", 70, 90+TEXT_OFFSET);
    fill(0,0,255);
    textSize(15);
    text(inside + " (Points inside circle)", 95, 90+TEXT_OFFSET);
    fill(0);
    textSize(15);
    text((inside+outside) + " (Total points)", 110, 120+TEXT_OFFSET);
    textSize(20);
    text("π ≈ ", 30, 105+TEXT_OFFSET);
    text("≈ "+(4*(inside)/(inside+outside)).toFixed(6), 270, 105+TEXT_OFFSET);
    stroke(0);
    line(65, 100+TEXT_OFFSET, 260, 100+TEXT_OFFSET);
}
