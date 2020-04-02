const canvas = document.getElementById('coolCanvas');
const ctx = canvas.getContext('2d');

let mouseDown = false;
let x = 0;
let y = 0;

function startDraw() {
    mouseDown = true;
    x = event.offsetX;
    y = event.offsetY;
}

function stopDraw() {
    mouseDown = false;
}

function drawLine() {
    if(mouseDown) {
        const newX = event.offsetX;
        const newY = event.offsetY;
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(newX,newY);
        ctx.stroke();
        x = newX;
        y = newY;
    }
}

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', stopDraw);
canvas.addEventListener('mouseout', stopDraw);
canvas.addEventListener('mousemove', drawLine);