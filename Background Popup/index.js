const btnEl = document.querySelector(".btn");
const closeEL = document.querySelector("span");
const popupContainer = document.querySelector(".popup");
const topContainer = document.querySelector(".top-container");

btnEl.addEventListener("click", () => {
  popupContainer.classList.toggle("-translate-y-2/4");
  popupContainer.style.opacity = "1";
  topContainer.style.webkitFilter = "blur(4px)";
});
closeEL.addEventListener("click", () => {
  popupContainer.classList.toggle("-translate-y-2/4");
  popupContainer.style.opacity = ".1";
  topContainer.style.webkitFilter = "blur(0px)";
});
