function setup() {
    HEIGHT = 600;
    GAP_HEIGHT = 175;
    BAR_SPACE = 250;
    BAR_0 = 350;
    createCanvas(600, HEIGHT);
    h = 50;
    v = 2;
    g = 0.2;
    bars = [BAR_0 + 0*BAR_SPACE, BAR_0 + 1*BAR_SPACE, BAR_0 + 2*BAR_SPACE, BAR_0 + 3*BAR_SPACE];
    gaps = [random(HEIGHT - GAP_HEIGHT), random(HEIGHT - GAP_HEIGHT), random(HEIGHT - GAP_HEIGHT), random(HEIGHT - GAP_HEIGHT)];
    v_bar = 0.75;
    a_bar = 0.000075;
    game_over = 0;
    score = 0;
    max_score = 0;
}

function draw() {
    background(180, 180, 250);
    //rect(0,50,20,HEIGHT);
    for (var i=0;i<bars.length;i++){
        fill(10, 200, 10);
        noStroke();
        rect(bars[i],0,40,HEIGHT);
        fill(180, 180, 250);
        noStroke();
        rect(bars[i]-2,gaps[i],40+4,GAP_HEIGHT);
        v_bar+=a_bar;
        if (bars[i] < -40){
            gaps[i] = random(HEIGHT - GAP_HEIGHT);
            if (i != 0){
                bars[i] = bars[i-1] + BAR_SPACE;
            }
            else {
                bars[i] = bars[bars.length-1] + BAR_SPACE;
            }
            score++;
            if (score>=max_score){
                max_score = score;
            }
        }
        else {
            bars[i] -= v_bar;
        }
        if ((h>HEIGHT)||((50>=bars[i]) & (70<=bars[i]+40) & (h<gaps[i] || h>(gaps[i]+GAP_HEIGHT)))){
            fill(0);
            h = 50;
            v = 2;
            g = 0.2;
            bars = [BAR_0 + 0*BAR_SPACE, BAR_0 + 1*BAR_SPACE, BAR_0 + 2*BAR_SPACE, BAR_0 + 3*BAR_SPACE];
            gaps = [random(HEIGHT - GAP_HEIGHT), random(HEIGHT - GAP_HEIGHT), random(HEIGHT - GAP_HEIGHT), random(HEIGHT - GAP_HEIGHT)];
            v_bar = 0.75;
            a_bar = 0.000075;
            game_over=30;
            score=0;
        }

    }

    v += g;
    h += v;
    if (h<0){
        h = 0;
        v = 2;
    }
    textSize(50);
    text("😭", 20, h);
    fill(0);

    if (game_over>0){
        text("¡Perdiste! 😭", 20, 50);
    }
    if (game_over<0){
        game_over=0;
    }
    else {
        game_over--;
    }
    textSize(18);
    text("Puntaje: " + String(score), 480, 30);
    text("Máximo: " + String(max_score), 480, 50);
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