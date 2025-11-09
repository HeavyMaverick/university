let input = prompt("Введите элементы массива через запятую");
let array = input.split(',');
let sum = 0;
for (let i = 0; i < array.length; i++) {
    let number = Number(array[i]);
    if (!isNaN(number)) {
        sum = sum + number;
    }
}
alert("Сумма: " + sum);