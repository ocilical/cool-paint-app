const canvas = document.getElementById('coolCanvas');
const ctx = canvas.getContext('2d');

let mouseDown = false;
let x = 0;
let y = 0;
let size = 1;

const r = document.getElementById("pickRed");
const g = document.getElementById("pickGreen");
const b = document.getElementById("pickBlue");
const rDisp = document.getElementById("displayRed");
const gDisp = document.getElementById("displayGreen");
const bDisp = document.getElementById("displayBlue");

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
    size = Math.max(size - Math.sign(event.deltaY), 1);
    ctx.lineWidth = size;
    document.getElementById("sizeText").innerHTML = 'size: ' + size;
}

//color functions

function setColor() {
    const color = `rgb(${r.value},${g.value},${b.value})`
    ctx.strokeStyle = color;
    document.getElementById("colorDisp").style.backgroundColor = color;
}

r.addEventListener("input", ()=>{
    setColor()
    rDisp.innerHTML = r.value;
})

g.addEventListener("input", ()=>{
    setColor()
    gDisp.innerHTML = g.value;
})

b.addEventListener("input", ()=>{
    setColor()
    bDisp.innerHTML = b.value;
})

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', stopDraw);
canvas.addEventListener('mouseout', stopDraw);
canvas.addEventListener('mousemove', drawLine);
canvas.addEventListener('wheel', changeSize);