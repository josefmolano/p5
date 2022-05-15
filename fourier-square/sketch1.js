let img;
function preload() {
  img = loadImage('./img/fourier.png');
}

function setup() {
    WIDHT = 400;
    HEIGHT = 500;
    N_POINTS = 10000;
    PI = Math.PI;
    frameRate(20);
    createCanvas(WIDHT, HEIGHT);
    move = 0;
    move_stop = -5;
    FREQ = 4;
    curves = 1;
    AMPLITUDE = 80;
    T_SPEED = 0.2;
} 

function draw() {
    background(255);
    sum_curve = [];

    for (var p=0;p<N_POINTS;p++){
        sum_curve.push(0);
    }

    for (var c=1;c<(2*curves)+1;c+=2){
        //freq_curve = curves[c];
        //noFill();
        strokeWeight(1) ;
        stroke(200);
        beginShape();
        for (var p=0;p<N_POINTS;p++){
            x_sin = 2*PI*p/N_POINTS;
            x = WIDHT*x_sin/(2*PI);
            //y_sin = AMPLITUDE*Math.sin(((x_sin+move)*c*FREQ))/c;
            y_sin = AMPLITUDE*Math.sin(((x_sin)*(c)*FREQ))/c;
            curveVertex(x,y_sin+ HEIGHT/2-AMPLITUDE/2);
            sum_curve[p] = sum_curve[p] + y_sin;
        }
        endShape();
    }

    if(move_stop>0){
        noFill();
        strokeWeight(1);
        stroke(255,0,0);
        beginShape();
        for (var p=0;p<N_POINTS;p++){
            x_sin = 2*PI*p/N_POINTS;
            x = WIDHT*x_sin/(2*PI);
            //y_sin = AMPLITUDE*Math.sin(((x_sin+move)*c*FREQ))/c;
            y_sin = AMPLITUDE*Math.sin(((x_sin)*c*FREQ))/c;
            curveVertex(x, y_sin+ HEIGHT/2-AMPLITUDE/2);
        }
        endShape();
    }

    noFill();
    strokeWeight(3);
    stroke(0);
    beginShape();
    for (var p=0;p<N_POINTS;p++){
        x_sin = 2*PI*p/N_POINTS;
        x = WIDHT*x_sin/(2*PI);
        //y_sin = AMPLITUDE*Math.sin(((x_sin+move)*c*FREQ))/c;
        y_sin = AMPLITUDE*Math.sin(((x_sin)*c*FREQ))/c;
        curveVertex(x, sum_curve[p]+(move*T_SPEED-Math.floor(move*T_SPEED))*y_sin+ HEIGHT/2-AMPLITUDE/2);
    }
    endShape();
    
    if(move_stop>0){
        move=move_stop;
        strokeWeight(1);
        fill(0);
        textSize(20);
        text("n = "+c,260,HEIGHT*0.81);
        noFill();
    }
    else {
        move=0;
        strokeWeight(1);
        fill(0);
        textSize(20);
        text("n = 1",260,HEIGHT*0.81);
        noFill();
    }
    if(curves<5){
        move_stop+=0.1
    }
    else {
        move_stop+=1
    }
    
    curves = 1+Math.floor(move*T_SPEED);

    image(img, 0, HEIGHT*0.7,250,100);
}
