let titleCount = 1;
let totalPrice = 0;

// Discount
document.getElementById("apply-btn").addEventListener("click", () => {
  const inputText = document.getElementById("input-field");
  const inputValue = inputText.value.split(" ").join("").toUpperCase();
  if (totalPrice >= 200) {
    if (inputValue === "SELL200") {
      const discount = (totalPrice * 0.2).toFixed(2);
      document.getElementById("discountPrice").innerText = discount;

      document.getElementById("total").innerText = totalPrice - discount;
    } else {
      alert("Invaild Promo Code Please try agian");
    }
  } else {
    alert("Please add another products");
  }
  inputText.value = "";
});

// products list
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    getTitleAndPrice(card);
  });
});

// get products title and price
function getTitleAndPrice(card) {
  const title = card.querySelector("h3").innerText;
  const priceText = card.querySelector("span").innerText.split(" ");
  const price = parseFloat(priceText[1]);
  //   set title and price
  setTitleAndPrice(title, price);
}

// set title and price
function setTitleAndPrice(title, price) {
  const titleCoutainer = document.getElementById("title-container");
  const pEl = document.createElement("p");
  pEl.innerText = titleCount + " : " + title + "   $ " + price;
  titleCoutainer.appendChild(pEl);
  titleCount++;
  totalPrice += price;

  //   set totalPrice
  document.getElementById("totalPrice").innerText = totalPrice;
}
