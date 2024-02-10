const bodyEl = document.querySelector("body");
const textEl = document.querySelector("h1");
const vowel = ["a", "i", "o", "u", "e"];

const text = ["youTuber", "Developer", "Instructory"];
let textCount = 0;
let itemCount = 0;

textEffect();
function textEffect() {
  textCount++;
  const firstLetter = text[itemCount].charAt(0).toLocaleLowerCase();
  let aAn = vowel.includes(firstLetter) === true ? "an " : "a ";
  textEl.innerText =
    "I am " + aAn + text[itemCount].slice(text[itemCount], textCount);

  if (text[itemCount].length === textCount) {
    textCount = 0;
    itemCount++;
  }
  if (text.length === itemCount) {
    itemCount = 0;
  }

  setTimeout(textEffect, 300);
}
