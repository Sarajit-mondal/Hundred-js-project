const starEl = document.querySelectorAll(".fa-regular");

const progreesBar = document.getElementById("progrees-bar");
const stepWidth = 240 / starEl.length;

starEl.forEach((star, index) => {
  star.addEventListener("click", () => {
    const value = index + 1;

    progreesBar.style.width = `${stepWidth * value}px`;

    runingProgreesBar(value, index);
  });
});

function runingProgreesBar(value, preIndex) {
  starEl.forEach((element, curentIndex) => {
    if (curentIndex <= preIndex) {
      element.classList.add("fa-solid", "text-red-500");
    } else {
      element.classList.remove("fa-solid", "text-red-500");
    }
  });
}
