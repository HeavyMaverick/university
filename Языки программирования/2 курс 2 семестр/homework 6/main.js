var x = 50, y = 50;
var startX = 50, startY = 50;
var canvas;
var ctx;
var squareSize = 20;
var squareColor = 'blue';
var drawMode = false;
var cleanBg;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0, 0, 640, 480);
    cleanBg = ctx.getImageData(0, 0, 640, 480);
    ctx.fillStyle = squareColor;
    ctx.fillRect(x, y, squareSize, squareSize);
    document.addEventListener('keydown', move);
    document.addEventListener('keyup', function(event) {
        if (event.keyCode == 32) {
            drawMode = !drawMode;
            if (drawMode) {
                document.getElementById('mode').innerHTML = 'Режим: рисование';
            } else {
                document.getElementById('mode').innerHTML = 'Режим: перемещение';
            }
        }
    });
    document.getElementById('x').value = 'x=' + x;
    document.getElementById('y').value = 'y=' + y;
    document.getElementById('size').value = 'размер=' + squareSize;
    document.getElementById('color').value = 'цвет=' + squareColor;
}

function move(event) {
    if (event.keyCode == 27) {
        ctx.putImageData(cleanBg, 0, 0);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, 640, 480);
        x = startX;
        y = startY;
        document.getElementById('x').value = 'x=' + x;
        document.getElementById('y').value = 'y=' + y;
        ctx.fillStyle = squareColor;
        ctx.fillRect(x, y, squareSize, squareSize);
        return;
    }

    if (!drawMode) {
        ctx.clearRect(x, y, squareSize, squareSize);
    }

    if (event.keyCode == 38) { y -= 5; }
    if (event.keyCode == 40) { y += 5; }
    if (event.keyCode == 39) { x += 5; }
    if (event.keyCode == 37) { x -= 5; }

    if (event.keyCode == 49) { squareColor = 'red'; }
    if (event.keyCode == 50) { squareColor = 'blue'; }
    if (event.keyCode == 51) { squareColor = 'green'; }

    if (event.keyCode == 66) { squareSize = 30; }
    if (event.keyCode == 77) { squareSize = 20; }
    if (event.keyCode == 83) { squareSize = 10; }

    document.getElementById('x').value = 'x=' + x;
    document.getElementById('y').value = 'y=' + y;
    document.getElementById('size').value = 'размер=' + squareSize;
    document.getElementById('color').value = 'цвет=' + squareColor;

    ctx.fillStyle = squareColor;
    ctx.fillRect(x, y, squareSize, squareSize);
}
