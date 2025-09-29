// Угадайка
let min = 1;
let max = 1000000;
let attempts = 0;
let guess;

while (attempts < 20) {
    attempts = attempts + 1;
    guess = Math.floor((min + max) / 2);

    let answer = prompt("Попытка " + attempts + ": Это число " + guess + "?\n" +
        "Напишите '=' если угадал, '>' если ваше число больше, '<' если меньше");

    if (answer === "=") {
        alert("Я угадал число " + guess + " за " + attempts + " попыток!");
        break;
    } else if (answer === ">") {
        min = guess + 1;
    } else if (answer === "<") {
        max = guess - 1;
    } else {
        alert("Используйте только '=', '>' или '<'");
        attempts = attempts - 1;
    }

    if (min > max) {
        alert("Ошибка границ");
        break;
    }
}
if (attempts === 20) {
    alert("Я не смог угадать за 20 попыток");
}