// function func(num) {
//   if (num === undefined) {
//     num = 3;
//   }
//   return num * num;
// }
// function func(num1, num2, num3) {
//   num3 = num3 || 3;
//   num2 = num2 || 2;
//   return num * num;
// }
// alert(func());

// function func() {
//   var local = "Тест";
//   alert(local);
// }
// func();
// alert(local);

// var test = "Тест!";
// function func() {
//   var test = "Локальная!";
//   alert(test);
// }
// func();

// var test = "Тест!";
// function func() {
//   alert(test);
// }
// func();

// var global = "Тест!";
// function func() {
//   global = "Поменялась!";
// }
// func();
// alert(global);

// var global = "Тест";
// function func() {
//   var global = "Поменялась";
// }
// func();
// alert(global);

// function func() {
//   var local = "Тест";
//   alert(local);
// }
// func();
// alert(local);

// function func() {
//   local = "Тест";
//   alert(local);
// }
// func();
// alert(local);

// var test = "Привет";
// function func() {
//   test = "Тест";
// }
// func();
// alert(test);

// use strict почему то не показал ошибку а должен был
// "use strict";
// var test = "Привет!";
// function func() {
//   test = "Тест!";
// }
// func();
// alert(test);

// var test = "Тест";
// alert(window.test);

// syntax error
// var window.test = 'Тест!';
// alert(test);

// function func1() {
//   window.test = "Тест";
// }
// function func2() {
//   alert(window.test);
// }
// func1();
// func2();

// var arr = [1, 2, 3, 4, 5];
// last(arr);
// function last(arr) {
//   document.write(arr.pop() + "<br>");
//   if (arr.length != 0) {
//     last(arr);
//   }
// }

// let i = 0;
// function func() {
//   console.log(i++);
//   if (i <= 10) {
//     func();
//   }
// }
// func();

// function func(arr) {
//   console.log(arr.shift());
//   if (arr.length != 0) {
//     func(arr);
//   }
// }
// func([1, 2, 3]);

// function func(arr, sum) {
//   sum += arr.shift();
//   if (arr.length != 0) {
//     sum = func(arr, sum);
//   }
//   return sum;
// }
// console.log(func([1, 2, 3], 0));

// function func(arr, sum) {
//   if (sum === undefined) {
//     sum = 0;
//   }
//   sum += arr.shift();
//   if (arr.length != 0) {
//     sum = func(arr, sum);
//   }
//   return sum;
// }
// console.log(func([1, 2, 3]));

// Не отработал пример
// var sum = 0;
// functioon func(arr) {
//     sum += arr.shift();
//     if(arr.length != 0) {
//         sum = func(arr);
//     }
//     return sum;
// }
// console.log(func([1,2,3]));

// function func(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "object") {
//       arr[i] = func(arr[i]);
//     } else {
//       arr[i] = arr[i] + "!";
//     }
//   }
//   return arr;
// }
// console.log(func([1, 2, [3, 4, [5, 6, 7]]]));

// function reduceNum(num) {
//   var sum = getDigitSum(num);
//   if (sum >= 10) {
//     return reduceNum(sum);
//   } else {
//     return sum;
//   }
// }
// function getSum(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += Number(arr[i]);
//   }
//   return sum;
// }
// function getDigits(num) {
//   return String(num).split("");
// }
// function getDigitSum(num) {
//   return getSum(getDigits(num));
// }
// console.log(reduceNum(127));

//Задача 1
// function func(arr) {
//   console.log(arr[0]);
//   arr.splice(0, 1);
//   if (arr.length > 0) {
//     func(arr);
//   }
// }
// var arr = [1, 2, 3];
// func(arr);

//Задача 2
function reduceNum(num) {
  var sum = getDigitSum(num);
  if (sum > 9) {
    return reduceNum(sum);
  } else {
    return sum;
  }
}
function getSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}
function getDigits(num) {
  return String(num).split("");
}
function getDigitSum(num) {
  return getSum(getDigits(num));
}
console.log(reduceNum(245));
