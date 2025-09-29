// Уложить плитку
let n = prompt("Введите длину площади:");
let m = prompt("Введите ширину площади:");
let a = prompt("Введите размер плитки:");

n = Number(n);
m = Number(m);
a = Number(a);

let tilesN = Math.ceil(n / a);
let tilesM = Math.ceil(m / a);

let totalTiles = tilesN * tilesM;
alert("Нужно плиток: " + totalTiles);