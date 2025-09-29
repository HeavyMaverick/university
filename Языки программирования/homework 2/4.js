// Нок
let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");
num1 = Number(num1);
num2 = Number(num2);
let a = num1;
let b = num2;

let original1 = num1;
let original2 = num2;

// Находим НОД
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}

let nod = a;  // Это НОД

//НОК: (число1 * число2) / НОД
let nok = (original1 * original2) / nod;

alert("Наименьшее общее кратное: " + nok);