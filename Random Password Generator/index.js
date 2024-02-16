const letterString =
  "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*_-(){}[]/.,";
const letterArray = letterString.split("");

document.getElementById("btn").addEventListener("click", (e) => {
  randomePassword();
});

function randomePassword() {
  const passwordLength = 14;
  let password = [];

  for (let i = 0; i <= passwordLength; i++) {
    const random = Math.round(Math.random() * letterArray.length);
    password += letterArray[random];
  }

  document.querySelector("input").value = password;
}

document.querySelector(".fa-solid").addEventListener("click", () => {
  const inputValue = document.getElementById("input");

  if (inputValue.value !== "") {
    inputValue.select();
    inputValue.setSelectionRange(0, 999);
    navigator.clipboard.writeText(inputValue.value);
    passwordCopyMessage(inputValue.value);
  }
});

function passwordCopyMessage(value) {
  document.getElementById("copy").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("copy").classList.add("hidden");
  }, 1000);
}
