const canvas = document.getElementById('coolCanvas');
const ctx = canvas.getContext('2d');

let mouseDown = false;
let x = 0;
let y = 0;
let size = 1;

const colorPicker = document.getElementById("colorPicker");

//line functions

ctx.lineCap = 'round';

function startDraw() {
    mouseDown = true;
    x = event.offsetX;
    y = event.offsetY;
}

function stopDraw() {
    mouseDown = false;
}

function drawLine() {
    if (mouseDown) {
        const newX = event.offsetX;
        const newY = event.offsetY;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(newX, newY);
        ctx.stroke();
        x = newX;
        y = newY;
    }
}

function changeSize() {
    size = Math.max(size - Math.sign(event.deltaY), 1);
    ctx.lineWidth = size;
    document.getElementById("sizeText").innerHTML = 'size: ' + size;
}

//color functions

function setColor() {
    const color = colorPicker.value;
    ctx.strokeStyle = color;
}

colorPicker.addEventListener("input", setColor);

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', stopDraw);
canvas.addEventListener('mouseout', stopDraw);
canvas.addEventListener('mousemove', drawLine);
canvas.addEventListener('wheel', changeSize);