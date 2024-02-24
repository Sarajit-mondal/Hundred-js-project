const articlesEL = document.querySelector("article");
const inputValue = document.querySelector("input");
const btnEL = document.querySelector("button");
let count = 0;

const findNews = async (searchValue = "coding") => {
  const apiKey = "42a2baed4d81480691e122dcb4426540";
  const apiUrl = `https://newsapi.org/v2/everything?q=${searchValue}&pageSize=10&sortBy=popularity&apiKey=${apiKey}`;
  try {
    await fetch(apiUrl)
      .then((response) => response.json())
      .then((articlesData) => {
        console.log(articlesData.articles);
        if (count > 0) {
          articlesEL.innerHTML = "";
        }
        setNewsData(articlesData.articles);
      });
  } catch (error) {
    console.log(error.message);
    alert("data is not found");
  }
};

const setNewsData = (articles) => {
  articles.map((data) => {
    const { title, author, description, url, urlToImage, publishedAt } = data;

    // element create
    const div = document.createElement("div");
    articlesEL.appendChild(div);
    const img = document.createElement("img");
    img.src = urlToImage;
    div.appendChild(img);
    const containDiv = document.createElement("div");
    containDiv.classList.add("px-2", "[&>h1]:text-xl", "[&>h1]:font-bold");
    div.appendChild(containDiv);
    const h1Title = document.createElement("h1");
    // title condiction
    const titleText = title.length > 30 ? title.slice(0, 30) + "...." : title;
    h1Title.innerText = titleText;
    containDiv.appendChild(h1Title);
    const pAuthor = document.createElement("p");
    pAuthor.innerText = `writer : ${author}`;
    containDiv.appendChild(pAuthor);
    const small = document.createElement("small");
    small.innerText = publishedAt;
    containDiv.appendChild(small);
    const descriptionP = document.createElement("p");
    descriptionP.classList.add("border-t-2", "border-gray-400", "mt-2");
    const descriptionText =
      description.length > 50 ? title.slice(0, 50) + "...." : description;
    descriptionP.innerText = descriptionText;
    containDiv.appendChild(descriptionP);

    div.addEventListener("click", () => {
      window.open(url, "_blank");
    });
  });
};

btnEL.addEventListener("click", () => {
  const searchText = inputValue.value.trim();
  if (inputValue.value !== "") {
    findNews(searchText);
    count++;
  }

  inputValue.value = "";
});
findNews("coding");
