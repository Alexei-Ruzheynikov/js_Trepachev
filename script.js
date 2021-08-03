// Теория
// Методы: модуль числа, округление до ближайшего целого числа, округление до целого числа в большую сторону,округление до целого числа в меньшую сторону, получение минимального числа из группы чисел, переданных параметрами.(не дописал все)

// Метод Math.abs возвращает модуль числа - из отрицательного делает положительное
// console.log(Math.abs(-3));
// console.log(Math.abs(3));

//Метод Math.round выполняет окргуление до ближайшего целого числа по правилам математического округления
// console.log(Math.round(6.4));
// console.log(Math.round(6.6));
// console.log(Math.round(6.5));
// console.log(Math.round(6.49999));

// Метод Math.ceil производит округление дробного числа до целого в большую сторону
// console.log(Math.ceil(3.0001));

// Метод Math.floor производит округление числа до целого в меньшую сторону
//console.log(Math.floor(2.9999));

// Метод Math.min возвращает минимальное число из группы чисел, переданных параметрами.
// Вывод мин числа из массива Math.min.apply(null, arr)

// console.log(Math.min(40, 20, 42, 100, 67));
// console.log(Math.min(-1, -100, -30, -25, 40));
// // Выведет infinity(Плюс бесконечность), т.к. методу не передали параметров
// console.log(Math.min());

// let arr = [40, 20, 42, 100, 67];
// let min = Math.min.apply(null, arr);
// console.log(min);

// Метод Math.max  возвращает максимальное число из группы чисел
//Вывод макс числа из массива Math.max.apply(null, arr)
// console.log(Math.max(1, 5, 10, 34, 100));
// console.log(Math.max(-1, 0, -20, -56, -100));
// console.log(Math.max());
// // Выведет -infinity(Минус бесконечность), т.к. методу не передали параметров

// let arr = [1, 5, 10, 34, 100];
// let max = Math.max.apply(null, arr);
// console.log(max);

//Метод Math.sqrt - возвращает квадратный корень числа
// console.log(Math.sqrt(4));
// console.log(Math.sqrt(15));
//корень из -100 результат NaN, т.к. передано отрицателньое число
// console.log(Math.sqrt(-100));

// Метод Math.pow возводит число в заданную степень. Где 1 - число, а 2 - степень

// console.log(Math.pow(3, 4));
// // считает даже степень в минусе
// console.log(Math.pow(2, -5));

// Метод Math.random возвращает случайное дробное число от 0 до 1

// console.log(Math.random());

//Получение случайного числа между min и max
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(getRandomInt(10, 100));

//Получение случайного дробного числа между min и max
// function getRandomArbitary(min, max) {
//   return Math.random() * (max - min) + min;
// }
// console.log(getRandomArbitary(10, 100));

// Метод toFixed производит окргугление числа до указанного знака в дробной части.
// Количество знаков указывается параметром.
// Если число знаков не указано, то по умолчанию берется 0 знаков, то есть округление до целого числа.
// число.toFixed([количество знаков в дробной части]);

// let num = 1.1111;
// console.log(num.toFixed(3));

// let num = 1.1119;
// console.log(num.toFixed(3));

// let num = 1.111;
// console.log(num.toFixed());

// let num = 1.1111;
// console.log(num.toFixed(6));

// Задача 1
// выведет остаток от деления
// var a = 10,
//   b = 3;
// alert(a % b);

//Задача 2
// var a = 10,
//   b = 4;
// if (a % b == 0) {
//   alert("Делится без остатка");
// } else alert("Делится с остатком");

// Задача 3
// alert(Math.pow(2, 10));

// Задача 4
// console.log(Math.sqrt(245));

// Задача 5
// var arr = [4, 2, 5, 19, 13, 0, 10];
// var j = 0;
// for (var i = 0; i < arr.length; i++) {
//   j += Math.pow(arr[i], 3);
// }
// console.log(Math.sqrt(j));

// Задача 6
// var a = 379;
// console.log((b = Math.sqrt(a)));
// console.log(b.toFixed());
// console.log(b.toFixed(1));
// console.log(b.toFixed(2));

// Задача 7
// var obj = {};
// Math.sqrt(587);
// console.log((obj["floor"] = Math.floor(Math.sqrt(587))));
// console.log((obj["ceil"] = Math.ceil(Math.sqrt(587))));

// Задача 8
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
//Задача 9
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInt(1, 100));

// Задача 10
// var arr = [];
// for (i = 0; i < 10; i++) {
//   arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// }
// alert(arr);

// Задача 11
// var a = 5,
//   b = 10;
// console.log(Math.abs(a - b));

// Задача 12
// var a = 6,
//   b = 1,
//   c;
// console.log((c = Math.abs(a - b)));

// Задача 13
// var arr = [12, 15, 20, 25, 59, 79];
// var mean = 0;
// for (i = 0; i < arr.length; i++) {
//   mean += arr[i];
// }
// console.log(mean / arr.length);

//Задача 14
// var n = 4;
// for (i = 1, res = 1; i < n; i++, res *= i);
// document.write(i + " " + res);
