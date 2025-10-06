let n = prompt("Введите число N:");
n = Number(n);
if (n < 2) {
    alert("Не простое число");
} else {
    let isSimple = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isSimple = false;
            break;
        }
    }
    if (isSimple) {
        alert("Простое число");
    } else {
        alert("Не простое число");
    }
}