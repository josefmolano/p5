let polySynth;
let mySound;

function preload() {
    mySound = [
        loadSound("../sounds/slash-21834.mp3")
    ];
}

function setup() {
    WIDHT = 400;
    HEIGHT = 700;
    SIZE = 250;
    frameRate(20);
    createCanvas(WIDHT, HEIGHT);
    N_NUMBERS = 25;
    NUMBERS = [];
    polySynth = new p5.PolySynth();
    for (var n=0;n<N_NUMBERS;n++){
        NUMBERS.push(Math.random()*N_NUMBERS)
    }
    console.log(NUMBERS)

    FRAMES = [];
    PLAY_SOUND = [];
    for (var i=0;i<N_NUMBERS;i++){
        for (var j=0;j<N_NUMBERS-i-1;j++){
            console.log("Hey: "+i+", "+j);
            var changed = false;
            if (NUMBERS[j]>NUMBERS[j+1]){
                temp = NUMBERS[j];
                NUMBERS[j] = NUMBERS[j+1];
                NUMBERS[j+1] = temp;
                changed = true;
                //console.log(NUMBERS);
            }
            snapshot = [];
            for (var num=0;num<N_NUMBERS;num++){
                snapshot.push(NUMBERS[num]);
            }
            FRAMES.push(snapshot)
            if (changed){
                PLAY_SOUND.push(int(NUMBERS[j]*4/N_NUMBERS))
            } 
            else {
                PLAY_SOUND.push(-1)
            }
        }
    }
    //console.log(FRAMES);
    frame = 0;
    //polySynth.play('B2', 1, 0, 0.2);
} 

function draw() {
    background(255);
    noStroke();
    if (frame<FRAMES.length){
        console.log(frame);
        for (var d=0;d<N_NUMBERS;d++){
            fill(int(FRAMES[frame][d]*255/N_NUMBERS));
            arc(WIDHT/2, HEIGHT/2, SIZE, SIZE, d*2*PI/N_NUMBERS, (d+1)*2*PI/N_NUMBERS);
            fill(0,0,0)
            text(
                int(FRAMES[frame][d]*255/N_NUMBERS),
                WIDHT/2+Math.cos((d+0.5)*2*PI/N_NUMBERS)*1.2*SIZE/2-10,
                HEIGHT/2+Math.sin((d+0.5)*2*PI/N_NUMBERS)*1.2*SIZE/2
            )
            //polySynth.play('C2', 1, 0, 0.1);
        }
        if (PLAY_SOUND[frame]!=-1){
            mySound[0].play(0,1,1,0.1,0.5);
        }
        frame++;
    }
    else {
        for (var d=0;d<N_NUMBERS;d++){
            fill(int(NUMBERS[d]*255/N_NUMBERS));
            arc(WIDHT/2, HEIGHT/2, SIZE, SIZE, d*2*PI/N_NUMBERS, (d+1)*2*PI/N_NUMBERS);
            fill(0,0,0)
            text(
                int(NUMBERS[d]*255/N_NUMBERS),
                WIDHT/2+Math.cos((d+0.5)*2*PI/N_NUMBERS)*1.2*SIZE/2-10,
                HEIGHT/2+Math.sin((d+0.5)*2*PI/N_NUMBERS)*1.2*SIZE/2
            )
        }
    }
}
