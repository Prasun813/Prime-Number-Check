let addWords = document.getElementById("addWords");
let addButton = document.getElementById("addButton");
let Content = document.getElementById("Content");

let List = [];

function renderAddList(arr) {
  Content.innerHTML = "";
  arr.map((obj) => {
    let divElem = document.createElement("div");
    divElem.classList.add("innerContent");
    divElem.innerHTML = `
                    <p>${obj.text}</p>
  `;
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "❌";
    divElem.appendChild(removeBtn);
    divElem.onclick = () => {
      handleRemoveList(obj.id);
    };
    Content.append(divElem);
  });
}
renderAddList(List);

function handleAddList() {
  let obj = {
    id: Date.now(),
    text: addWords.value,
  };
  List.unshift(obj);
  renderAddList(List);
  addWords.value = "";
}

function handleRemoveList(id) {
  let remove = List.filter((items) => {
    return items.id !== id;
  });
  List = remove;
  console.log(List);

  renderAddList(List);
}

addButton.addEventListener("click", handleAddList);
