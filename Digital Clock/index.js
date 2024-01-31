const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const amPm = document.getElementById("ampm");

timeStar();

function timeStar() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let AmPm = "AM";

  let h = hour > 12 ? hour - 12 : hour;
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;
  AmPm = hour > 12 ? "PM" : "AM";

  amPm.innerText = AmPm;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;

  setTimeout(timeStar, 1000);
}
