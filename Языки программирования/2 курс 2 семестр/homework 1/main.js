window.onload = function() {
    const images = [
        { file: 'img1.jpg', name: 'Котик' },
        { file: 'img2.jpg', name: 'Собачка' },
        { file: 'img3.jpg', name: 'Попугай' },
        { file: 'img4.jpg', name: 'Хомячок' },
        { file: 'img5.jpg', name: 'Рыбка' }
    ];
    const imageElement = document.getElementById('myImage');
    const nameElement = document.getElementById('imageName');
    let currentIndex = 0;
    function changeImage() {
        currentIndex = currentIndex + 1;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        imageElement.src = images[currentIndex].file;
        nameElement.textContent = images[currentIndex].name;
    }
    imageElement.onclick = changeImage;
};