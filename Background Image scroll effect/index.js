const imageEl = document.querySelector(".image-container");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  imageEl.style.opacity = 1 - window.pageYOffset / 700;
  imageEl.style.backgroundSize = 160 - window.pageYOffset / 9 + "%";
}
