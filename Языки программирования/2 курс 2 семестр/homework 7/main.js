var canvas2, ctx2;
var squareColor = 'red';
var canvas3, ctx3;
var isDown = false;

function init() {
    initTask2();
    initTask3();
}

function initTask2() {
    canvas2 = document.getElementById('canvas2');
    ctx2 = canvas2.getContext('2d');
    ctx2.strokeRect(0, 0, 400, 400);
    document.addEventListener('keydown', function(event) {
        if (event.keyCode == 49) {
            squareColor = 'red';
            document.getElementById('task2Color').innerHTML = 'Текущий цвет: красный';
        }
        if (event.keyCode == 50) {
            squareColor = 'blue';
            document.getElementById('task2Color').innerHTML = 'Текущий цвет: синий';
        }
        if (event.keyCode == 51) {
            squareColor = 'green';
            document.getElementById('task2Color').innerHTML = 'Текущий цвет: зеленый';
        }
    });
    canvas2.addEventListener('mousedown', function(event) {
        var x = event.offsetX;
        var y = event.offsetY;
        ctx2.fillStyle = squareColor;
        ctx2.fillRect(x - 10, y - 10, 20, 20);
    });
}

function initTask3() {
    canvas3 = document.getElementById('canvas3');
    ctx3 = canvas3.getContext('2d');
    ctx3.strokeRect(0, 0, 400, 400);
    canvas3.addEventListener('mousedown', function(event) {
        isDown = true;
    });
    canvas3.addEventListener('mouseup', function(event) {
        isDown = false;
    });
    canvas3.addEventListener('mousemove', function(event) {
        var x = event.offsetX;
        var y = event.offsetY;
        if (isDown) {
            ctx3.fillStyle = 'red';
        } else {
            ctx3.fillStyle = 'blue';
        }
        ctx3.fillRect(x, y, 5, 5);
    });
}
