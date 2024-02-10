const imageContainer = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imageMake();
});
imageMake();

function imageMake() {
  for (let i = 0; i < 30; i++) {
    const random1 = Math.ceil(Math.random() * 100);

    const img = document.createElement("img");
    img.src = `https://picsum.photos/id/${random1}/300`;
    imageContainer.appendChild(img);
  }
}
