const homeBtnEl = document.querySelector(".btn");
const kbdEl = document.querySelectorAll(".kbd");

homeBtnEl.addEventListener("click", () => {
  removeHidden("home");
  addHidden("play");
  playGame();
});

// window keyevent listener
document.addEventListener("keyup", (event) => {
  if (document.getElementById("home").classList.contains("hidden") === true) {
    const keybord = event.key.toLocaleUpperCase();
    console.log(keybord);
    if (keybord === "ESCAPE") {
      const finalScore = updateScoreAndLife("score");
      document.getElementById("finalscore").innerText = finalScore;
      addHidden("score-section");
      removeHidden("play");
    }
    setScoreAndLife(keybord);
  }
});

// play agian button
document.getElementById("play-agian").addEventListener("click", () => {
  document.getElementById("score").innerText = "0";
  document.getElementById("life").innerText = "5";
  addHidden("play");
  removeHidden("score-section");
});

// set score and life
function setScoreAndLife(keybord) {
  const currentAlpha = document.getElementById("alpha").innerText;

  if (currentAlpha === keybord) {
    const currentScore = updateScoreAndLife("score");
    const value = currentScore + 1;
    document.getElementById("score").innerText = value;
    playGame();
  } else {
    const currentLife = updateScoreAndLife("life");
    const life = currentLife - 1;
    document.getElementById("life").innerText = life;
    if (life <= 0) {
      const finalScore = updateScoreAndLife("score");
      document.getElementById("finalscore").innerText = finalScore;
      addHidden("score-section");
      removeHidden("play");
    }
  }
}
function updateScoreAndLife(element) {
  const innerText = document.getElementById(element).innerText;
  const currentvalue = parseInt(innerText);
  return currentvalue;
}

// random key and artbord set
function playGame() {
  const alphaString = "abcdefghijklmnopqrstuvwxyz";
  const alphaArray = alphaString.split("");

  const random = Math.round(Math.random() * alphaArray.length);
  const randomAlpha = alphaArray[random];
  const upperCase = randomAlpha.toLocaleUpperCase();
  document.getElementById("alpha").innerText = upperCase;

  updateToKeyboardMatch(alphaArray[random]);

  return alphaArray[random];
}

// keybord background color set and check match
function updateToKeyboardMatch(randomeKey) {
  kbdEl.forEach((key) => {
    const keyInnerText = key.innerText;

    if (keyInnerText === randomeKey) {
      key.style.backgroundColor = "orange";
    } else {
      key.style.backgroundColor = "";
    }
  });
}

function removeHidden(element) {
  document.getElementById(element).classList.add("hidden");
}
function addHidden(element) {
  document.getElementById(element).classList.remove("hidden");
}
