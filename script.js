// function start() {
//   window.setInterval(timer, 1000);
// }

// function timer() {
//   var elem = document.getElementById("test");
//   elem.value = parseInt(elem.value) + 1;
// }

// function test() {
//   timerId = window.setInterval(timer, 1000);
//   alert(timerId);
// }
// function timer() {}

// function start() {
//   window.timerId = window.setInterval(timer, 1000);
// }

// function stop() {
//   window.clearInterval(window.timerId);
// }

// function timer() {
//   var elem = document.getElementById("test");
//   elem.value = parseInt(elem.value) + 1;
// }

// function start() {
//   window.setTimeout(func, 3000);
// }
// function func() {
//   alert("!");
// }

// function timer() {
//   var elem = document.getElementById("test");
//   elem.value = parseInt(elem.value) + 1;
//   window.setTimeout(timer, 1000);
// }

// function timer() {
//   var elem = document.getElementById("test");
//   elem.value = parseInt(elem.value) + 1;
//   if (elem.value < 10) {
//     window.setTimeout(timer, 1000);
//   }
// }

// var texts = ["text1", "text2", "text3"];
// var elem = document.querySelector("#elem");
// var prev = document.querySelector("#prev");
// var next = document.querySelector("#next");
// слайдер текста с кнопками
// var i = 0;
// elem.innerHTML = texts[i];

// next.addEventListener("click", function () {
//   i++;
//   if (i == texts.length) {
//     i = 0;
//   }
//   elem.innerHTML = texts[i];
// });
// prev.addEventListener("click", function () {
//   i--;
//   if (i == -1) {
//     i = texts.length - 1;
//   }
//   elem.innerHTML = texts[i];
// });
//
// Таймер - каждую секунду
// var i = 1;
// elem.innerHTML = texts[0];
// window.setInterval(function () {
//   elem.innerHTML = texts[i];
//   i++;
//   if (i == texts.length) {
//     i = 0;
//   }
// }, 1000);

// var images = ["1.jpg", "2.jpg", "1.jpg", "2.jpg"];
// var slider = document.querySelector("#slider");
// var img = slider.querySelector("img");
// var i = 1;
// img.src = images[0];
// window.setInterval(function () {
//   img.src = images[i];
//   i++;
//   if (i == images.length) {
//     i = 0;
//   }
// }, 1000);

// function start() {
//   window.timerId = window.setInterval(timer, 1000);
// }
// function stop() {
//   window.clearInterval(window.timerId);
// }
// function timer() {
//   var elem = document.getElementById("test");
//   elem.value = parseInt(elem.value) + 1;
// }

// время на сайте
// function go() {
//   window.timerid = window.setInterval(timer, 1000);
// }
// function timer() {
//   var clock = document.getElementById("clock");
//   var data = new Date();
//   clock.innerHTML =
//     addZero(data.getHours()) +
//     ":" +
//     addZero(data.getMinutes()) +
//     ":" +
//     addZero(data.getSeconds());
// }
// function addZero(num) {
//   if (num <= 9) {
//     num = "0" + num;
//   }
//   return num;
// }

// function start() {
//   window.timerId = window.setInterval(timer, 1000);
// }
// function timer() {
//   var elem = document.getElementById("test");
//   var but = document.getElementById("but");
//   elem.value = parseInt(elem.value) - 1;
//   if (elem.value == 0) {
//     window.clearInterval(window.timerId);
//     but.value = "Обратный отсчет завершен";
//   }
// }

// var images = ["1.jpg", "2.jpg", "1.jpg", "2.jpg"];
// var slider = document.querySelector(".slider");
// var img = slider.querySelector("img");
// var i = 1;
// img.src = images[0];
// window.setInterval(function () {
//   img.src = images[i];
//   i++;
//   if (i == images.length) {
//     i = 0;
//   }
// }, 1000);

var text = document.querySelector("#text");
// timer();
setInterval(timer, 1000);
function timer() {
  var now = new Date();
  var target = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0
  );
  var diff = Math.ceil((target - now) / 1000);
  var hours = Math.floor(diff / (60 * 60));
  var diff = diff % (60 * 60);
  var minutes = Math.floor(diff / 60);
  var diff = diff % 60;
  var seconds = diff;
  text.innerHTML =
    addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
}
function addZero(num) {
  if (num <= 9) {
    num = "0" + num;
  }
  return num;
}
