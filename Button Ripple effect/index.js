const btnEl = document.getElementById("btn");

btnEl.addEventListener("mouseover", (event) => {
  const y = event.pageY - btnEl.offsetTop;
  const x = event.pageX - btnEl.offsetLeft;
  
  btnEl.style.setProperty("--yPos", y + "px");
  btnEl.style.setProperty("--xPos", x + "px");
});
