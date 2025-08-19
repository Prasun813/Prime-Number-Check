let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailans = emailRegex.test(email.value);
  let passwordans = passwordRegex.test(password.value);

  let isvalid = true;

  if (!emailans) {
    document.querySelector("#emailError").textContent = "Email is incorrect";
    document.getElementById("emailError").style.display = "initial";
    isvalid = false;
  }

  if (!passwordans) {
    document.querySelector("#passwordError").textContent = "password is incorrect";
    document.getElementById("passwordError").style.display = "initial";
    isvalid = false;
  }

  if (isvalid) {
    document.getElementById("resultMessage").textContent = "Everything is correct";
  }
});
