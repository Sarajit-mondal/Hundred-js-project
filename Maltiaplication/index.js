const btnEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const worngEl = document.getElementById("worng");
const inputEl = document.getElementById("input");
const h1El = document.getElementById("miltiply");
const ansEl = document.getElementById("ans");

let score = JSON.parse(localStorage.getItem("score"));
let worng = JSON.parse(localStorage.getItem("worng"));
let num1, num2;

num1 = Math.floor(Math.random() * 10 + 1);
num2 = Math.floor(Math.random() * 10 + 1);

let ans = num1 * num2;
ansEl.innerText = JSON.parse(localStorage.getItem("answers"));
worngEl.innerText = worng;
scoreEl.innerText = score;

miltiply(num1, num2);

btnEl.addEventListener("submit", () => {
  let answer = +inputEl.value;
  if (answer != "") {
    if (ans == answer) {
      score++;
      updateLocalStore();
    } else {
      worng++;
      updateLocalStore();
    }

    randomValue();
  }

  inputEl.value = "";
});

function miltiply(num1, num2) {
  h1El.innerText = `What is  ${num1}  miltiply by  ${num2}`;
}

function updateLocalStore() {
  localStorage.setItem("score", JSON.stringify(score));
  localStorage.setItem("worng", JSON.stringify(worng));
  localStorage.setItem("answers", JSON.stringify(ans));
}
