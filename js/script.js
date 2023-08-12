const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 900;
canvas.style.backgroundColor = '#90ee90';
let cellSize = 60;

canvas.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    return false;
}, false);

function drawGrid() {
    ctx.beginPath();
    ctx.setLineDash([10, 2]);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#0005';
    for (let i = cellSize; i < canvas.height; i += cellSize) {
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
    }
    for (let i = cellSize; i < canvas.width; i += cellSize) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
    }
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
}


let x = 0, y = 0;
let dx = 2, dy = 2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize / 3, 0, Math.PI * 2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();

    x += dx;

    if (x + dx > canvas.width - cellSize || x + dx < 0) {
        dx *= -1;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawBall();
}

setInterval(draw, 15);