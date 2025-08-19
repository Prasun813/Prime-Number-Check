let body = document.querySelector('body');
body.style.backgroundColor = "#000";
body.style.color = "#fff";

let Input = document.getElementById("Input");
let submit = document.getElementById("submit");
let displayValue = document.getElementById("displayValue");

submit.addEventListener('click',function(event){
    event.preventDefault();
    
    const display = Number(Input.value);
    if(display < 2 || isNaN(display)){
        displayValue.textContent = `${display} is not Prime Number`;
        displayValue.style.color = "red"
    }

     let isPrime = true;
    for(let i = 2; i < Math.sqrt(display); i++){
       if(display % i === 0){
         isPrime = false;
         break;
       }
    }

    if(isPrime){
        displayValue.textContent = `${display} is Prime Number`;
        displayValue.style.color = "green";
    }
    else{
      displayValue.textContent = `${display} is not Prime Number`;
      displayValue.style.color = "red";
    }


})