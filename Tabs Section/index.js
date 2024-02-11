const stepEl = document.querySelectorAll(".step");
const tapEl = document.querySelector(".taps");
const st = document.querySelectorAll(".s");

tapEl.addEventListener("click", (event) => {
  const id = event.target.innerText;

  stepEl.forEach((step) => {
    step.classList.remove("bg-red-300");
  });

  st.forEach((d) => {
    d.classList.add("hidden");
  });

  event.target.classList.add("bg-red-300");

  const element = document.getElementById(id);

  element.classList.remove("hidden");
});
