let randomBtn = document.getElementById("randomBtn");
let colorInput = document.getElementById("colorInput");
let applyBtn = document.getElementById("applyBtn");
let currentColorValue = document.getElementById("currentColorValue");
let container = document.getElementById("container");

const colorArr = [
  "red",
  "green",
  "blue",
  "yellow",
  "tomato",
  "skyblue",
  "ligthseagreen",
  "cyan",
  "black",
  "ligthcoral",
  "acqua",
  "white",
];

const colorChanger = (color) => {
  container.style.backgroundColor = color;
  currentColorValue.innerHTML = color;
};
const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * colorArr.length);
  return colorArr[randomNumber];
};
let color = generateRandomNumber();
console.log(color);

const clickRandomBtn = () => {
  let color1 = generateRandomNumber();
  colorChanger(color1);
};

const clickApplyBtn = () => {
  let putInput = colorInput.value;
  colorChanger(putInput);
  colorInput.value = "";
};

randomBtn.addEventListener("click", clickRandomBtn);
applyBtn.addEventListener("click", clickApplyBtn);

colorChanger("blue");
