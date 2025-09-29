let number = prompt("Введите число:");
number = Number(number);
let binary = number.toString(2);
alert("В двоичной системе: " + binary);

// ну либо если надо сложно
// let binary = "";
// if (number === 0) {
//     binary = "0";
// } else {
//     let temp = number;
//     while (temp > 0) {
//         let ost = temp % 2;
//         binary = ost + binary;
//         temp = Math.floor(temp / 2);
//     }
// }
// alert("Двоичное: " + binary);