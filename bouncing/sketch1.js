function setup() {
    WIDHT = 800;
    HEIGHT = 600;
    SIZE = 5;
    createCanvas(WIDHT, HEIGHT);
    N_BALLS = 200
    y=[];
    x=[];
    speed_y=[];
    speed_x=[];
    gravity=[];
    r=[];
    g=[];
    b=[];
    for (var i=0;i<N_BALLS;i++){
        y.push(Math.random()*HEIGHT)
        x.push(Math.random()*WIDHT)
        speed_y.push(0)
        speed_x.push(-5+Math.random()*10)
        gravity.push(0.05+Math.random()*0.2)
        r.push(Math.floor(Math.random()*255))
        g.push(Math.floor(Math.random()*255))
        b.push(Math.floor(Math.random()*255))
    }
} 

function draw() {
    // background(255);
    for (var i=0;i<N_BALLS;i++){
        fill(r[i],g[i],b[i]);
        stroke(r[i],g[i],b[i]);
        circle(x[i],y[i],SIZE);
        y[i]=y[i]+speed_y[i]
        x[i]=x[i]+speed_x[i]
        speed_y[i]=speed_y[i]+gravity[i]
        if (y[i]>HEIGHT){
            speed_y[i]=-10
        }
        if (x[i]>WIDHT){
            speed_x[i]=-speed_x[i]
        }
        if (x[i]<0){
            speed_x[i]=-speed_x[i]
        }
    }
}