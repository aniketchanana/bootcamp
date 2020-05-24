const canvas = document.getElementById('snake__board');
const context = canvas.getContext('2d');

const boardSize = 700;
let score = 0;
document.getElementById('display__score').textContent = score;
context.fillStyle = '#83bb43';
context.fillRect(0,0,boardSize,boardSize);

const snakeBlockSize = 20;
let snakeBody = [
    {
        x:0,
        y:0
    }
];

let food = {
    x:0,
    y:0
};

let flag = 1;
window.addEventListener('keydown', function(e) {
    switch(e.keyCode) {
        case 39:
            if(flag === 2)
                return ;
            flag = 1;
            break;
        case 37:
            if(flag === 1)
                return ;
            flag = 2;
            break;
        case 38:
            if(flag === 4)
                return ;
            flag = 3;
            break;
        case 40:
            if(flag === 3)
                return;
            flag = 4;
    }
})

function generateFood() {
    let xf = Math.floor(Math.random() * boardSize)
    let yf = Math.floor(Math.random() * boardSize)
    food.x = xf - (xf % 20);
    food.y = yf - (yf % 20);

    console.log(snakeBody)
}
function placeSankeOnBoard() {
    context.fillStyle = '#292f31';
    context.fillRect(food.x,food.y,snakeBlockSize,snakeBlockSize);
    for(let i=0;i<snakeBody.length;i++) {
        if (i === 0) {
            context.fillStyle = '#097ddb';
        } else {
            context.fillStyle = '#000';
        }
        context.fillRect(snakeBody[i].x, snakeBody[i].y, snakeBlockSize, snakeBlockSize);
    }
}

function clearBoard() {
    context.fillStyle = '#83bb43';
    context.fillRect(0,0,boardSize,boardSize);
}

function move() {
    let snakeHeadx = snakeBody[0].x;
    let snakeHeady = snakeBody[0].y;

    if(flag == 1) {
        snakeBody[0].x += snakeBlockSize;
        snakeBody[0].x = snakeBody[0].x % boardSize;
    } else if(flag == 2) {
        snakeBody[0].x -= snakeBlockSize;
        if(snakeBody[0].x < 0) {
            snakeBody[0].x += boardSize;
        }
    } else if(flag === 3) {
        snakeBody[0].y -= snakeBlockSize;
        if(snakeBody[0].y < 0) {
            snakeBody[0].y += boardSize;
        }
    } else if (flag === 4) {
        snakeBody[0].y += snakeBlockSize;
        snakeBody[0].y = snakeBody[0].y % boardSize;
    }
    let tempx;
    let tempy;

    let prevElex = snakeHeadx;
    let prevEley = snakeHeady;
    for(let i=1;i<snakeBody.length;i++) {
        tempx = snakeBody[i].x;
        tempy = snakeBody[i].y;

        snakeBody[i].x = prevElex;
        snakeBody[i].y = prevEley;

        prevElex = tempx;
        prevEley = tempy
    }

    for(i = 1;i<snakeBody.length;i++) {
        if(snakeBody[0].x === snakeBody[i].x && snakeBody[0].y === snakeBody[i].y) {
            alert('game over');
            clearInterval(gameinterval);
        }
    }
    if(snakeBody[0].x === food.x && snakeBody[0].y === food.y) {
        score++;
        document.getElementById('display__score').textContent = score;
        //increase snake body
        snakeBody.push({
            x:snakeHeadx,
            y:snakeHeady
        })
        generateFood();
    }
}

//initial food generation
generateFood();

let gameinterval = setInterval(function(){
    clearBoard();
    move();
    placeSankeOnBoard();
},100);