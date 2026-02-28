function drawHouse() {
    var canvas = document.getElementById('houseCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 400, 300);
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, 400, 300);
    ctx.fillStyle = '#90EE90';
    ctx.fillRect(0, 200, 400, 100);
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(150, 120, 150, 120);
    ctx.fillStyle = '#ADD8E6';
    ctx.fillRect(200, 160, 40, 40);
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.strokeRect(200, 160, 40, 40);
    ctx.beginPath();
    ctx.moveTo(220, 160);
    ctx.lineTo(220, 200);
    ctx.moveTo(200, 180);
    ctx.lineTo(240, 180);
    ctx.stroke();
    ctx.fillStyle = '#654321';
    ctx.fillRect(220, 180, 40, 60);
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(250, 210, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#B22222';
    ctx.beginPath();
    ctx.moveTo(130, 120);
    ctx.lineTo(320, 120);
    ctx.lineTo(225, 50);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#8B4513';
    for (var i = 50; i < 350; i += 35) {
        ctx.fillRect(i, 210, 10, 40);
    }
    ctx.fillStyle = '#A0522D';
    ctx.fillRect(40, 220, 320, 5);
    ctx.fillStyle = '#FFFF00';
    ctx.beginPath();
    ctx.arc(50, 50, 30, 0, Math.PI * 2);
    ctx.fill();
}

function drawRectangle() {
    var canvas = document.getElementById('rectCanvas');
    var ctx = canvas.getContext('2d');
    var x = parseInt(document.getElementById('rectX').value);
    var y = parseInt(document.getElementById('rectY').value);
    var width = parseInt(document.getElementById('rectWidth').value);
    var height = parseInt(document.getElementById('rectHeight').value);
    var color = document.getElementById('rectColor').value;
    ctx.clearRect(0, 0, 400, 300);
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, 400, 300);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.fillText('X: ' + x + ', Y: ' + y, 10, 20);
    ctx.fillText('Ширина: ' + width + ', Высота: ' + height, 10, 40);
}

function checkBounds() {
    var x = document.getElementById('rectX');
    var y = document.getElementById('rectY');
    var w = document.getElementById('rectWidth');
    var h = document.getElementById('rectHeight');
    if (parseInt(x.value) + parseInt(w.value) > 380) {
        w.value = 380 - parseInt(x.value);
    }
    if (parseInt(y.value) + parseInt(h.value) > 280) {
        h.value = 280 - parseInt(y.value);
    }
}

window.onload = function() {
    drawHouse();
    drawRectangle();
    document.getElementById('rectX').onchange = function() {
        checkBounds();
        drawRectangle();
    };
    document.getElementById('rectY').onchange = function() {
        checkBounds();
        drawRectangle();
    };
    document.getElementById('rectWidth').onchange = function() {
        checkBounds();
        drawRectangle();
    };
    document.getElementById('rectHeight').onchange = function() {
        checkBounds();
        drawRectangle();
    };
    document.getElementById('rectColor').onchange = drawRectangle;
};