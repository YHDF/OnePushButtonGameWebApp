const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 100;
canvas.height = 100;
document.querySelector('.animation').appendChild(canvas);

let angle = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const radius = 30;

    ctx.arc(x, y, radius, angle, angle + Math.PI / 2);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#007bff';
    ctx.lineCap = 'round';

    ctx.stroke();
    angle += 0.05;

    requestAnimationFrame(draw);
}

draw();
