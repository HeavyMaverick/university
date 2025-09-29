// СЧАСТЛИВЫЙ БИЛЕТ
let number = prompt("Введите шестизначный номер билета:");

if (number.length !== 6 || isNaN(number)) {
    console.log("Ошибка! Введите ровно 6 цифр.");
} else {
    let digit1 = parseInt(number[0]);
    let digit2 = parseInt(number[1]);
    let digit3 = parseInt(number[2]);
    let digit4 = parseInt(number[3]);
    let digit5 = parseInt(number[4]);
    let digit6 = parseInt(number[5]);

    let sumFirst = digit1 + digit2 + digit3;
    let sumLast = digit4 + digit5 + digit6;

    if (sumFirst === sumLast) {
        alert("Счастливый билет!");
    } else {
        alert("Обычный билет.");
    }
}

