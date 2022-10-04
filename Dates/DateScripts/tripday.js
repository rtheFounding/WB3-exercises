"use strict";
function buttonClicked() {
    const userDate = document.getElementById("userDate");
    let currentDate =  new Date();
    let travelDate = new Date(userDate.value);
    let msec_per_day = 1000 * 60 * 60 * 24;
    let elapsedMilliseconds = travelDate.getTime() - currentDate.getTime();
    let dayDiff = elapsedMilliseconds / msec_per_day;
    let numDays = Math.round(dayDiff);
    const outputField = document.getElementById("outputField")
    outputField.value = "Your trip is in " + numDays + " days!!!";
} 
function init() {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.onclick = buttonClicked;
}

window.onload = init;