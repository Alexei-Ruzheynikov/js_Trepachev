// var date = new Date();

// alert(date.getMilliseconds());
// alert(date.getSeconds());
// alert(date.getMinutes());
// alert(date.getHours());
// alert(date.getDate());
// alert(date.getMonth());
// alert(date.getFullYear());

// alert(date.getDay());

// var days = ["вс", "Пн", "вт", "ср", "чт", "пт", "сб"];
// alert(days[2]);

// var date = new Date();
// var day = date.getDay();
// var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
// alert(days[day]);

// var date = new Date(2025, 10, 5, 12, 59, 59);
// var day = date.getDay();
// var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
// alert(days[day]);

// var date = new Date(2025, 10, 5);
// var day = date.getDay();
// var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
// alert(days[day]);

// var date = new Date();
// alert(date.getTime());

// var date = new Date(2015, 12, 4, 23, 59, 59);
// alert(date.getTime());

// var now = new Date();
// var date = new Date(2015, 12, 4, 23, 59, 59);
// var diff = now.getTime() - date.getTime();
// alert(diff);

// document.write(Date.parse("2015-05-25T12:59:59"));

// var now = new Date();
// var date = new Date(2015, 23, 4, 12, 59, 59);
// var diff = now - date;
// document.write(diff);

// var date = new Date();
// console.log(
//   date.getFullYear() +
//     "." +
//     date.getMonth() +
//     "." +
//     date.getDate() +
//     "." +
//     date.getHours() +
//     "." +
//     date.getMinutes() +
//     "." +
//     date.getSeconds()
// );
//1 параметр трактуется как милисекунды от 1970 года
// var date = new Date(111111);
// console.log(
//   date.getFullYear() +
//     "." +
//     date.getMonth() +
//     "." +
//     date.getDate() +
//     "." +
//     date.getHours() +
//     "." +
//     date.getMinutes() +
//     "." +
//     date.getSeconds()
// );
// console.log(date.getDay());

// строковый международный формат даты 03 - 3 месяц март, в js отображается как 2 месяц, т.к. номерация начинается с 0 - "2015-03-25" и с разделителем "2015-03-25T12:55:33" и можно опускать день и месяц "2015-03"
// var date = new Date(2015);
// console.log(
//   date.getFullYear() +
//     "." +
//     date.getMonth() +
//     "." +
//     date.getDate() +
//     "." +
//     date.getHours() +
//     "." +
//     date.getMinutes() +
//     "." +
//     date.getSeconds()
// );
// console.log(date.getDay());

// var date1 = "2022-12-01";
// var date2 = "2019-12-01";

// var date1 = new Date(date1);
// var date2 = new Date(date2);
// console.log(date1 > date2);
// console.log(date1.getTime() - date2.getTime());

// var date = "2022-12-01";
// date = new Date(date);
// console.log(date.getTime());

// var date = "2022-12-01";
// var ms = Date.parse(date);
// console.log(ms);

// var date = "2022-01-01";
// var arr = date.split("-");
// console.log(arr);
// var date = new Date(arr[0], arr[1] - 1, arr[2]);
// console.log(date);

// var month = 1;
// var year = 2018;
// var date = new Date(year, month + 1, 0);

// console.log(date.getDate());

// var year = 2017;
// var date = new Date(year, 2, 0);
// if (date.getDate() == 29) {
//   console.log("Високосный");
// } else {
//   console.log("Не високосный");
// }
// console.log(date.getDate());

//функция реализована - месяц начинается с 1
// function checkDate(year, month, day) {
//   let date = new Date(year, month - 1, day);
//   if (
//     date.getFullYear() == year &&
//     date.getMonth() == month - 1 &&
//     date.getDate() == day
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkDate(2018, 1, 32));

// let date = new Date(2018, 0, 32);
// console.log(date.getFullYear(), date.getMonth(), date.getDate());

// var str = "2018-12-01";
// var date = new Date();
// date = addZero(date.getMonth() + 1) + "-" + addZero(date.getDate());
// console.log(date);

// function addZero(num) {
//   if (num <= 9) {
//     num = "0" + num;
//   }
//   return num;
// }
// if (date >= "08-05" && date <= "09-19") {
//   console.log(true);
// } else if (date >= "09-20" && date <= "10-12") {
//   console.log(true);
// }

// ТАЙМЕР ДО ПОЛУНОЧИ
// var text = document.querySelector("#text");
// timer();
// setInterval(timer, 1000);
// function timer() {
//   var now = new Date();
//   var target = new Date(
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate() + 1,
//     0,
//     0,
//     0
//   );
//   var diff = Math.ceil((target - now) / 1000);
//   var hours = Math.floor(diff / (60 * 60));
//   var diff = diff % (60 * 60);

