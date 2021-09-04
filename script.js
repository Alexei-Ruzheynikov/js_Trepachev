// var elem1 = document.getElementById("elem1");
// alert(elem1.style.width);
// var elem = document.getElementById("elem");
// alert(elem.style.width);

// var elem = document.getElementById("elem");
// var style = getComputedStyle(elem);
// alert(style.width);
// alert(style.paddingLeft);
// alert("paddingLeft: " + style.paddingLeft);
// alert("borderTopWidth: " + style.borderTopWidth);
// alert("borderTopStyle: " + style.borderTopStyle);
// alert("Width: " + style.width);

// var elem3 = document.getElementById("elem3");
// var style = getComputedStyle(elem3);
// alert("width: " + style.width);

// var elem = document.getElementById("elem");
// var style = getComputedStyle(elem);
// alert("clientTop: " + elem.clientTop);
// alert("clientLeft: " + elem.clientLeft);
// alert("offsetWidth: " + elem.offsetWidth);
// alert("offsetHeight: " + elem.offsetHeight);
// alert("clientWidth: " + elem.clientWidth);
// alert("scrollTop: " + elem.scrollTop);
// elem.scrollTop = 100;
// elem.scrollTop = elem.scrollTop + 100;
// alert("scrollHeight: " + elem.scrollHeight);

// var elem = document.getElementById("elem");
// var style = getComputedStyle(elem);
// var paddingTop = parseInt(style.paddingTop);
// var paddingBottom = parseInt(style.paddingBottom);
// elem.style.height = elem.scrollHeight - paddingTop - paddingBottom + "px";

//Практические задачи №1 и №2
// var elem = document.getElementById("elem");
// var button = document.getElementById("button");
// button.addEventListener("click", func);
// function func() {
//   alert("clientTop: " + elem.clientTop);
//   alert("clientLeft: " + elem.clientLeft);
// }

//Задача 3 и 4
// var elem = document.getElementById("elem");
// var button = document.getElementById("button");
// button.addEventListener("click", func);
// function func() {
//   alert("elem.offsetWidth: " + elem.offsetWidth);
//   alert("elem.offsetHeight: " + elem.offsetHeight);
// }

//Задача 5 и 6
// var elem = document.getElementById("elem");
// var button = document.getElementById("button");
// button.addEventListener("click", func);
// function func() {
//   alert("clientWidth: " + elem.clientWidth);
//   alert("clientHeight: " + elem.clientHeight);
// }

//Задача 7
// var elem = document.getElementById("elem");
// var button = document.getElementById("button");
// button.addEventListener("click", func);
// function func() {
//   alert(getComputedStyle(elem).height + " " + getComputedStyle(elem).width);
// }

//Задача 8, 9, 10, 11
// var elem = document.getElementById("elem");
// var button = document.getElementById("button");
// button.addEventListener("click", func);
// function func() {
//   elem.scrollTop = 200;

//   alert("На сколько прокручен сверху: " + elem.scrollTop);
//   alert("На сколько прокручен слева: " + elem.scrollLeft);
//   elem.scrollTop += 100;
// }

//Задача 12, 13, 14
// var elem = document.getElementById("elem");
// var button = document.getElementById("button");
// button.addEventListener("click", func);
// function func() {
//   alert(elem.scrollHeight);
//   alert(elem.scrollWidth);
//   elem.scrollTop = elem.scrollHeight - 100;
//   alert(elem.scrollTop);
// }

//Задача 15 и 16 - методы не рабочие
// var elem = document.getElementById("elem");
// var button = document.getElementById("button");
// button.addEventListener("click", func);
// function func() {
//   alert(pageYOffset);
//   alert(pageXOffset);
// }

//Задача 17, 18, 19, 20
// var elem = document.getElementById("elem");
// var button = document.getElementById("button");
// button.addEventListener("click", func);
// function func() {
//   window.scrollTo(300, 500);
//   window.scrollBy(0, 300);
//   window.scrollTo(0, document.body.clientHeight);
//   window.scrollBy(0, 400);

//   21 задача
//   var body = document.documentElement;
//   if (body.scrollHeight - body.scrollTop == body.clientHeight) {
//     window.scrollTo(0, 100);
//   }
// }

//Задача 22
var elem = document.getElementById("elem");
elem.addEventListener("click", func);
function func() {
  var startWidth = this.offsetWidth;
  var startHeight = this.offsetHeight;
  this.style.width = startWidth * 2 + "px";
  this.style.height = startHeight * 2 + "px";
}
