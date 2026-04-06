function init() {
    drawConcentricCircles();
    drawSectors();
}

function drawConcentricCircles() {
    var canvas = document.getElementById('canvas1');
    var ctx = canvas.getContext('2d');
    var cx = 175, cy = 175;
    var colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'cyan', 'pink', 'lime', 'brown'];
    for (var r = 170; r > 0; r -= 10) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2, false);
        ctx.strokeStyle = colors[Math.floor(r / 10) % colors.length];
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

function drawSectors() {
    var canvas = document.getElementById('canvas2');
    var ctx = canvas.getContext('2d');
    var cx = 175, cy = 175, R = 150;
    var n = 24;
    var step = (Math.PI * 2) / n;
    for (var i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        var angle1 = i * step;
        var angle2 = (i + 1) * step;
        ctx.arc(cx, cy, R, angle1, angle2, false);
        ctx.closePath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}
