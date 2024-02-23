const quotGenerator = () => {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("quote").innerText = data.content;
      document.getElementById("author").innerText = data.author;
    });
};

document.querySelector(".btn").addEventListener("click", quotGenerator);
