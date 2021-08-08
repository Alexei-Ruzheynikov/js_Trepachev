//Интересные конструкции, слегка сложные для повторения, но понять можно

// var arr = [];
// for (var i = 0; i < 10; i++) {
//   arr.push("x");
// }
// console.log(arr);

// var arr = [];
// for (var i = 1; i <= 10; i++) {
//   arr.push(i);
// }
// console.log(arr);

// var arr = [];
// for (var i = 0; i < 10; i++) {
//   arr[i] = "x";
// }
// console.log(arr);

// var arr = [];
// for (var i = 0; i < 10; i++) {
//   arr[i] = i + 1;
// }
// console.log(arr);

// var arr = ["a", "b", "c", "d", "e"];
// var result = [];
// for (var i = arr.length - 1; i >= 0; i--) {
//   result.push(arr[i]);
// }
// console.log(result);

// var obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// var result = {};
// for (var key in obj) {
//   result[obj[key]] = key;
// }
// console.log(result);

// var arr = ["a", "b", "c", "a", "a", "b"];
// var count = { a: 0, b: 0, c: 0 };
// for (var i = 0; i < arr.length; i++) {
//   count[arr[i]]++;
// }
// console.log(count);

// var arr = ["a", "b", "c", "a", "a", "b"];
// var count = [];
// for (var i = 0; i < arr.length; i++) {
//   if (count[arr[i]] === undefined) {
//     count[arr[i]] = 1;
//   } else {
//     count[arr[i]]++;
//   }
// }
// console.log(count);

// var arr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8],
//   [9, 10],
// ];
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     alert(arr[i][j]);
//   }
// }

// Задача 1
// var arr = [];
// var str = "";
// for (var i = 0; i < 10; i++) {
//   str += "x";
//   arr.push(str);
// }
// document.write(arr);

//Задача 2
// var arr = [];
// var char;
// for (var i = 1; i < 10; i++) {
//   char = "";
//   for (var j = 1; j <= i; j++) {
//     char += i;
//   }
//   arr.push(char);
// }
// document.write(arr);

//Задача 3
// function arrayFill(value, length) {
//   var arr = [];
//   for (var i = 0; i < length; i++) {
//     arr.push(value);
//   }
//   return arr;
// }
// document.write(arrayFill("x", 5));

//задача 4
// var arr = [1, 2, 3, 4, 5, 6];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   if (sum > 10) {
//     break;
//   }
// }
// document.write(i + 1);

//Задача 5
// var arr = [1, 2, 3, 4, 5, 6];
// var result = [];
// for (var i = arr.length - 1; i >= 0; i--) {
//   result.push(arr[i]);
// }
// document.write(result);

//Задача 6
// var arr = [[1, 2, 3], [4, 5], [6]];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
// }
// alert(sum);

// Задача 7
// var arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     for (var k = 0; k < arr[i][j].length; k++) {
//       sum += arr[i][j][k];
//     }
//   }
// }
// document.write(sum);
