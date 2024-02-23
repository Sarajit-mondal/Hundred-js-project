const btnEl = document.querySelector(".btn");

const jockGenerator = async () => {
  await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/winter")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

btnEl.addEventListener("click", jockGenerator);
