//Теория
// while (пока выражение истинно) {
//     выполняем этот код циклически;
//     в начале каждого цикла проверяем выражение в круглых скобках
// }

// var i = 0;
// while (i < 5) {
//   i++;
//   alert(i);
// }

// for(начальные команды; условие окончания цикла; команды после прохода цикла){
//     тело цикла;
// }

// for (var i = 0; i < 10; i++) {
//   alert(i);
// }

// Цикл без тела(т.к. в конце тела точка с запятой)
// for (var i = 0; i < 10; i++);
// alert(i);

// for (var i = 0, j = 2; i < 10; i++, j++, i = i + j) {}

// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i <= arr.length - 1; i++) {
//   alert(arr[i]);
// }

// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//   alert(arr[i]);
// }

//Выведет ключи
// var obj = { Коля: 200, Вася: 300, Петя: 400 };
// for (key in obj) {
//   alert(key);
// }

//Выведет значения
// var obj = { Коля: 200, Вася: 300, Петя: 400 };
// for (key in obj) {
//   alert(obj[key]);
// }

// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === 3) {
//     break;
//   } else {
//     alert(arr[i]);
//   }
// }

// Инструкция continue прерывает выполнение текущей итерации текущего или отмеченного цикла, и продолжает его выполнение на следующей итерации.

// i = 0;
// n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   alert((n += i));
// }

// Практические задачи
// var i = 1;
// while (i <= 50) {
//   document.write(i + "<br>");
//   i++;
// }

// for (var i = 1; i <= 50; i++) {
//   document.write(i + "<br>");
// }

// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//   document.write(arr[i] + "<br>");
// }

// var result = 1;
// var arr = [2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//   result = result * arr[i];
// }
// alert(result);

// var result = 1;
// var arr = [2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//   result *= arr[i];
// }
// alert(result);

// var obj = {
//   Минск: "Беларусь",
//   Москва: "Россия",
//   Киев: "Украина",
// };
// for (var key in obj) {
//   alert(key + " - это " + obj[key] + ".");
// }

// Практические задачи #1
// var i = 0;
// while (i <= 100) {
//   document.write(i + "<br>");
//   i++;
// }

// for (i = 0; i <= 100; i++) {
//   document.write(i + "<br>");
// }

//Задача №2
// var i = 11;
// while (i >= 11 && i <= 33) {
//   document.write(i + "<br>");
//   i++;
// }

// for (i = 11; i >= 11 && i <= 33; i++) {
//   document.write(i + "<br>");
// }

//Задача №3
// var i = 0;
// while (i >= 0 && i <= 100) {
//   if (i % 2 == 0 && i != 0) {
//     document.write(i + "<br>");
//   }
//   i++;
// }

// for (i = 0; i <= 100; i++) {
//   if (i % 2 == 0 && i != 0) {
//     document.write(i + "<br>");
//   }
// }

// Задача 4
// var result = 0;
// var i = 1;
// while (i >= 1 && i <= 100) {
//   result += i;
//   i++;
// }
// document.write(result);

// var result = 0;
// for (var i = 1; i >= 1 && i <= 100; i++) {
//   result += i;
// }
// document.write(result);

// Задача 5
// var arr = [1, 2, 3, 4, 5];
// for (i = 0; i < arr.length; i++) {
//   document.write(arr[i] + "<br>");
// }

// Задача 6
// var result = 0;
// var arr = [1, 2, 3, 4, 5];
// for (i = 0; i < arr.length; i++) {
//   result += arr[i];
//   document.write(result + "<br>");
// }

//Задача 7
// var obj = { green: "зеленый", red: "Красный", blue: "голубой" };
// for (key in obj) {
//   document.write(key + " " + obj[key] + "<br>");
// }

// Задача 8
// var obj = { Коля: 200, Вася: 300, Петя: 400 };
// for (key in obj) {
//   document.write(key + " - зарплата " + obj[key] + " долларов" + "<br>");
// }

//Задача 9
// var arr = [2, 5, 9, 15, 0, 4];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     document.write(arr[i] + "<br>");
//   }
// }

// Задача 10
// var result = 0;
// var arr = [-1, -2, 2, 5];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     document.write((result += arr[i]) + "<br>");
//   }
// }

//Задача 11
// var arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] == 4) {
//     alert("Есть");
//     break;
//   }
// }

// Задача 12
// var arr = [10, 20, 30, 50, 235, 3000];
// for (i = 0; i < arr.length; i++) {
//   var num = String(arr[i]);
//   var char = num[0];
//   if (char == 1 || char == 2 || char == 5) {
//     document.write(num + "<br>");
//   }
// }

// Задача 13
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (i in arr) {
//   document.write("-" + arr[i]);
// }
// document.write("-");

//Задача 14
// var week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// for (day in week) {
//   if (week[day] === "сб" || week[day] === "вс")
//     document.write("<b>" + week[day] + "</b><br>");
//   else document.write(week[day] + "<br>");
// }

// задача 15

// var week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// var today = "пн";
// for (day in week) {
//   if (week[day] == today) document.write("<i>" + week[day] + "</i><br>");
//   else document.write(week[day] + "<br>");
// }

//Задача 16

// for (var n = 1000, i = 0; n >= 50; i++, n /= 2);
// document.write("Остаток " + n + "<br>" + "Итераций " + i + "<br>");
