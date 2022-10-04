const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday",
 "Friday", "Saturday", "Sunday"];

const months = ["January", "February", "March", "April",
 "May", "June", "July", "August", "September",
 "October", "November", "December"];

let currentDateATime = new Date();
let currentDate = currentDateATime.getDate();
let currentMonth = months[currentDateATime.getMonth()];
let currentYear = currentDateATime.getFullYear();
let currentWeekday = weekdays[currentDateATime.getDay()]

console.log(+ currentDate + "-" + currentMonth + "-" + currentYear + "(" + currentWeekday + ")")

