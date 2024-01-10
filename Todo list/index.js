const inputEL = document.querySelector("input");
const submitBtn = document.querySelector(".btn");
const todo = document.querySelector(".todo");

submitBtn.addEventListener("click", () => {
  const newTodo = inputEL.value;
  if (newTodo != "") {
    crectNewTodo(newTodo);
  }

  inputEL.value = "";
});
function crectNewTodo(newTodo) {
  const lI = document.createElement("li");
  todo.appendChild(lI);
  const h1 = document.createElement("h1");
  h1.innerText = `${newTodo}`;
  lI.appendChild(h1);
  const div = document.createElement("div");
  lI.appendChild(div);
  const i1 = document.createElement("i");
  i1.classList.add("fa-regular");
  i1.classList.add("fa-square-check");
  div.appendChild(i1);
  const i2 = document.createElement("i");
  i2.classList.add("fa-solid");
  i2.classList.add("fa-trash-can-arrow-up");
  i2.classList.add("fa-trash");
  div.appendChild(i2);

  // lI.innerHTML = `<h4>Apple</h4>
  //           <div>
  //             <i class="fa-regular fa-square-check"></i>
  //             <i class="fa-solid fa-trash-can-arrow-up fa-trash"></i>
  //           </div>`;

  // uL.appendChild(lI);

  document.querySelector(".fa-square-check").addEventListener("click", () => {
    todo.classList.toggle("active");
    console.log("thsi delete button");
  });
}
