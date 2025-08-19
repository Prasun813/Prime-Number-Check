// let para = document.getElementById('para');

// para.style.backgroundColor = '#000';
// para.style.color = "white";

// let elem = document.createElement('button');
// elem.innerHTML = 'click me';
// para.prepend(elem);

let div = document.querySelector('.box');
div.setAttribute('class', `${div.getAttribute('class')} box2`);
console.log(div.getAttribute('class'));
