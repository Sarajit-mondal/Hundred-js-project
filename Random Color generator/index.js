const colorContainer = document.querySelector(".color-container");

const colorV =
  "abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890";
let colorValue = colorV.split("");

for (let i = 0; i < 100; i++) {
  const ranColor = randomeColor();
  const newdiv = document.createElement("div");
  colorContainer.appendChild(newdiv);
  newdiv.innerText = ranColor;
  newdiv.style.backgroundColor = `${ranColor}`;
}

function randomeColor() {
  let generatColor = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * colorValue.length);
    generatColor += colorValue[random];
  }

  return generatColor;
}
