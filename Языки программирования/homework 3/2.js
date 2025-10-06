let n = prompt("Введите число N:");
n = Number(n);
let del = 0;
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        del = del + 1;
    }
}
alert("Количество делителей: " + del);