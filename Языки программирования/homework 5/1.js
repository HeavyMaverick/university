//Исходный массив
let products = [
    {id: 1, title: 'велосипед', price: 45000, count: 3, marks: [5, 5, 5]},
    {id: 2, title: 'ролики', price: 850, count: 15, marks: [4, 5, 4, 3]},
    {id: 3, title: 'самокат', price: 5000, count: 8, marks: [5, 4, 5, 5, 4]},
    {id: 4, title: 'лыжи', price: 12000, count: 25, marks: [4, 4, 3, 5]},
    {id: 5, title: 'коньки', price: 750, count: 5, marks: [3, 4, 4]}
];

//Отфильтруйте товары по условию, если их количество будет больше 10.
let task1 = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].count > 10) {
        task1.push(products[i]);
    }
}
console.log('Товары > 10:', task1);

//Найдите значение элемента массива (товара), чья цена находится в диапазоне от 800 до 900 включительно.
let task2 = null;
for (let i = 0; i < products.length; i++) {
    if (products[i].price >= 800 && products[i].price <= 900) {
        task2 = products[i];
        break;
    }
}
console.log('Цена 800-900:', task2);

//Отсортируйте данные товаров по цене (по убыванию)
let task3 = [...products]; // копия массива
task3.sort((a, b) => b.price - a.price);
console.log('По цене (убывание):', task3);

//Посчитайте итоговую стоимость всех товаров в массиве.
let task4 = 0;
for (let i = 0; i < products.length; i++) {
    task4 += products[i].price * products[i].count;
}
console.log('Общая стоимость:', task4);

//Преобразуйте массив таким образом, чтобы изменить сво-во marks и получить итоговую сумму оценок.
let task5 = [];
for (let i = 0; i < products.length; i++) {
    let sum = 0;
    for (let j = 0; j < products[i].marks.length; j++) {
        sum += products[i].marks[j];
    }
    task5.push({
        id: products[i].id,
        title: products[i].title,
        price: products[i].price,
        count: products[i].count,
        marks_total: sum
    });
}

//Итоговый результат отсортируйте по marks_total
task5.sort((a, b) => b.marks_total - a.marks_total);
console.log('С суммарными оценками:', task5);