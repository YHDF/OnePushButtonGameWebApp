const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 100;
canvas.height = 100;
document.querySelector('.animation').appendChild(canvas);

let angle = 0;

function play() {
window.location.href = "/play";
}

function download() {
window.location.href = "/game/download";
}


function credit() {
window.location.href = "/credit";
}
