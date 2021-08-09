// function getDigits(num) {
//   var str = String(num);
//   return str.split("");
// }

// function getDigits(num) {
//   return String(num).split("");
// }
// console.log(getDigits(123));

// function arraySum(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += Number(arr[i]);
//   }
//   return sum;
// }
// var sum = arraySum(getDigits(123));
// alert(sum);

// function inRange(num){
//     var sum = arraySum(getDigits(num));
//     if (sum >= 1 && sum <<= 9){
//         return true;
//     } else {
//         return false;
//     }
// }

// function inRange(num) {
//   var sum = araySum(getDigits(num));
//   return sum >= 1 && sum <= 9;
// }

// Полный пример 1
// var arr = [12, 19, 28, 13, 14, 345];
// var result = [];
// for (var i = 0; i < 10; i++) {
//   if (inRange(arr[i])) {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

// function inRange(num) {
//   var sum = arraySum(getDigits(num));
//   return sum >= 1 && sum <= 9;
// }
// function getDigits(num) {
//   return String(num).split("");
// }
// function arraySum(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += Number(arr[i]);
//   }
//   return sum;
// }

//Не понятно
// function getDigits(num) {
//   return String(num).split("");
// }
// function arraySum(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += Number(arr[i]);
//   }
//   return sum;
// }
// var arr = [12, 19, 28, 13, 14, 345];
// var sum = 0;
// for (var i = 0; i < 10; i++) {
//   sum += arraySum(getDigits(num));
// }
// alert(sum);

// Задача 1
// var arr = [1, 2, 3, -1, -2, -3];
// function isPositive(num) {
//   if (num >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//   if (isPositive(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// Задача 1
// function inNumberinRange(num) {
//   return num > 0 && num < 10;
// }
// alert(inNumberinRange(3));

//Задача 2
// var arr = [1, 2, 3, 4, 5, 6];
// var result = [];
// function isNumberinRange(num) {
//   return num > 0 && num < 10;
// }
// for (i = 0; i < arr.length; i++) {
//   if (isNumberinRange(arr[i])) {
//     result.push(arr[i]);
//   }
// }
// alert(result);

//Задача 3
// function getDigitsSum(num) {
//   var sum = 0;
//   var num = String(num);
//   for (var i = 0; i < num.length; i++) {
//     sum += Number(num[i]);
//   }
//   return sum;
// }
// alert(getDigitsSum(443));

//Задача 4
// function getDigitsSum(num) {
//   var sum = 0;
//   var num = String(num);
//   for (var i = 0; i < num.length; i++) {
//     sum += Number(num[i]);
//   }
//   return sum;
// }
// var arr = [];
// for (i = 1; i <= 2021; i++) {
//   if (getDigitsSum(i) == 13) {
//     arr.push(i);
//   }
// }
// alert(arr);

// Задача 5
// function isEven(num) {
//   return num % 2 == 0;
// }
// alert(isEven(5));

//Задача 6
// function isEven(num) {
//   return num % 2 == 0;
// }
// var arr = [1, 2, 3, 4, 5, 6];
// var neewArr = [];
// for (i = 0; i < arr.length; i++) {
//   if (isEven(arr[i])) {
//     neewArr.push(arr[i]);
//   }
// }
// alert(neewArr);

//Задача 7
// function getDivisors(num) {
//   var arr = [];
//   for (var i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// alert(getDivisors(13));
