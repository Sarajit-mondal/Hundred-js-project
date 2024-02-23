const audioEl = document.getElementById("audio");

const findWord = async (value) => {
  await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
    .then((response) => response.json())
    .then((data) => {
      const partOfSpeech = data[0].meanings[0].partOfSpeech;
      const meanings = data[0].meanings[0].definitions[0].definition;
      const audio = data[0].phonetics[0].audio;
      document.getElementById("part-of-speech").innerText = partOfSpeech;
      document.getElementById("meanings").innerText = meanings;
      audioEl.classList.remove("hidden");
      audioEl.src = audio;
    });
};

document.querySelector(".btn").addEventListener("click", () => {
  const inputValue = document.querySelector("input").value;
  findWord(inputValue);
});
