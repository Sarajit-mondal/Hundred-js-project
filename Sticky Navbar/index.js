const navEl = document.querySelector("nav");
const articleEl = document.querySelector("article");

const articletop = articleEl.offsetTop;
console.log(navEl.offsetHeight);

window.addEventListener("scroll", () => {
  if (window.scrollY > articletop - 72) {
    navEl.style.backgroundColor = "red";
    navEl.style.color = "white";
  } else {
    navEl.style.backgroundColor = "";
    navEl.style.color = "";
  }
});
