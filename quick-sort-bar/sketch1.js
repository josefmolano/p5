let polySynth;
let mySound;
let FRAMES = [];
let PLAY_SOUND = [];

function preload() {
    mySound = [
        loadSound("../sounds/slash-21834.mp3")
    ];
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high) {
    let pivot = arr[high];
 
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
        var changed = false;
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
            changed = true;
        }
    
        snapshot = [];
        for (var num=0;num<N_NUMBERS;num++){
            snapshot.push(arr[num]);
        }
        FRAMES.push(snapshot);
        if(changed){
            PLAY_SOUND.push(1);
        }
        else {
            PLAY_SOUND.push(-1);
        }
    }
    swap(arr, i + 1, high);
    
    snapshot = [];
    for (var num=0;num<N_NUMBERS;num++){
        snapshot.push(arr[num]);
    }
    FRAMES.push(snapshot);
    PLAY_SOUND.push(1);

    return (i + 1);
}
 
function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
 
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function setup() {
    WIDHT = 400;
    HEIGHT = 500;
    SIZE = 250;
    frameRate(30);
    createCanvas(WIDHT, HEIGHT);
    N_NUMBERS = 30;
    NUMBERS = [];
    polySynth = new p5.PolySynth();
    for (var n=0;n<N_NUMBERS;n++){
        NUMBERS.push(Math.random()*N_NUMBERS)
    }
    console.log(NUMBERS)

    quickSort(NUMBERS,0,N_NUMBERS-1)
    console.log(NUMBERS)
    
    frame = 0;
} 

function draw() {
    background(255);
    //noStroke();
    if (frame<FRAMES.length){
        console.log(frame);
        for (var d=0;d<N_NUMBERS;d++){
            fill(int(FRAMES[frame][d]*255/N_NUMBERS));
            rect(WIDHT/10, HEIGHT-(d+1)*HEIGHT/N_NUMBERS, 15*FRAMES[frame][d]*WIDHT/(2*255), HEIGHT/N_NUMBERS);
        }
        if (PLAY_SOUND[frame]!=-1){
            mySound[0].play(0,1,1,0.1,0.5);
        }
        frame++;
    }
    else {
        for (var d=0;d<N_NUMBERS;d++){
            fill(int(NUMBERS[d]*255/N_NUMBERS));
            rect(WIDHT/10, HEIGHT-(d+1)*HEIGHT/N_NUMBERS, 15*NUMBERS[d]*WIDHT/(2*255), HEIGHT/N_NUMBERS);
        }
    }
}
