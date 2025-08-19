let body = document.querySelector("body");
body.style.backgroundColor = "black";

let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let main = document.querySelector(".main");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value);

  let h1 = document.createElement("h1");
  h1.textContent = inputs[1].value;
  let para = document.createElement("p");
  para.textContent = inputs[2].value;

  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h1);
  card.appendChild(para);

  main.append(card);

  inputs.forEach((event) => {
    if (event.type !== "submit") {
      event.value = " ";
    }
  });
});
