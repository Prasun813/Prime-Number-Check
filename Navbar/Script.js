let navUl = document.getElementById("navUl");
navUl.style.maxHeight = "0px";

function toggleNav() {
  if (navUl.style.maxHeight == "0px") {
    navUl.style.maxHeight = "300px";
  } else {
    navUl.style.maxHeight = "0px";
  }
}
