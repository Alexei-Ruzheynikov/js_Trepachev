// function func() {
// var elem = document.getElementById("test");
// elem.innerHTML = "!";
// Так же можно добавлять тэги
// elem.innerHTML = "<b>!</b>";
// elem.outerHTML = "<b>!</b>";
// }
//

// function func() {
//   var elems = document.getElementsByTagName("p");
// elems[0].innerHTML = "1";
// elems[1].innerHTML = "2";
// elems[2].innerHTML = "3";
//   for (var i = 0; i < elems.length; i++) {
//     elems[i].innerHTML = "!";
//   }
// }

//document.forms - обращаемся ко всем формам как к массиву по номеру
// document.forms[0].innerHTML = "!";

// var forms = document.forms;
// for (var i = 0; i < forms.length; i++) {
//   forms[i].innerHTML = "!";
// }

// к форме можно обращаться по атрибуту name у нее
// document.forms.form1.innerHTML = "!";
// document.forms["form2"].innerHTML = "?";

//обращение к свойству elements формы(содержит массив свойств формы)
// document.forms[1].elements[0].value = "!";

//Переберем циклом - код не отработал как ожидалось
// var elements = document.forms[1].elements;
// for (var i = 0; i < elements.length; i++) {
//   elements[i] = "!";
// }

// обращение по name формы и name инпута
// document.forms.form1.elements.input1.value = "!";

// метод getAttribute - считывает значение указанного атрибута
// метод setAttribute - записывает новое значение в атрибут
// метод removeAttribute - удаляет атрибут совсем
// метод hasAttribute - проверяет наличие или отсутствие атрибута у свойства
// function func() {
//   var elem = document.getElementById("test");
// alert(elem.getAttribute("value"));
// elem.setAttribute("value", "www");
// elem.removeAttribute("value");
// alert(elem.hasAttribute("value"));
// }

// с помощью метода getElementsByClassName получаем свойства по классу
// function func() {
//   var elems = document.getElementsByClassName("www");
//   for (var i = 0; i < elems.length; i++) {
//     elems[i].innerHTML = "!";
//   }
// }

// С помощью метода querySelector можно найти любой элемент, в случае querySelector если их много, то выбран будет первый
// function func() {
// var elem = document.querySelector("input.test");
//   var elem = document.querySelector("#test");

//   alert(elem.getAttribute("value"));
// }

// С помощью метода querySelectorAll можно найти все элементы подходящие под поиск(описание)
// function func() {
//   var elems = document.querySelectorAll(".www");
//   for (var i = 0; i < elems.length; i++) {
//     elems[i].innerHTML = "!";
//   }
// }

// Мы можем создавать свои атрибуты через data-свое-название и обращаться к ним через dataset.своеНазвание
// function func() {
//   var elem = document.getElementById("elem");
//   alert(elem.dataset.price);
//   alert(elem.dataset.productNumber);
// }

// function func() {
// var elem = document.getElementById("test");
// elem.value = "new"; //поменяли свойство
// alert(elem.getAttribute("value")); //выведет 'old' - не изменилось!

// var elem = document.getElementById("test");

// elem.setAttribute("value", "new"); //поменяли атрибут
// alert(elem.value); //выведет 'new' - elem.value изменилось!
// }
//

// function buttonClick() {
//   var elem = document.getElementById("elem");
//   elem.innerHTML = "!!!";
// }

// function buttonClick() {
//   var elem = document.getElementById("elem");
//   elem.outerHTML = "<b>" + elem.outerHTML + "</b>";
// }

// function func() {
//   var elems = document.getElementsByTagName("p");
//   for (var i = 0; i < elems.length; i++) {
//     elems[i].innerHTML = i + 1;
//   }
// }

// function func() {
//   var elems = document.getElementsByClassName("zzz");
//   for (var i = 0; i < elems.length; i++) {
//     elems[i].innerHTML = i + 1;
//   }
// }

// function func() {
//   var elems = document.querySelectorAll("p.zzz");
//   for (var i = 0; i < elems.length; i++) {
//     elems[i].innerHTML = i + 1;
//   }
// }

// function func() {
//   var elem = document.getElementsByClassName("test");
//   elem[0].innerHTML = "Ку-ку! А я" + "<b>жирный</b>";
// }

// function func() {
//   var elem = document.getElementsByTagName("p");
//   elem[0].outerHTML = "<h3>Абзац превратился в h3!</h3>";
// }

// function func() {
//   var elem = document.getElementsByTagName("p");
//   elem[0].outerHTML =
//     "<h3>При нажатии на кнопку абзац станет h3, но текст останется</h3>";
// }

// function func() {
//   var elem = document.getElementsByTagName("input");
//   var Value1 = Number(elem[0].value);
//   var Value2 = Number(elem[1].value);
//   var elemResult = document.getElementsByClassName("result");
//   elemResult[0].innerHTML = Value1 + Value2;
// }

// function func() {
//   var elem = document.getElementsByTagName("p");
//   for (i = 0; i < elem.length; i++) {
//     elem[i].innerHTML = "Ку-ку";
//   }
// }

// var elem = document.getElementsByClassName("www");
// for (var i = 0; i < elem.length; i++) {
//   elem[i].innerHTML = i + 1;
// }

// var elem = document.querySelectorAll("p.www");
// for (var i = 0; i < elem.length; i++) {
//   elem[i].innerHTML = i + 1;
// }

// function func() {
//   var elem = document.querySelector("#my-class");
//   alert(elem.getAttribute("class"));
// }

// function func() {
//   var elem = document.querySelector("#my-class");
//   alert(elem.getAttribute("class"));
// }
// function func2() {
//   var elem = document.querySelector("#my-class");
//   elem.removeAttribute("class");
// }

// function func() {
//   var elem = document.querySelector("#my-class");
//   alert(elem.getAttribute("class"));
// }
// function func2() {
//   var elem = document.querySelector("#my-class");
//   elem.setAttribute("class", "new-class");
//   alert("Класс измменен, нажмите на 1 кнопку для првоерки");
// }

// function func() {
//   var elem = document.getElementById("input1");
//   var elemTwo = document.getElementById("p1");
//   var Value1 = elem.value;
//   elemTwo.innerHTML = elem.value;

// document.getElementById("p1").innerHTML =
//   document.getElementById("input1").value;
// }

// function func() {
//   var links = document.getElementsByTagName("a");
//   for (var i = 0; i < links.length; i++) {
//     links[i].innerHTML += "(" + links[i].getAttribute("href") + ")";
//   }
// }

// function func() {
//   var elem = document.getElementById("p1");
//   elem.innerHTML = "Привет, мир!";
//   elem.setAttribute("class", "my-class");
//   var elemTwo = document.getElementById("input1");
//   elemTwo.value = "О на меня нельзя нажать";
//   elemTwo.disabled = true;
// }

// function func() {
//   var elem = document.getElementsByClassName("p1");
//   for (var i = 0; i < elem.length; i++) {
//     elem[i].innerHTML = i + 1;
//   }
// }

function func() {
  var elem = document.getElementsByClassName("p1");

  for (var i = 0; i < elem.length; i++) {
    elem[i].innerHTML = i + 1 + "." + elem[i].innerHTML;
  }
}
