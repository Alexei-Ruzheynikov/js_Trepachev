// function func() {
//   alert("!*");
// }

// function func1() {
//   alert("1");
// }

// function func2() {
//   alert("2");
// }

function func() {
  //   var elem = document.getElementById("test");
  //   alert(elem.value);
  //   alert(elem.id);
  //   alert(elem.type);
  //   elem.value = "www";
  //   alert(document.getElementById("test").value);
  //   document.getElementById("test").value = "www";
  //   var elem = document.getElementById("test");
  //   elem.value = "www";
  //   elem.type = "submit";
  //   document.getElementById("test").value = "www";
  //   document.getElementById("test").type = "submit";
  // Обращаться к атрибуту класссу (class) необходимо через className, еще для атрибута for соответствует свойство с названием htmlFor
  //   var elem = document.getElementById("test");
  //   alert(elem.className);
}

// Работа с getElementById и любая работа с элементами страницы - это медленная операция(браузер каждый раз обрабатывает HTML страницу и ищет элемент с заданным id несколько раз - не важно, что id одинаковый - браузер проделает все действия несколько раз)
// Если использовать переменную elem - то повторного поиска не происходит(элемент уже найден и ссылка на него лежит в переменной elem)
function funcs() {
  var elem = document.getElementById("test");
  alert(elem.value);
}

function funcs1() {
  var elem = document.getElementById("test1");
  alert(elem.value);
}
function funcs2() {
  var elem = document.getElementById("test2");
  alert(elem.value);
}
function funcs3() {
  var elem = document.getElementById("test3");
  alert(elem.value);
}
function funcs4(id) {
  var elem = document.getElementById(id);
  alert(elem.value);
}

function funcs5(elem) {
  alert(elem.value);
}
function funcs6() {
  //   var elem = document.getElementById("test6");
  //   elem.style.color = "red";
  //   document.getElementById("test6").style.color = "red";
  //   var elem = document.getElementById("test6");
  //   elem.style.fontSize = "18px";
  //   var elem = document.getElementById("test");
  //   elem.style.mozBoxSizing = "border-box";
  //   var elem = document.getElementById("test6");
  //   elem.style.cssFloat = "left";
}

// Свойства, которые пишутся через дефис в css пишутся слитно и с большой буквы,например font-size fontSize
// А кроссбраузерное -moz-box-sizing - mozBoxSizing

// Свойство float так же как и class - является исключением и пишется как cssFloat

// Задачи
function buttonClick() {
  //   var input = document.getElementById("input");
  //   input.value = "!!!";
  //   var input = document.getElementById("input");
  //   alert(input.value);
  //   var input = document.getElementById("input");
  //   var number = Number(input.value);
  //   var square = number * number;
  //   alert(square);
  var input1 = document.getElementById("input1");
  var input2 = document.getElementById("input2");
  var input1Value = input1.value;
  var input2Value = input2.value;
  input1.value = input2Value;
  input2.value = input1Value;
  //   var input = document.getElementById("input");
  //   input.style.color = "red";
  // или
  document.getElementById("input").style.color = "red";
}

function buttonClick2(elem) {
  elem.value = "Новый текст кнопки";
}

function button1Click() {
  var input = document.getElementById("input3");
  input.disabled = true;
}
function button2Click() {
  var input = document.getElementById("input3");
  input.disabled = false;
}

function myFunc() {
  var input = document.getElementById("input10");
  alert(input.value);
}
function myFunc2() {
  var input = document.getElementById("input11");
  input.value = "Ой, я поменял текст!";
}
function myFunc3() {
  var input = document.getElementById("img");
  img.src = "img/2.jpg";
}

function myFunc4(elem) {
  alert(elem.value);
}

function myFunc5(elem) {
  elem.value = "Ой, я поменял текст!";
}

function myFunc6(elem) {
  elem.value = "Ой, я поменял текст!!!";
}
function myFunc7(elem) {
  elem.value = "Ой, а теперь еще раз поменял!";
}
function myFunc8(elem) {
  elem.value = "Ку-ку";
}

