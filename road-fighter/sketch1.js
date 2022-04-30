function setup() {
    WIDHT = 530
    HEIGHT = 370
    SPACES = 10
    speed_y = 5
    createCanvas(WIDHT, HEIGHT);
    value=0;
    y = 222;
    score=0;
    NUM_CARS = 10
    car_coord = []
    for (var i=0;i<NUM_CARS;i++){
        car_coord.push(
            [
                (i+1)*WIDHT/4,
                (Math.floor(HEIGHT/SPACES)*Math.floor(Math.random()*SPACES))
            ]
        )
    }
} 

function draw() {
    background(128);
    textSize(50);
    text("🚗", 10, y);
    text(score, WIDHT-100, 50);
    for (var i=0;i<NUM_CARS;i++){
        text("🚙", car_coord[i][0], car_coord[i][1]);
        car_coord[i][0]=car_coord[i][0]-speed_y
        if(car_coord[i][0] > 0 & car_coord[i][0] < 20 & car_coord[i][1]==y){
            score = 0;
            speed_y = 5;
        }
        if(car_coord[i][0] < -40){
            score = score+1;
            speed_y = speed_y + 0.1;
            if (i!=0){
                car_coord[i][0] = car_coord[i-1][0]+WIDHT/4
                car_coord[i][1] = (Math.floor(HEIGHT/SPACES)*Math.floor(Math.random()*SPACES))
            } else {
                car_coord[i][0] = car_coord[NUM_CARS-1][0]+WIDHT/4
                car_coord[i][1] = (Math.floor(HEIGHT/SPACES)*Math.floor(Math.random()*SPACES))
            } 
        }
    }
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
      y = y+(Math.floor(HEIGHT/SPACES));
    } else if (keyCode === UP_ARROW) {
      y = y-(Math.floor(HEIGHT/SPACES));
    }
}