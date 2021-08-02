// Теория

// if(логическое выражение) {
//     Этот код выполнится,
//     если логическое выражение верно (то есть равно true)
// } else {
//     Этот код выполнится,
//     если логическое выражение неверно ( то есть равно false)
// }

// var a = 3;
// if (a > 0) {
//   alert("Верно!");
// } else {
//   alert("Неверно!");
// }

// var a = -3;
// if (a > 0) {
//   alert("Верно!");
// } else {
//   alert("Неверно!");
// }

// if (a == 0) {
//   alert("Верно!");
// } else {
//   alert("Неверно!");
// }

// Один знак = - это присваивание,а два знака == это сравнение равно ли
// var a = 0;
// if (a == 0) alert("Верно!");
// else alert("Неверно");

// здесь в случае если удалось присвоить единицу к переменной а, то значит true, иначе false
// var a = 0;
// if ((a = 1)) alert("Верно!");
// else alert("Неверно");

// Выведет верно т.к. два равно == сравнивает только по значению
// var a = "0";
// if (a == 0) alert("Верно");
// else alert("Неверно");

// Выведет неверно т.к. три равно === сравнивает по значению и по типу
// var a = "0";
// if (a === 0) alert("Верно");
// else alert("Неверно");

// Не равно != - игнорирует различие в типах, Не равно !== не игнорирует разиличие в типах
// var a = 0;
// if (a != 0) alert("Верно");
// else alert("Неверно");

// a = 1;
// if (a != 0) alert("Верно");
// else alert("Неверно");

// var a = "0";
// if (a != 0) alert("Верно");
// else alert("Неверно");

// Будет верно т.к. разные типы
// var a = "0";
// if (a !== 0) alert("Верно");
// else alert("Неверно");

// Логическое и &&
// var a = 3;
// var b = -3;
// if (a > 0 && b < 0) alert("Верно");
// else alert("Неверно");

// var a = 3;
// if (a >= 1 && a <= 12) alert("Верно");
// else alert("Неверно");

// Логическое или ||
// var a = -3;
// var b = -3;
// if (a > 0 || b < 0) alert("Верно");
// else alert("Неверно");

// var a = true;
// if (a) alert("Верно");
// else alert("Неверно");

// var a = true;
// if (!a) alert("Верно");
// else alert("Неверно");

//Данное выражение всегда выводит верно
// if (true) alert("Верно");
// else alert("Неверно");

//Данное выражение всегда будет выводить Неверно
// if (false) alert("Верно");
// else alert("Неверно");

// Данное выражение всегда будет выводить неверно
// if (!true) alert("Верно");
// else alert("Неверно");

// Данное выражение всегда будет выводить верно
// if (!false) alert("Верно");
// else alert("Неверно");

// var a = -1;
// if (a === undefined) {
//   alert("Введите a");
// } else {
//   if (a > 0) {
//     alert("Больше нуля");
//   } else {
//     alert("Меньше нуля");
//   }
// }

// var a = -1;
// if (a === undefined) {
//   alert("Введите а");
// } else if (a > 0) {
//   alert("Больше нуля");
// } else {
//   alert("Меньше нуля");
// }
var lang = "ru";

// if (lang == "ru") {
//   alert("Русский текст");
// } else if (lang == "en") {
//   alert("Английский текст");
// } else if (lang == "de") {
//   alert("Немецкий текст");
// }

// if (lang == "ru") {
//   alert("Русский текст");
// }
// if (lang == "en") {
//   alert("Английский текст");
// }
// if (lang == "de") {
//   alert("Немецкий текст");
// }

// switch (перменная){
//     case: 'значени1':
//     здесь код, который выполнится в случае, если переменная имеет значение1;
//     break;
//     case: 'значени2':
//     здесь код, который выполнится в случае, если переменная имеет значение2;
//     break;
//     case: 'значени3':
//     здесь код, который выполнится в случае, если переменная имеет значение3;
//     break;
//     default:
//     код выполнится если не совпадет не с одним из значений;
//     break;
// }

// var lang = "ru";
// switch (lang) {
//   case "ru":
//     alert("Русский текст");
//     break;

//   case "en":
//     alert("Английский текст");
//     break;

//   case "de":
//     alert("Немецкий текст");
//     break;