function myFunc9(elem) {
  elem.value = "О, теперь на меня больше не нажать!";
  elem.disabled = true;
}

function myFunc10(elem) {
  elem.src = "img/2.jpg";
}
function myFunc11(elem) {
  elem.src = "img/1.jpg";
}

function myFunc12() {
  var elem = document.getElementById("input12");
  elem.style.color = "red";
  elem.style.width = "250px";
}

function myFunc13() {
  var elem = document.getElementById("input13");
  elem.style.display = "none";
}
function myFunc14() {
  var elem = document.getElementById("input13");
  elem.style.display = "inline-block";
}

function myFunc15() {
  var elem = document.getElementById("input14");
  elem.value = "Ой, я поменял свой текст и css!";
  elem.style.color = "red";
  elem.style.width = "250px";
  elem.style.height = "50px";
  elem.style.borderRadius = "20px";
}

function myFunc16() {
  var elem = document.getElementById("input15");
  var elem2 = document.getElementById("input16");
  elem.disabled = true;
  elem.value = "О, теперь на меня больше не нажать";
  elem2.style.display = "inline-block";
}

function myFunc17() {
  var elem = document.getElementById("input15");
  var elem2 = document.getElementById("input16");
  elem2.style.display = "none";
  elem.value = "О, на меня снова можно нажимать!";
  elem.disabled = false;
}

function myFunc18(elem) {
  elem.value = Number(elem.value) + 1;
}

function myFunc19() {
  var elem = document.getElementById("input17");
  elem.style.cssFloat = "right";
  elem.value = "Теперь я плаваю справа";
}

function myFunc20() {
  var elem = document.getElementById("input18");
  elem.value = "Мои css классы: " + elem.className;
}

function myFunc21() {
  var elem3 = document.getElementById("input19");
  var elem4 = document.getElementById("input20");
  var elemValue3 = elem3.value;
  var elemValue4 = elem4.value;
  elem4.value = elemValue3;
  elem3.value = elemValue4;
}

function myFunc22() {
  var elem = document.getElementById("input21");
  var elem2 = document.getElementById("input22");
  elem2.value = elem.value * elem.value;
}

function myFunc23() {
  var elem = document.getElementById("input23");
  var elem2 = document.getElementById("input24");
  if (!isNaN(elem.value)) {
    elem2.value = elem.value * elem.value;
  } else {
    alert("Вы ввели не число!");
  }
}

function myFunc24(elem) {
  elem.disabled = true;
  elem.style.cursor = "not-allowed";
}
function myFunc25() {
  var elem = document.getElementById("input25");
  elem.value += "+";
}
function myFunc26() {
  var elem = document.getElementById("input25");
  elem.value += "-";
}
function myFunc27() {
  var elem = document.getElementById("input25");
  elem.value += "/";
}
function myFunc28() {
  var elem = document.getElementById("input25");
  elem.value += "*";
}
function myFunc29() {
  var elem = document.getElementById("input25");
  elem.value += "1";
}
function myFunc30() {
  var elem = document.getElementById("input25");
  elem.value += "2";
}
function myFunc31() {
  var elem = document.getElementById("input25");
  elem.value += "3";
}
function myFunc32() {
  var elem = document.getElementById("input25");
  elem.value += "4";
}
function myFunc33() {
  var elem = document.getElementById("input25");
  elem.value += "5";
}
function myFunc34() {
  var elem = document.getElementById("input25");
  elem.value += "6";
}
function myFunc35() {
  var elem = document.getElementById("input25");
  elem.value += "7";
}
function myFunc36() {
  var elem = document.getElementById("input25");
  elem.value += "8";
}
function myFunc37() {
  var elem = document.getElementById("input25");
  elem.value += "9";
}
function myFunc38() {
  var elem = document.getElementById("input25");
  elem.value += "0";
}

function func(calc) {
  var text = document.getElementById("text");
  text.value += calc;
}
