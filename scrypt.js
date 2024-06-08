const month = document.getElementById("month-name");
const weekDay = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();
//console.log(date);

const currentMonth = date.getMonth();
month.innerText = date.toLocaleString("en", {month: "long"});

weekDay.innerText = date.toLocaleString("en", {weekday: "long"});

dayNumber.innerText =date.getDate();

year.innerText = date.getFullYear();