// let decrease = document.getElementById('decrease');
// let increase  = document.getElementById('increase');
// let countValue = document.getElementById('countValue');

// decrease.addEventListener("click",()=> {
//  let value = Number(countValue.innerText);
//  if(value <= 1){
//     return;
//  }
//  countValue.innerText = value - 1

// })

// increase.addEventListener("click",()=> {
//     countValue.innerText = Number(countValue.innerText) + 1;

// })


let nameInput = document.getElementById("nameInput");
let email = document.getElementById("email");
let submitBtn = document.getElementById("submitBtn");
let form = document.querySelector("form");
let body = document.querySelector("body");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!nameInput.value || !email.value) {
    alert("fill all the forms properly");
    return;
  }
  let createElem = document.createElement("p");
  createElem.innerHTML = `
   <P>${nameInput.value}</p>
   <P>${email.value}</p>
   `;
  body.append(createElem);
});
