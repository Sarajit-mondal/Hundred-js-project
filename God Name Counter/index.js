const addEl = document.querySelectorAll(".add");
const subEl = document.querySelectorAll(".sub");
const krishnaEl = document.getElementById("krishna-count");
const joyMaEl = document.getElementById("joy-ma-count");
const joyBabaEl = document.getElementById("vola-nath-count");

let krishna = JSON.parse(localStorage.getItem("krishna"));
let joyMa = JSON.parse(localStorage.getItem("joyma"));
let joyBaba = JSON.parse(localStorage.getItem("joybaba"));

krishnaEl.innerText = krishna;
joyMaEl.innerText = joyMa;
joyBabaEl.innerText = joyBaba;

addEl.forEach((add) => {
  add.addEventListener("click", () => {
    if (add === addEl[0]) {
      krishna++;
      krishnaEl.innerText = krishna;
      setLocalStore();
    } else if (add == addEl[1]) {
      joyMa++;
      joyMaEl.innerText = joyMa;
      setLocalStore();
    } else {
      joyBaba++;
      joyBabaEl.innerText = joyBaba;
      setLocalStore();
    }
  });
});

subEl.forEach((sub) => {
  sub.addEventListener("click", () => {
    if (sub === subEl[0]) {
      if (krishna <= 0) {
        alert("You can't add negetive value");
      } else {
        krishna--;
        krishnaEl.innerText = krishna;
        setLocalStore();
      }
    } else if (sub == subEl[1]) {
      if (joyMa <= 0) {
        alert("You can't add negetive value");
      } else {
        joyMa--;
        joyMaEl.innerText = joyMa;
        setLocalStore();
      }
    } else {
      if (joyBaba <= 0) {
        alert("You can't add negetive value");
      } else {
        joyBaba--;
        joyBabaEl.innerText = joyBaba;
        setLocalStore();
      }
    }
  });
});

document.querySelector(".reset").addEventListener("click", () => {
  krishna = krishnaEl.innerText = 0;
  joyMa = joyMaEl.innerText = 0;
  joyBaba = joyBabaEl.innerText = 0;
  setLocalStore();
});

function setLocalStore() {
  localStorage.setItem("krishna", JSON.stringify(krishna));
  localStorage.setItem("joyma", JSON.stringify(joyMa));
  localStorage.setItem("joybaba", JSON.stringify(joyBaba));
}
