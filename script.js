// Теория Работа со строковыми функциями

// length - длина строки
// let str = "abcde";
// console.log(str.length);

// toUpperCase() - производит преобразование строки в верхний регистр
// let str = "Язык Javascript";
// console.log(str.toUpperCase());

// toLowerCase() - производит преобразование строки в нижний регистр
// let str = "Язык JAVASCRIPT";
// console.log(str.toLowerCase());

//  Метод  substr возвращает подстроку из строки(1 = с какого места отрезать, 2 - сколько)
// let str = "abcde";
// let sub = str.substr(0, 3);
// console.log(sub);

// let str = "abcde";
// let sub = str.substr(2);
// console.log(sub);

// let str = "abcde";
// let sub = str.substr(-3, 2);
// console.log(sub);

// let str = "abcde";
// let sub = str.substr(-3);
// console.log(sub);

// let str = "abcde";
// let sub = str.substr(-1);
// console.log(sub);

// substring возвращает подстроку из строки, где 1 символ откуда начать, 2 символ - докуда резать
// let str = "abcde";
// let sub = str.substring(1, 3);
// console.log(sub);

// let str = "abcde";
// let sub = str.substring(1);
// console.log(sub);

// substr 1 символ - откуда отрезать, 2 символ - докуда резать
// let str = "abcde";
// let sub = str.slice(1, 3);
// console.log(sub);

// let str = "abcde";
// let sub = str.slice(1);
// console.log(sub);

// let str = "abcde";
// let sub = str.slice(1, -2);
// console.log(sub);

// Метод indexOf возвращает позицию первого совпадения, где 1 -что ищем, 2 - откуда начать поиск
// let str = "Я учу учу Javascript";
// console.log(str.indexOf("учу"));

// let str = "Я учу учу Javascript";
// console.log(str.indexOf("учу", 5));

// вернет -1 т.к. чувствителен к регистру и при не совпадении выдает -1
// let str = "Я учу Javascript";
// console.log(str.indexOf("JavaScript"));

// вернет -1 т.к начиная с 8 символа "учу" больше нет и при не нахождении возвращает -1
// let str = "Я учу Javascript";
// console.log(str.indexOf("учу", 8));

// split разбивает строки в массив по указанному разделителю

// let str = "html-css-javascript";
// let arr = str.split("-");
// console.log(arr);

// Вторым параметром указывает необходимое количество элементов
// let str = "html-css-javascript";
// let arr = str.split("-", 2);
// console.log(arr);

// let str = "adcde";
// let arr = str.split("");
// console.log(arr);

// let str = "abcde";
// let arr = str.split("", 3);
// console.log(arr);

// let str = "12345";
// let arr = str.split("");
// console.log(arr);

// let str = "123456789";
// let arr1 = str.split("");
// let arr2 = arr1.reverse();
// let result = arr2.join("");
// console.log(result);

// let str = "123456789";
// let result = str.split("").reverse().join("");
// console.log(result);

// let str = "12345";
// let arr = str.split("");
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += Number(arr[i]);
// }
// console.log(sum);

// let num = 12345;
// let str = String(num);
// let arr = str.split("");
// console.log(arr);

// Метод join - объединяет элементы массива в стркоу с указанием разделителя
// let arr = [1, 2, 3];
// let str = arr.join("-");
// console.log(str);

// По умолчанию разделитель - запятая
// let arr = [1, 2, 3];
// let str = arr.join();
// console.log(str);

// разделителя нет
// let arr = [1, 2, 3];
// let str = arr.join("");
// console.log(str);

// let date = "2025-12-31";
// let result = date.split("-").reverse().join(".");
// console.log(result);

//Функция implode сливает массив в строку с указанным разделителем, но это для php

//Практика
//Задача 1
// g - изменит все, '@' - только 1 изменит
// var str = "aaa@bbb@ccc";
// alert(str.replace(/@/g, "!"));

//Задача 2
// var str = "aaa bbb ccc";
// //substr(откуда отрезать, сколько отрезать)
// alert(str.substr(4, 3));
// // substring(откуда отрезать, докуда отрезать)
// alert(str.substring(4, 7));
// //slice(откуда отрезать, дкуда отрезать)
// alert(str.slice(4, 7));

//Задача 3
// var date = "2025-12-31";
// var arr = date.split("-");
// arr.reverse();
// console.log(arr.join("/"));

// let arr2 = arr1.reverse();
// let arr = str.split("-");
// let result = arr2.join("");

//Задачи для решения
//Задача 1
// var a = "js";
// console.log(a.toUpperCase());

// Задача 2
// var a = "JS";
// console.log(a.toLowerCase());

// Задача 3
// var a = "я учу javascript",
//   b;
// b = a.length;
// console.log(b);

// Задача 4
// var a = "я учу javascript!",
//   b;
// b = a.substr(0, 1);
// console.log(b);
// b = a.substring(0, 2);
// console.log(b);
// b = a.slice(0, 2);
// console.log(b);

// Задача 5
// var a = "я учу javascript",
//   b;
// b = a.indexOf("учу");
// console.log(b);

// Задача 6
// var str = "text",
//   n = 3;
// if (str.length == n) {
//   console.log(str);
// }
// if (str.length > n) {
//   console.log(str.slice(0, n));
// }

// Задача 7
// var str = "Я-учу-javasript!";
// console.log(str.replace(/-/g, "!"));

// Задача 8
// var str = "я учу javascript";
// console.log(str.split(" "));

// Задача 9
// var str = "я учу javascript";
// console.log(str.split(""));

// Задача 10
// var date = "2025-12-31";
// console.log(date.split("-").reverse().join("."));

// Задача 11
// var arr = ["я", "учу", "javascript", "!"];
// console.log(arr.join("+"));

//Задача 12
// var str = "первую букву";
// console.log(str.substr(0, 1).toUpperCase() + str.substr(1));

// Задача 13
// var str = "я учу javascript!";
// var arr = str.split(" ");
// for (
//   i = 0;
//   i < arr.length;
//   arr[i] = arr[i].substr(0, 1).toUpperCase() + arr[i].substr(1), i++
// );
// console.log(arr);

// Задача 14
// var str = "var_test_text";
// var arr = str.split("_");
// for (
//   i = 1;
//   i < arr.length;
//   arr[i] = arr[i].substr(0, 1).toUpperCase() + arr[i].substr(1), i++
// );
// arr = arr.join("");
// console.log(arr);
