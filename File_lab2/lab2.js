let a = prompt("Введите неотрицательное число: ");
let b = prompt("Введите неотрицательное число: ");
a = parseFloat(a); // Преобразование строки в число
b = parseFloat(b);
let geometry = Math.sqrt(a * b); // Вычисление квадратного корня из произведения
alert("Квадратный корень из произведения: " + "√" + a + " * " + "√" + b + " = " + geometry);