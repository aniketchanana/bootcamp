const canvas = document.getElementById("bubble__canvas");
const context = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let circles = [];
const NUM_CIRCLES = 500;

for(let i=0;i<NUM_CIRCLES;i++) {
    let circleData = {};
    let x = Math.random() * 1000
    let y = Math.random() * 600
    circleData.x = x;
    circleData.y = y;
    circleData.radius = Math.random() * 40;

    circleData.redColor = Math.random() * 255;
    circleData.greenColor = Math.random() * 255;
    circleData.yellowColor = Math.random() * 255;

    //direction for collision detection
    circleData.xd = 1;
    circleData.yd = 1;

    //speed of the bubble particle
    circleData.xv = Math.random()*4;
    circleData.yv = Math.random()*4;

    circles.push(circleData);
}

function startAnimation() {
     context.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<circles.length;i++) {
        context.beginPath();
        context.arc(circles[i].x, circles[i].y, circles[i].radius , 0,  2* Math.PI);
        context.fillStyle = `rgba(${circles[i].redColor},${circles[i].greenColor},${circles[i].yellowColor},0.75)`;
        context.fill();
    }
   
    moveCircles();
    window.requestAnimationFrame(startAnimation);
}

function moveCircles() {
    for(let i=0;i<circles.length;i++) {
        if(circles[i].x + circles[i].xv >= canvas.width) {
            circles[i].xd = 0;
        }
        if(circles[i].x - circles[i].xv <= 0) {
            circles[i].xd = 1;
        }
        if(circles[i].y + circles[i].yv >= canvas.height) {
            circles[i].yd = 0;
        }
        if(circles[i].y - circles[i].yv <= 0) {
            circles[i].yd = 1;
        }

        if(circles[i].xd === 1){
            circles[i].x += circles[i].xv;
        } else {
            circles[i].x -= circles[i].xv;
        }

        if(circles[i].yd === 1){
            circles[i].y += circles[i].yv;
        } else {
            circles[i].y -= circles[i].yv;
        }        
    }
}

startAnimation();