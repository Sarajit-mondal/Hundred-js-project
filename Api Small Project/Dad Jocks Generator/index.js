const btnEl = document.querySelector(".btn");

const jockGenerator = async () => {
  await fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .then((data) => {
      jockSet(data);
    });
};

// jock set
const jockSet = (data) => {
  document.getElementById("jocks").innerText = data.joke;
};

btnEl.addEventListener("click", jockGenerator);
