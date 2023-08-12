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

ctx.beginPath();
ctx.setLineDash([10, 2]);
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