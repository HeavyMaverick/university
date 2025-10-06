let n = prompt("Введите число N:");
n = Number(n);
for (let i = 1; i <= n; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}