let customRange = document.getElementById("customRange4");
let rangeValue = document.getElementById("rangeValue");

customRange.addEventListener("click",function(event){
    rangeValue.textContent = event.x;
});