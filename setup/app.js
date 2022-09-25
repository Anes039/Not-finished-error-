const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2022,10,5,12,45,0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;


const futureTime = futureDate.getTime()
console.log(futureTime)

function getRemainingTime(){
  const today = new Date().getTime();
  console.log(today)
  const t = futureTime - today;
  console.log(t)
// 1s = 1000ms
// 1min = 60s
// 1h = 60min
// 1d = 24h


//calculate ms 

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

//calculate
let days = t/oneDay;
days = Math.floor(days);
let hours = Math.floor((t % hours) / oneDay);
let minutes = Math.floor((t % min)/ oneHour);
let seconds = Math.floor((t % seconds) / 1000)

}

// set value Array
const value =[days,hours,minutes,seconds]

items.forEach(function(item,index){
  item.innerHTML = item[index]
})
