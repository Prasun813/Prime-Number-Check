// let GrandParent = document.querySelector('.GrandParent');
// let Parent = document.querySelector('.Parent');
// let child = document.querySelector('.child');


// GrandParent.addEventListener('click',function(event){
//     console.log('grand Parent');
    
//    console.log(event.target);
//    console.log(event.currentTarget);
   
   
// })

// Parent.addEventListener('click',function(event){
//     console.log('Parent');
    
   
//    console.log(event.target);
//    console.log(event.currentTarget); 
//    event.stopPropagation();
   
// })

// child.addEventListener('click',function(event){
//     console.log('child');
    
//    console.log(event.target);
//     console.log(event.currentTarget);   
    
// })

let container = document.querySelector('.container');


container.addEventListener('click',function(event){
    let targetElem = event.target 
    if(targetElem.className === 'box'){
        console.log(targetElem.textContent);   
    }   
})

