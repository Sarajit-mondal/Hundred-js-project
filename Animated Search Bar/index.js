const searchEl = document.querySelector(".search");
const searchIcon = document.querySelector(".fa-solid");
const inputEl = searchEl.children[1];
const imgEl = searchEl.children[2];
console.log(imgEl);

searchIcon.addEventListener("click", () => {
  inputEl.classList.toggle("w-full");
  imgEl.classList.toggle("w-7");
  searchEl.classList.toggle("px-4");
});
