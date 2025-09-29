// Високосный год
let year = prompt("Введите год:");

year = Number(year);
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            alert(year + " - високосный год");
        } else {
            alert(year + " - не високосный год");
        }
    } else {
        alert(year + " - високосный год");
    }
} else {
    alert(year + " - не високосный год");
}