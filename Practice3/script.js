let body = document.querySelector("body");
body.style.backgroundColor = "black";
body.style.color = "#fff";

let main = document.querySelector(".main");
let inputs = document.querySelectorAll("input");
let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value);

  let h1 = document.createElement("h1");
  h1.textContent = inputs[1].value;

  let h5 = document.createElement("h5");
  h5.textContent = inputs[2].value;

  let para = document.createElement("p");
  para.textContent = inputs[3].value;

  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h1);
  card.appendChild(h5);
  card.appendChild(para);
  main.append(card);

  inputs.forEach((eve) => {
    if (eve.type !== "submit") {
      eve.value = " ";
    }
  });
});
