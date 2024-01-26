const countEl = document.querySelector(".contain span");
let counting = parseInt(localStorage.getItem("counted"));
countEl.innerText = counting;
Color();
document.querySelector(".incrace").addEventListener("click", () => {
  counting++;
  Color(counting);
  countEl.innerText = counting;
  SetlocalStorage(counting);
});
document.querySelector(".dicrace").addEventListener("click", () => {
  counting--;
  Color(counting);
  countEl.innerText = counting;
  SetlocalStorage(counting);
});

function Color(counting) {
  if (counting < 0) {
    countEl.style.color = "red";
  } else {
    countEl.style.color = "yellow";
  }
}

function SetlocalStorage(counting) {
  localStorage.setItem("counted", JSON.stringify(counting));
}
