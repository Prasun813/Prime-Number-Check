const body = document.querySelector("body");
body.style.backgroundColor = "black";
body.style.color = "white";

let Add = document.getElementById("btn1");
let Substract = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let Count = document.getElementById("Count");
let num = 0;

function addCount() {
  num++;
  Count.textContent = num;
}

function SubstrctCount() {
  num--;
  Count.textContent = num;
}

function ResetCount() {
  Count.textContent = 0;
}
