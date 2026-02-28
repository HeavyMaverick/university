var images = [
    { file: 'img1.jpg', name: 'Котик' },
    { file: 'img2.jpg', name: 'Собачка' },
    { file: 'img3.jpg', name: 'Попугай' },
    { file: 'img4.jpg', name: 'Хомячок' },
    { file: 'img5.jpg', name: 'Рыбка' }
];
var currentIndex = 0;
var currentMode = 'manual';
var timer = null;
function changeImage() {
    currentIndex = currentIndex + 1;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById("myImage").src = images[currentIndex].file;
    document.getElementById("imageName").innerHTML = images[currentIndex].name;
}
function manualMode() {
    if (currentMode == 'manual') {
        changeImage();
    }
}
function setManualMode() {
    currentMode = 'manual';
    document.getElementById("currentMode").innerHTML = 'Режим: ручной';
    if (timer != null) {
        clearInterval(timer);
        timer = null;
    }
}
function setAutoMode() {
    currentMode = 'auto';
    document.getElementById("currentMode").innerHTML = 'Режим: автоматический';
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval('changeImage()', 1000);
}
window.onload = function() {
    document.getElementById("manualBtn").onclick = setManualMode;
    document.getElementById("autoBtn").onclick = setAutoMode;
    document.getElementById("myImage").onclick = manualMode;
    setManualMode();
};