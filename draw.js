const canvas = document.getElementById('coolCanvas');
const ctx = canvas.getContext('2d');

ctx.lineCap = 'round';

let mouseDown = false;
let x = 0;
let y = 0;
let size = 1;

const clamp = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b)); //clamp num to range a,b

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

function changeSize() {
    console.log(event.deltaY);
    size = clamp(size - Math.sign(event.deltaY), 1, 72);
    ctx.lineWidth = size;
    document.getElementById("sizeText").innerHTML = 'size: ' + size;
}

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', stopDraw);
canvas.addEventListener('mouseout', stopDraw);
canvas.addEventListener('mousemove', drawLine);
canvas.addEventListener('wheel', changeSize);