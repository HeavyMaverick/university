// Нод
let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");

num1 = Number(num1);
num2 = Number(num2);

let a = num1;
let b = num2;

while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}

alert("Наибольший общий делитель: " + a);