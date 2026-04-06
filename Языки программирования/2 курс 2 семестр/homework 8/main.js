var canvas, ctx;
var pos = 75;
var leftColor = '#00ffff';
var rightColor = '#ffff00';

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    draw();
    document.getElementById('position').onchange = function() {
        pos = parseInt(this.value);
        draw();
    };
    document.getElementById('leftColor').onchange = function() {
        leftColor = this.value;
        draw();
    };
    document.getElementById('rightColor').onchange = function() {
        rightColor = this.value;
        draw();
    };
    document.addEventListener('keydown', function(event) {
        if (event.keyCode == 37) {
            pos = pos - 5;
            if (pos < 0) pos = 0;
            document.getElementById('position').value = pos;
            draw();
        }
        if (event.keyCode == 39) {
            pos = pos + 5;
            if (pos > 640) pos = 640;
            document.getElementById('position').value = pos;
            draw();
        }
    });
}

function draw() {
    ctx.clearRect(0, 0, 640, 200);
    ctx.fillStyle = leftColor;
    ctx.fillRect(0, 0, pos, 200);
    ctx.fillStyle = rightColor;
    ctx.fillRect(pos, 0, 640 - pos, 200);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, 640, 200);
    ctx.beginPath();
    ctx.moveTo(pos, 0);
    ctx.lineTo(pos, 200);
    ctx.lineWidth = 3;
    ctx.stroke();
}
