const emojiEl = document.querySelector(".emoji");
const starEl = document.querySelectorAll(".fa-star");

let posX = 48;
let emojiColor = ["red", "yellow", "purple", "orange", "green"];

starEl.forEach((star, index) => {
  star.addEventListener("click", (event) => {
    updateRatting(index);
    emojiEl.style.transform = `translateX(-${posX * index}px)`;
    emojiEl.style.color = emojiColor[index];
  });
});

function updateRatting(index) {
  starEl.forEach((star, inx) => {
    if (inx <= index) {
      star.classList.add("text-yellow-500");
    } else {
      star.classList.remove("text-yellow-500");
    }
  });
}