//   default:
//     alert("Данный язык не поддерживается");
//     break;
// }

// Задача 1
// var num = 10;
// if (num == 10) {
//   alert("Верно");
// } else {
//   alert("Неверно");
// }

// Задача 2
// var min = 10;
// if (min >= 0 && min <= 14) {
//   alert("В первую четверть");
// }
// if (min >= 15 && min <= 14) {
//   alert("В первую четверть");
// }
// if (min >= 31 && min <= 45) {
//   alert("В первую четверть");
// }
// if (min >= 46 && min <= 59) {
//   alert("В первую четверть");
// }

// Задача 3
// var lang = "ru";
// if (lang == "ru") {
//   var arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// }
// if (lang == "en") {
//   arr = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
// }
// alert(arr);

// var lang = "en";
// switch (lang) {
//   case "ru":
//     var arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
//     break;

//   case "en":
//     arr = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
//     break;
// }
// alert(arr);

// var lang = "en";
// var arr = {
//   ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
//   en: ["mn", "ts", "wd", "th", "fr", "st", "sn"],
// };
// alert(arr[lang]);

// Задача самостоятельные
// Задача 1
// var a = -3;
// if (a == 0) alert("Верно");
// else alert("Неверно");

// Задача 2
// var a = -3;
// if (a > 0) alert("верно");
// else alert("не верно");

//Задача 3
// var a = -3;
// if (a < 0) alert("верно");
// else alert("не верно");

//Задача 4
// var a = -3;
// if (a >= 0) alert("Верно");
// else alert("Не верно");

//Задача 5
// var a = 1;
// if (a <= 0) alert("верно");
// else alert("не верно");

// Задача 6
// var a = 0;
// if (a != 0) alert("Верно");
// else alert("не верно");

// Задача 7
// var a = "test";
// if (a == "test") alert("Верно");
// else alert("Не верно");

// Задача 8
// var a = "1";
// if (a === "1") alert("Верно");
// else alert("не верно");

// Задача 9
// var test = false;
// if (test) alert("верно");
// else alert("не верно");

//Задача 10
// var test = false;
// if (!test) alert("верно");
// else alert("не верно");

// var test = false;
// if (test != true) alert("верно");
// else alert("не верно");

//Задача 11
// var a = 2;
// if (a > 0 && a < 5) alert("верно");
// else alert("не верно");

//Задача 12
// var a = 2;
// if (a == 0 || a < 1) alert((a += 7));
// else alert((a /= 10));

//Задача 13
// var a = 3,
//   b = 5;
// if (a <= 1 && b >= 3) alert(a + b);
// else alert(a - b);

// Задача 14
// var a = 1,
//   b = 7;
// if ((a > 2 && a < 11) || (b >= 6 && b <= 14)) alert("верно");
// else alert("Не верно");

// Задача 15
// var num = 2;
// switch (num) {
//   case 1:
//     var result = "Зима";
//     break;
//   case 2:
//     result = "Весна";
//     break;
//   case 3:
//     result = "Лето";
//     break;
//   case 4:
//     result = "Осень";
//     break;
//   default:
//     break;
// }
// alert(result);

//задача 16
// var day = 41;
// if (day >= 1 && day <= 10) alert("1 декада месяца");
// if (day >= 11 && day <= 20) alert("2 декада месяца");
// if (day >= 21 && day <= 31) alert("3 декада месяца");

// задача 17
// var month = 6;
// if (month >= 1 && month <= 3) alert("Зима");
// if (month >= 4 && month <= 6) alert("Весна");
// if (month >= 7 && month <= 9) alert("Лето");
// if (month >= 10 && month <= 12) alert("Осень");

// Задача 18
// var str = "abcde";
// if (str[0] == "a") alert("да");
// else alert("нет");

// Задача 19
// var str = "12345";
// if (str[0] == 1 || str[0] == 2 || str[0] == 3) alert("Да");
// else alert("Нет");

// Задача 20
// var str = "123";
// alert(Number(str[0]) + Number(str[1]) + Number(str[2]));

// Задача 21
// var str = "123321";
// if (
//   Number(str[0]) + Number(str[1]) + Number(str[2]) ==
//   Number(str[3]) + Number(str[4]) + Number(str[5])
// )
//   alert("да");
// else alert("Нет");
