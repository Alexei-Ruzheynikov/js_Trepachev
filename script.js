// Теория связанная с массивами

// Метод reverse изменяет порядок элементов на обратный
// let arr = ["a", "b", "c"];
// arr.reverse();
// console.log(arr);

// let arr = ["a", "b", "c"];
// let res = arr.reverse();
// console.log(res);

// let str = "123456789";
// let arr1 = str.split("");
// let arr2 = arr1.reverse();
// let result = arr2.join("");
// console.log(result);

// let str = "123456789";
// let result = str.split("").reverse().join("");
// console.log(result);

//Метод push добавляет неограниченное количество элементов в конец массива.
// let arr = ["a", "b", "c", "d", "e"];
// arr.push("1", "2");
// console.log(arr);

// При такой записи в переменную запишется длина массива
// let arr = ["a", "b", "c", "d", "e"];
// let length = arr.push("1", "2");
// console.log(length);

// let arr = [];
// for (let i = 1; i <= 9; i++) {
//   arr.push(i);
// }
// console.log(arr);

// Метод unshift добавляет неограниченное количество новых элеменртов в начало массива
// let arr = ["a", "b", "c", "d", "e"];
// arr.unshift("1", "2");
// console.log(arr);

// Выведет новую длину массива
// let arr = ["a", "b", "c", "d", "e"];
// let length = arr.unshift("1", "2");
// console.log(length);

// Метод shift удаляет первый элемент из массива, а результатом метода возвращается удаленный элемент
// let arr = ["a", "b", "c", "d", "e"];
// arr.shift();
// console.log(arr);

// let arr = ["a", "b", "c", "d", "e"];
// let elem = arr.shift();
// console.log(elem);

// let arr = ["1", "2", "3", "4", "5", "6"];
// let result = [];
// while (arr.length > 0) {
//   let first = arr.shift();
//   let last = arr.pop();
//   let str = first + last;
//   result.push(str);
// }
// result = result.join("-");
// console.log(result);

// Метод pop  удаляет последний элемент из массива

// let arr = ["a", "b", "c", "d", "e"];
// arr.pop();
// console.log(arr);

// let arr = ["a", "b", "c", "d", "e"];
// let del = arr.pop();
// console.log(del);

// let arr = ["1", "2", "3", "4", "5", "6"];
// let result = [];
// while (arr.length > 0) {
//   let first = arr.shift();
//   let last = arr.pop();
//   let str = first + last;
//   result.push(str);
// }
// result = result.join("-");
// console.log(result);

// Метод slice вырезает и возвращает указанную часть массива
// массив.slice(откуда отрезать, докуда отрезать)
// let arr = ["a", "b", "c", "d", "e"];
// let sub = arr.slice(0, 2);
// console.log(sub);

// let arr = ["a", "b", "c", "d", "e"];
// let sub = arr.slice(1);
// console.log(sub);

// let arr = ["a", "b", "c", "d", "e"];
// let sub = arr.slice(1, -1);
// console.log(sub);

// Метод splice удаляет или добавляет элементы в массив.
// Удаление элемента с первого 3 штуки
//Начиная с 1 удали 3 элемента
// let arr = ["a", "b", "c", "d", "e"];
// arr.splice(1, 3);
// console.log(arr);

// выведет массив удаленных элементов
// let arr = ["a", "b", "c", "d", "e"];
// let del = arr.splice(1, 3);
// console.log(del);

//Начиная со 2 удалить 1 элемент, и на его место добавить 1,2,3
// let arr = ["a", "b", "c", "d", "e"];
// arr.splice(2, 1, "1", "2", "3");
// console.log(arr);

//Удалили элемент d
// let arr = ["a", "b", "c", "d", "e"];
// arr.splice(-2, 1);
// console.log(arr);

// Метод sort производит сортировку массива в лексикографическом порядке
// let arr = ["Банан", "Апельсин", "Яблоко", "Манго"];
// console.log(arr.sort());

//Функция Object.keys - получает ключи объекта в виде массива
// var obj = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj));

//Метод reverse изменяет порядок элементов в массиве на обратный
// let arr = ["a", "b", "c"];
// arr.reverse();
// console.log(arr);

// let arr = ["a", "b", "c"];
// let res = arr.reverse();
// console.log(res);

// let str = "123456789";
// let arr1 = str.split("");
// let arr2 = arr1.reverse();
// let result = arr2.join("");
// console.log(result);

// let str = "123456789";
// let result = str.split("").reverse().join("");
// console.log(result);

//Задачa 1
// var a = ["a", "b", "c"];
// var b = [1, 2, 3];
//Вариант 1
// var c = a.concat(b);
// alert(c);
//Вариант 2
// var c = b.concat(a);
// alert(c);

// Задача 2
// var arr = ["a", "b", "c"];
// arr.push(1, 2, 3);
// alert(arr);

// Практические задачи
// Задача 1
// var a = [1, 2, 3],
//   b = [4, 5, 6],
//   c;
// c = a.concat(b);
// console.log(c);

// Задача 2
// var arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);

// Задача 3
// var arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

// Задача 4
// var arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

// Задача 5
// var arr = ["js", "css"];
// res = arr.shift();
// console.log(res);

// Задача 6
// var arr = ["js", "css", "jquery"];
// res = arr.pop();
// console.log(res);

// Задача 7
// var arr = [1, 2, 3, 4, 5];
// var res = arr.slice(0, 3);
// console.log(res);

// Задача 8
// var arr = [1, 2, 3, 4, 5];
// var res = arr.slice(2, 4);
// console.log(res);

// Задача 9
// var arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

// Задача 10
// var arr = [1, 2, 3, 4, 5];
// arr.splice(5, 0, 2, 3, 4);
// console.log(arr);

// Задача 11
// var arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, "a", "b", "c");
// console.log(arr);

// Задача 12
// var arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, "a", "b");
// arr.splice(6, 0, "c");
// arr.splice(9, 0, "e");
// console.log(arr);

// Задача 13
// var arr = [3, 4, 1, 2, 7];
// arr.sort();
// console.log(arr);

// Задача 14
// var obj = { js: "test", jq: "hello", css: "world" };
// console.log(Object.keys(obj));
