const drumCountainer = document.querySelector(".drum-container");
const drumKit = document.querySelectorAll(".drum-container div");

const items = ["crash", "kick", "snare", "tom"];

items.forEach((item) => {
  creactKits(item);
});

function creactKits(item) {
  const div = document.createElement("div");
  drumCountainer.appendChild(div);
  div.innerText = item;
  div.style.backgroundImage = `url('./images/${item}.png')`;

  div.addEventListener("click", () => {
    addAudio(div, item);
  });
  window.addEventListener("keypress", (event) => {
    const letter = item.at(0).split("");

    const key = event.key.toLowerCase();
    // console.log(arrLetter);
    if (letter.includes(key)) {
      addAudio(div, item);
    }
  });
}

function addAudio(div, item) {
  const audio = new Audio(`./sounds/${item}.mp3`);
  audio.play();

  div.style.scale = "108%";

  setTimeout(() => {
    div.style.scale = "100%";
  }, 100);
}