//   var minutes = Math.floor(diff / 60);
//   var diff = diff % 60;

//   var seconds = diff;
//   text.innerHTML =
//     addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
// }
// function addZero(num) {
//   if (num <= 9) {
//     num = "0" + num;
//   }
//   return num;
// }

//ТАЙМЕР ДО НОВОГО ГОДА
// var text = document.querySelector("#text");
// timer();
// setInterval(timer, 1000);
// function timer() {
//   var now = new Date();
//   var target = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

//   var diff = Math.ceil((target - now) / 1000);

//   var days = extract(diff, 60 * 60 * 24);
//   var hours = extract(days.diff, 60 * 60);
//   var minutes = extract(hours.diff, 60);

//   var seconds = extract(minutes.diff, 1);
//   text.innerHTML =
//     addZero(days.value) +
//     ":" +
//     addZero(hours.value) +
//     ":" +
//     addZero(minutes.value) +
//     ":" +
//     addZero(seconds.value);
// }

// function extract(diff, formula) {
//   var value = Math.floor(diff / formula);
//   var diff = diff % formula;

//   return { value: value, diff: diff };
// }

// function addZero(num) {
//   if (num <= 9) {
//     num = "0" + num;
//   }
//   return num;
// }

// var date = new Date();
// alert(
//   date.getFullYear() + "-" + addZero(date.getMonth()) + "-" + date.getDate()
// );
// function addZero(num) {
//   if (num <= 9) {
//     num = "0" + num;
//   }
//   return num;
// }

// var months = [
//   "янв",
//   "фев",
//   "мар",
//   "апр",
//   "май",
//   "июн",
//   "июл",
//   "авг",
//   "сен",
//   "окт",
//   "ноя",
//   "дек",
// ];
// var date = new Date();
// var month = date.getMonth();
// alert(months[month]);

//Практические задачи
// Задача 1
// var date = new Date();
// alert(date.getDate());

// Задача 2
// var date = new Date();
// alert(date.getMonth() + 1);

//Задача 3
// var date = new Date();
// alert(date.getFullYear());

// Задача 4
// var date = new Date();
// alert(
//   addZero(date.getHours()) +
//     ":" +
//     addZero(date.getMinutes()) +
//     ":" +
//     addZero(date.getSeconds()) +
//     " " +
//     addZero(date.getFullYear()) +
//     "." +
//     addZero(date.getMonth() + 1) +
//     "." +
//     addZero(date.getDate())
// );
// function addZero(num) {
//   if (num <= 9) {
//     num = "0" + num;
//   }
//   return num;
// }

//Задача 5
// var date = new Date();
// alert(date.getDay());

// Задача 6
// var date = new Date();
// var day = date.getDay();
// function showDay(day) {
//   var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
//   return days[day];
// }
// alert(showDay(day));

//Задача 7
// var date = new Date(2015, 0, 7);
// var day = date.getDay();
// function showDay(day) {
//   var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
//   return days[day];
// }
// alert(showDay(day));

// Задача 8
// var date = new Date();
// var minute = Math.floor(date.getTime() / (1000 * 60));
// alert(minute);

// Задача 9
// var time = Date.parse("1988-03-01T00:00:00");
// var date = new Date();
// var now = date.getTime();
// var result = now - time;
// result = result / (1000 * 60 * 60);
// alert(result);

//Задача 10
// var date = new Date();
// var now = new Date(
//   date.getFullYear(),
//   date.getMonth(),
//   date.getDate(),
//   0,
//   0,
//   0
// );
// var result = Math.floor((date.getTime() - now.getTime()) / 1000);
// alert(result);

//Задача 11
// var date = new Date();
// var now = new Date(
//   date.getFullYear(),
//   date.getMonth(),
//   date.getDate() + 1,
//   0,
//   0,
//   0
// );
// var result = Math.floor((now.getTime() - date.getTime()) / 1000);
// alert(result);

// Задача 12
//Сложная задача, пока не понимаю.
// var inp = document.getElementById("inp");
// var p = document.getElementById("test");
// inp.addEventListener("blur", function () {
//   var arr = this.value.split("-");
//   var bd = new Date(arr[0], arr[1] - 1, arr[2]);
//   var now = new Date();
//   bd.setFullYear(now.getFullYear());
//   if (bd - now < 0) {
//     bd.setFullYear(bd.getFullYear() + 1);
//   }
//   p.innerHTML = Math.floor((bd - now) / (1000 * 60 * 60 * 24)) + "дней";
// });
