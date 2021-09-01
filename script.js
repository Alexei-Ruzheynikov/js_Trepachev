// let elem = document.querySelector("#elem");
// let length = elem.classList.length;
// console.log(length);

// let elem = document.querySelector("#elem");
// let classNames = elem.classList;
// for (let className of classNames) {
//   document.write(className + "<br>");
// }

// используем += чтобы свойства css которые уже есть не перезатирались
// let elem = document.querySelector("#elem");
// elem.style.cssText += "color: green; font-size: 40px";
//выведет название тега в верхнем регистре
// let elem = document.getElementById("elem");
// console.log(elem.tagName);
//выведет в нижнем регистре
// console.log(elem.tagName.toLowerCase());

// let parent = document.querySelector("#parent");
// let p = document.createElement("p");
// p.innerHTML = "!";
// parent.appendChild(p);

// let parent = document.querySelector("#parent");
// for (let i = 1; i <= 9; i++) {
//   let li = document.createElement("li");
//   li.innerHTML = i;
//   parent.appendChild(li);
// }

// let parent = document.querySelector("#parent");
// for (let i = 1; i <= 9; i++) {
//   let li = document.createElement("li");
//   li.innerHTML = i;
//   li.addEventListener("click", function () {
//     alert(this.innerHTML);
//   });
//   parent.appendChild(li);
// }

// let parent = document.querySelector("#parent");
// let before = document.querySelector("#before");
// let p = document.createElement("p");
// p.innerHTML = "!";
// parent.insertBefore(p, before);

// let parent = document.querySelector("#parent");
// let elems = parent.children;
// for (let elem of elems) {
//   console.log(elem.innerHTML);
// }

// let parent = document.querySelector("#parent");
// let text = parent.firstElementChild.innerHTML;
// console.log(text);

// let parent = document.querySelector("#parent");
// let text = parent.lastElementChild.innerHTML;
// console.log(text);

// let elem = document.querySelector("#elem");
// let text = elem.previousElementSibling.innerHTML;
// console.log(text);

// let elem = document.querySelector("#elem");
// let text = elem.nextElementSibling.innerHTML;
// console.log(text);

// let elem = document.querySelector("#elem");
// let id = elem.parentElement.id;
// console.log(id);

// let elem = document.querySelector("#elem");
// let id = elem.parentElement.id;
// console.log(id);

// let parent = document.getElementById("parent");
// let elem = parent.querySelector(".elem");
// let clone = elem.cloneNode(true);
// parent.appendChild(clone);

// let parent = document.getElementById("parent");
// let elem = parent.querySelector(".elem");
// let clone = elem.cloneNode(true);
// clone.children[0].innerHTML = "Новое содержимое первого абзаца";
// clone.children[1].innerHTML = "Новое содержимое второго абзаца";
// parent.appendChild(clone);

// let parent = document.querySelector("#parent");
// let elem = document.querySelector("#elem");
// parent.removeChild(elem);

// let elem = document.querySelector("#elem");
// elem.parentElement.removeChild(elem);

// let elem = document.querySelector("#child");
// let parent = elem.closest(".www");
// console.log(parent.id);

// let elem = document.querySelector("#child");
// let parent = elem.closest(".www");
// console.log(parent.id);

// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");
// let contains = parent.contains(child);
// console.log(contains);

// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");
// let contains = parent.contains(child);
// console.log(contains);

// let parent = document.querySelector("#parent");
// let contains = parent.contains(parent);
// console.log(contains);

// let elem = document.querySelector("#elem");
// console.log(elem.matches("p.www"));

// Задача 1
// let elem = document.querySelector("#elem");
// elem.classList.add("www");

// Задача 2
// let elem = document.querySelector("#elem");
// elem.classList.remove("www");

// Задача 3
// let elem = document.querySelector("#elem");
// let contains = elem.classList.contains("www");
// console.log(contains);

// Задача 4
// let elem = document.querySelector("#elem");
// let contains = elem.classList.contains("www");
// if (contains) {
//   elem.classList.remove("www");
// } else {
//   elem.classList.add("www");
// }

// Задача 5
// let elem = document.querySelector("#elem");
// let length = elem.classList.length;
// document.write(length);

// Задача 6
// let elem = document.querySelector("#elem");
// let classNames = elem.classList;
// for (let className of classNames) {
//   document.write(className + "<br>");
// }

// Задача 7
// let elem = document.querySelector("#elem");
// elem.style.cssText = "color: red; font-size: 40px;";

// Задача 8
// let elem = document.querySelector("#elem");
// document.write(elem.tagName);

// Задача 9
// let elem = document.querySelector("#elem");
// document.write(elem.tagName.toLowerCase());

