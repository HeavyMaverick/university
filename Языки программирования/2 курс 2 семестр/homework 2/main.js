function showDescription(category) {
    var descField = document.getElementById("description");
    switch (category) {
        case "A": 
            descField.innerHTML = "Мотоциклы";
            break;
        case "B": 
            descField.innerHTML = "Легковые автомобили";
            break;
        case "C": 
            descField.innerHTML = "Грузовые автомобили";
            break;
        case "D": 
            descField.innerHTML = "Автобусы";
            break;
        case "E": 
            descField.innerHTML = "Автомобили с прицепом";
            break;
    }
}

function showDivisors(spinner) {
    var text = "";
    var n = parseInt(spinner.value);
    for (var i = 2; i <= n; i++) {
        if (n % i == 0) {
            text += i + " ";
        }
    }
    document.getElementById("divisors").innerHTML = text;
}