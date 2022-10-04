"use strict";

function buttonClicked() {
    const userDate = document.getElementById("userDate");
    let someDate = new Date(userDate.value); // or just userDate.value
    const outputField = document.getElementById("outputField")
    outputField.value = someDate.toString(); // convert the string to date
} 
function init() {
    const btn = document.getElementById("btn");
    btn.onclick = buttonClicked;
}

window.onload = init;