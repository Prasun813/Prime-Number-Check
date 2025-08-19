let openBtn = document.querySelector('.openBtn');
let modelContainer = document.getElementById('modelContainer');
let closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', function(){
    modelContainer.style.display = 'flex';
})


modelContainer.addEventListener('click',(event)=> {
   if(event.target.className === 'modelContainer    '){
    modelContainer.style.display = 'none';  
   } 
})

