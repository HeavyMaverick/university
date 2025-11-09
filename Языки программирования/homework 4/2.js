let input = prompt("Введите элементы массива через запятую (например: 1,2,3,4,5):");
let array = input.split(',');
let newArray = [];
for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
}
alert("Исходный массив: " + array +
    "\nПеревернутый массив: " + newArray);