const textareaEl = document.querySelector("#textarea");
const totalEl = document.querySelector("#total");
const remainingEl = document.querySelector("#remaining");

textareaEl.addEventListener("keyup", (event) => {
  characterCount();
});

function characterCount() {
  totalEl.innerText = textareaEl.value.length;
  remainingEl.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
