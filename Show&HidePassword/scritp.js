let body = document.querySelector("body");
body.style.backgroundColor = "#000";
body.style.color = "#fff";

let Input = document.getElementById("Input");
let show = document.getElementById("show");

show.addEventListener("click", function () {
  if (Input.type === "password") {
    Input.type = "text";
    show.textContent = "hide";
  } 
else if(Input.type === "text") {
    Input.type = "Password";
    show.textContent = "show";
  }
});
