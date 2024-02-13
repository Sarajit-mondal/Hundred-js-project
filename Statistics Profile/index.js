const counterEl = document.querySelectorAll(".counter");

counterEl.forEach((element) => {
  element.innerText = 0;

  profileCounter();
  function profileCounter() {
    let elementValue = +element.innerText;

    const dataCile = element.getAttribute("data-cile");
    elementValue += Math.ceil(dataCile / 12);

    if (elementValue < dataCile) {
      element.innerText = elementValue;
      setTimeout(profileCounter, 50);
    } else {
      element.innerText = dataCile;
    }
  }
});
