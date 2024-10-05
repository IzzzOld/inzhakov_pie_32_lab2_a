let a = prompt("Введите трёхзначное число: ");
a = parseFloat(a);
let division = Math.floor(a / 100); // Округление числа вниз до ближайшего целого
alert("Первая цифра: " + a + " = " + division);          