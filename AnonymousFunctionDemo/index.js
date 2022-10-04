"use strict";

window.onload = function() {
 const helloBtn = document.getElementById("helloBtn");
 helloBtn.onclick = sayHello;
}

function sayHello() {
 alert("Hello!");
}