let s = prompt("Введите строку:");
let result = "";
for (let i = 0; i < s.length; i++) {
    result = result + s[i];
    if (i < s.length - 1) {
        result = result + ", ";
    }
}
result = result + ".";
alert(result);