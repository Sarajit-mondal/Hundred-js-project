const textAreaContainer = document.getElementById("notes-container");
document.getElementById("add").addEventListener("click", () => {
  const obj = {
    id: Math.floor(Math.random() * 100000),
    contains: "",
  };
  creatNewNote(obj.contains, obj.id);
  setAllNode(obj);
});

// creatNewNote
function creatNewNote(contains, id) {
  const textarea = document.createElement("textarea");
  textarea.placeholder = "empty-note";
  textarea.value = contains;
  textAreaContainer.appendChild(textarea);
}

// update contains
function containsUpdate(value, id) {
  console.log(id);
}

function setAllNode(item) {
  const allNode = getNode();
  allNode.push(item);
  setNode(allNode);
}
// set node localStorage
function setNode(allNode) {
  localStorage.setItem("all-note", JSON.stringify(allNode));
}

// getNode from localStorage
function getNode() {
  const allnote = JSON.parse(localStorage.getItem("all-note"));
  if (allnote) {
    return allnote;
  } else {
    return [];
  }
}

// load all node
function loadAllnode() {
  getNode().forEach((element) => {
    creatNewNote(element.contains);
  });
}

loadAllnode();
