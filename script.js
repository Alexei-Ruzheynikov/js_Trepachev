// function func() {
//   alert("!");
// }

// var elem = document.getElementById("test");
// elem.onclick = func;
// function func() {
//   alert("!");
// }
// alert(func());
// alert(func);

// var elems = document.getElementsByTagName("input");
// for (var i = 0; i < elems.length; i++) {
//   elems[i].onclick = func;
// }
// function func() {
//   alert("!");
// }

// var elems = document.getElementsByTagName("input");
// for (var i = 0; i < elems.length; i++) {
//   elems[i].onclick = func;
// }
// function func() {
//   alert(this.value);
// }

// function func(elem) {
//   alert(elem.value);
// }

// var elem = document.getElementById("test");
// elem.addEventListener("click", func1);
// elem.addEventListener("click", func2);

// function func1() {
//   alert("1");
// }

// function func2() {
//   alert("2");
// }

// var elem1 = document.getElementById("test1");
// elem1.addEventListener("click", func);
// var elem2 = document.getElementById("test2");
// elem2.addEventListener("click", func);

// function func() {
//   alert(this.value);
// }

// var elems = document.getElementsByTagName("input");
// for (var i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("click", func);
// }
// function func() {
//   alert(this.value);
// }

// var elem = document.getElementById("test");
// elem.addEventListener("click", func1);
// elem.addEventListener("click", func2);
// elem.addEventListener("click", func3);

// elem.removeEventListener("click", func1);
// elem.removeEventListener("click", func2);

// function func1() {
//   alert("1");
//   this.removeEventListener("click", func1);
// }
// function func2() {
//   alert("2");
//   this.removeEventListener("click", func2);
// }
// function func3() {
//   alert("3");
// }

// var elems = document.getElementsByTagName("input");
// for (var i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("click", func);
// }
// function func() {
//   alert(this.value);
//   this.removeEventListener("click", func);
// }

//Задача 1
// var elems = document.getElementsByTagName("img");
// for (var i = 0; i < elems.length; i++) {
//   elems[i].onclick = func;
// }
// function func() {
//   alert(this.getAttribute("src"));
// }

// Задача 2
// var elems = document.getElementsByTagName("a");
// for (var i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("mouseover", func);
// }
// function func() {
//   this.title = this.innerHTML;
// }

// Задача 3
// var elems = document.getElementsByTagName("a");
// for (var i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("mouseover", func);
// }
// function func() {
//   this.innerHTML = this.innerHTML + " (" + this.href + ")";
// }

// Задача 4
// var elems = document.getElementsByTagName("a");
// for (var i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("mouseover", func);
// }
// function func() {
//   this.innerHTML = this.innerHTML + "(" + this.href + ")";
//   this.removeEventListener("mouseover", func);
// }

// Задача 5
// var elems = document.getElementsByTagName("input");
// var parag = document.getElementById("test");
// for (var i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("blur", func);
// }
// function func() {
//   parag.innerHTML = this.value;
// }

// Задача 6
// var elems = document.getElementsByTagName("input");
// for (var i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("click", func);
// }
// function func() {
//   alert(this.value);
//   this.removeEventListener("click", func);
// }

// Задача 7
// var elems = document.getElementsByTagName("p");
// for (var i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("click", func);
// }
// function func() {
//   this.innerHTML = this.innerHTML * this.innerHTML;
// }

// Задача 8
// var elems = document.getElementsByTagName("input");
// for (var i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("blur", func);
// }
// function func() {
//   var correctLength = this.dataset.length;
//   var inputDataLength = this.value.length;
//   if (correctLength == inputDataLength) {
//     this.style.borderColor = "green";
//   } else {
//     this.style.borderColor = "red";
//   }
// }

// Задача 9
var elems = document.getElementsByTagName("div");
for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", setRed);
}
function setRed() {
  this.style.background = "red";
  this.removeEventListener("click", setRed);
  this.addEventListener("click", setGreen);
}
function setGreen() {
  this.style.background = "green";
  this.removeEventListener("click", setGreen);
  this.addEventListener("click", setRed);
}
