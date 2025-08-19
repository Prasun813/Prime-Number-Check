let display = document.getElementById('input-Search');

function appendValue(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
         display.value = eval( display.value);
    } catch (error) {
        display.value = "error"; 
    }
}