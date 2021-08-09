// function inArray(value, arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == value) {
//       return true;
//     }
//   }
//   return false;
// }
// var arr = [1, 2, 3, 4, 5];
// alert(inArray(9, arr));

// function isSimple(num) {
//   for (var i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// alert(isSimple(14));

// function getDivisors(num) {
//   var result = [];
//   for (var i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// alert(getDivisors(24));

// function inArray(value, arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == value) {
//       return true;
//     }
//   }
//   return false;
// }
// function getIntersection(arr1, arr2) {
//   var result = [];
//   for (var i = 0; i < arr1.length; i++) {
//     if (inArray(arr1[i], arr2)) {
//       result.push(arr1[i]);
//     }
//   }
//   return result;
// }
// alert(getIntersection([1, 2, 3], [2, 3, 4]));

//Пример не отработал
// function getDivisors(num) {
//   var result = [];
//   for (var i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// function getIntersection(arr1, arr2) {
//   var result = [];
//   for (var i = 0; i < arr1.length; i++) {
//     if (inArray(arr1[i], arr2)) {
//       result.push(arr1[i]);
//     }
//   }
//   return result;
// }
// function inArray(value, arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == value) {
//       return true;
//     }
//   }
//   return false;
// }
// function getGreatestCommonDivisor(num1, num2) {
//   var divisors = getIntersection(getDivisors(num1), getDivisors(num2));
//   return Number(Max.apply(null, divisors));
// }
// alert(getGreatestCommonDivisor(12, 18));

// Задача 1

// var str = "one two three";
// var arr = str.split(" ");
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//   newArr.push(ucfirst(arr[i]));
// }
// var newStr = newArr.join(" ");
// alert(newStr);
// function ucfirst(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

//Задача 2
// var str = "var_text_hello";
// var arr = str.split("_");
// for (var i = 1; i < arr.length; i++) {
//   arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
// }
// var newStr = arr.join("");
// alert(newStr);

// Задача 3
// function inArray(value, arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == value) {
//       return true;
//     }
//   }
//   return false;
// }
// var arr = ["one", "two", "three"];
// alert(inArray("one", arr));

// Задача 4
// function reverseNumber(str) {
//   var arr = str.split("");
//   var newArr = [];
//   for (var i = 1; i < arr.length; i += 2) {
//     newArr.push(arr[i] + arr[i - 1]);
//   }
//   return newArr.join("");
// }
// document.write(reverseNumber("123456"));
