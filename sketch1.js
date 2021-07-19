var birdImage; 

function preload(){
	birdImage = loadImage("img/bird.png");
}

function setup() {
    HEIGHT = 600;
    BAR_SPACE = 250
    BAR_0 = 200
    createCanvas(600, HEIGHT);
    h = 50;
    v = 2;
    g = 0.2;
    bars = [BAR_0 + 0*BAR_SPACE, BAR_0 + 1*BAR_SPACE, BAR_0 + 2*BAR_SPACE, BAR_0 + 3*BAR_SPACE];
    v_bar = 0.5;
    a_bar = 0.00005;
}

function draw() {
    background(113, 196, 210);
    //rect(0,50,20,HEIGHT);
    for (var i=0;i<bars.length;i++){
        fill(116, 189, 46);
        rect(bars[i],0,40,HEIGHT);
        v_bar+=a_bar;
        if (bars[i] < -40){
            if (i != 0){
                bars[i] = bars[i-1] + BAR_SPACE;
            }
            else {
                bars[i] = bars[bars.length-1] + BAR_SPACE;
            }
        }
        else {
            bars[i] -= v_bar;
        }
    }
    v += g;
    h += v;
    if (h>HEIGHT | h<0){
        h = 0;
        v = 2;
    }
    textSize(50);
    text("🦉", 20, h);
    fill(0);
}

function mouseClicked() {
    h -= 50;
    v = 0;
    return false;
}

function touchStarted() {
    h -= 50;
    v = 0
    return false;
}