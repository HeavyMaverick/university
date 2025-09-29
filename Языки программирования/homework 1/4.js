// точка на ед. окр
let x = prompt("Введите координату X:");
let y = prompt("Введите координату Y:");

x = Number(x);
y = Number(y);

let distance = Math.sqrt(x * x + y * y);

if (distance <= 1) {
    alert("INSIDE");
} else {
    alert("OUTSIDE");
}