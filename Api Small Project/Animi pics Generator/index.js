fetch("https://api.catboys.com/img")
  .then((response) => response.json())
  .then((data) => console.log(data));