// Задача 10
// let elems = document.getElementsByClassName("elem");
// for (let i = 0; i < elems.length; i++) {
//   elems[i].innerHTML += "" + elems[i].tagName.toLowerCase();
// }

// Задача 11
// let list = document.querySelector("#list");
// let li = document.createElement("li");
// li.innerHTML = "test";
// list.appendChild(li);

// Задача 12
// let ul = document.getElementById("ul");
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   let li = document.createElement("li");
//   li.innerHTML = arr[i];
//   ul.appendChild(li);
// }

// Задача 13
// let ul = document.getElementById("ul");
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   let li = document.createElement("li");
//   li.innerHTML = arr[i];
//   li.addEventListener("click", func);
//   ul.appendChild(li);
// }
// function func() {
//   alert(this.innerHTML);
// }

// Задача 14
// let parent = document.querySelector("#parent");
// let before = document.querySelector("#before");
// let li = document.createElement("li");
// li.innerHTML = "!";
// parent.insertBefore(li, before);

// Задача 15
// let elem = document.querySelector("#elem");
// elem.insertAdjacentHTML("beforeBegin", "<span>!!!</span>");

// Задача 16
// let elem = document.querySelector("#elem");
// elem.insertAdjacentHTML("afterEnd", "<span>!!!</span>");

// Задача 17
// let elem = document.querySelector("#elem");
// elem.insertAdjacentHTML("afterBegin", "<span>!!!</span>");

// Задача 18
// let elem = document.querySelector("#elem");
// elem.insertAdjacentHTML("beforeEnd", "<span>!!</span>");

// Задача 19
// let elem = document.querySelector("#elem");
// let name1 = elem.firstElementChild;
// name1.style.cssText += "color: red;";

// Задача 20
// let elem = document.querySelector("#elem");
// let name1 = elem.lastElementChild;
// name1.style.cssText += "color:red;";

// Задача 21
// let parent = document.querySelector("#elem");
// let elems = parent.children;
// for (let elem of elems) {
//   elem.innerHTML = elem.innerHTML + "!";
// }

// Задача 22
// let elem = document.querySelector("#elem");
// var prev = elem.previousElementSibling;
// prev.innerHTML += "!";

// Задача 23
// let elem = document.querySelector("#elem");
// var next = elem.nextElementSibling;
// next.innerHTML += "!";

// Задача 24
// let elem = document.querySelector("#elem");
// var nextNext = elem.nextElementSibling.nextElementSibling;
// nextNext.innerHTML += "!";

// Задача 25
// let elem = document.querySelector("#elem");
// let id = elem.parentElement;
// id.style.cssText = "color: red";

// Задача 26
// let elem = document.querySelector("#elem");
// let id = elem.parentElement.parentElement;
// id.style.cssText = "color: red";

// Задача 27
// var parent = document.getElementById("parent");
// var child = document.getElementById("child");
// var button = document.querySelector("button");

// button.addEventListener("click", func);
// function func() {
//   parent.removeChild(child);
// }

// Задача 28
// var parent = document.querySelector("ol");
// var button = document.querySelector("button");
// var last = parent.lastElementChild;
// button.addEventListener("click", func);
// function func() {
//   parent.removeChild(last);
// }

// Задача 30
// var parent = document.querySelector("ol");
// var li = parent.querySelectorAll("li");
// for (let i = 0; i < li.length; i++) {
//   li[i].addEventListener("click", selfDestruction);
// }
// function selfDestruction() {
//   parent.removeChild(this);
// }

// Задача 31
// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// btn.addEventListener("click", addinput);
// function addinput() {
//   let clone = inp.cloneNode(true);
//   //   let newInp = document.createElement("input");
//   document.body.appendChild(clone);
// }

// Задача 32
// let arr = [1, 2, 3, 4, 5, 6];
// let ul = document.createElement("ul");
// for (let i = 0; i < arr.length; i++) {
//   let li = document.createElement("li");
//   li.innerHTML = arr[i];
//   ul.appendChild(li);
// }
// document.body.appendChild(ul);

// Задача 33
// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// btn.addEventListener("click", addinput);
// function addinput() {
//   let clone = inp.cloneNode(false);
//   let clone2 = p.cloneNode(true);
//   document.body.appendChild(clone);
//   document.body.appendChild(clone2);
// }

// Задача 34
// let input = document.querySelector("input");
// input.addEventListener("blur", addinput);
// function addinput() {
//   let digitsArr = this.value.split("");
//   for (let i = 0; i < digitsArr.length; i++) {
//     let newInp = document.createElement("input");
//     newInp.value = digitsArr[i];
//     document.body.appendChild(newInp);
//   }
// }

// Задача 35
// let parent = document.querySelector("div");
// let child = document.querySelector("input");
// child.addEventListener("click", func);
// function func() {
//   this.parentNode.style.display = "none";
// }
