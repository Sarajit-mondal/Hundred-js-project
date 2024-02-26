const leftEl = document.getElementById("leftside");
const rightEl = document.getElementById("rightside");
const inputRight = document.getElementById("rightValue");

async function getCurrencyData() {
  try {
    await fetch(
      `https://api.currencyapi.com/v3/latest?apikey=cur_live_okBLqKYnLZ5C0kYwG99ohmRvvKG26YaxZUSLIf6k`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const contrysData = data.data;

        let name = [];
        for (let i in contrysData) {
          name.push(i);
        }

        setData(contrysData, name);
      });
  } catch (error) {
    console.error(error);
  }
}

// set and calculation currency
const setData = (contrysData, name) => {
  creatElement(name);
  // calculateCurrency(contrysData);
};

// create option
const creatElement = (name) => {
  name.map((contryName) => {
    const option = document.createElement("option");
    option.value = contryName;
    option.innerText = contryName;
    leftEl.appendChild(option);
  });
};

// claculation currency
const calculateCurrency = (contrysData) => {
  const rightName = rightEl.value;
  const value = contrysData[rightName].value;
  const rightInputValue = inputRight.value;
  inputRight.value = value;

  console.log(value);
};

rightEl.addEventListener("click", () => {
  getCurrencyData();
});

getCurrencyData();
