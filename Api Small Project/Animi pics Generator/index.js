const newCat = () => {
  try {
    document.getElementById("new-cat").innerText = "Lodding...";
    document.getElementById("new-cat").disabled = true;

    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        catData(data);
      });
  } catch (error) {
    console.log(error);
  }
};

const catData = (data) => {
  console.log(data);
  document.getElementById("img-container").classList.remove("hidden");
  document.querySelector("img").src = data[0].url;
  document.getElementById("new-cat").innerText = "new Cat";
  document.getElementById("new-cat").disabled = false;
};

document.getElementById("new-cat").addEventListener("click", newCat);
