"use strict";
function refresh() {
    window.location.reload("Refresh")
}
function buttonClicked() {
    const userDate = document.getElementById("userDate");
    let someDate = new Date(userDate.value);
    const outputField = document.getElementById("outputField")
    outputField.value = someDate.toString();
} 
function init() {
    const btn = document.getElementById("btn");
    btn.onclick = buttonClicked;
}

window.onload = init;