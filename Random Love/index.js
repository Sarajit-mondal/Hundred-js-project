const loveEl = document.querySelector(".love-container");

window.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const randomS = Math.ceil(Math.random() * 100);

  createSpan(xPos, yPos, randomS);
});

function createSpan(xPos, yPos, randomS) {
  const span = document.createElement("span");
  loveEl.appendChild(span);
  span.style.left = xPos + "px";
  span.style.top = yPos + "px";

  span.style.height = randomS + "px";
  span.style.width = randomS + "px";

  spanRemove(span);
}

function spanRemove(span) {
  setTimeout(() => {
    span.remove();
  }, 3000);
}
