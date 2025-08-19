let body = document.querySelector("body");
body.style.backgroundColor = "black";
body.style.color = "white";

let putBox = document.getElementById("putBox");
let submitBtn = document.querySelector("#submitBtn");
let main = document.querySelector(".main");
let container = document.getElementById("container");
let circle = document.getElementById("circle");

container.addEventListener("mousemove", (event) => {
  circle.style.top = event.clientY + "px";
  circle.style.left = event.clientX + "px";
});

function handleInput() {
  let innerContent = document.createElement("div");
  innerContent.classList.add("innerContent");

  let para = document.createElement("p");
  para.textContent = putBox.value;

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.onclick = function () {
    main.removeChild(innerContent);
  };

  innerContent.appendChild(para);
  innerContent.append(removeBtn);
  main.append(innerContent);
}

submitBtn.addEventListener("click", () => {
  let display = putBox.value;
  handleInput(display);
  putBox.value = " ";
});
