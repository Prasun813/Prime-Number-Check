// function getGrade(score) {
//   if (score >= 90 && score <= 100) return "A+";
//   if (score >= 80 && score <= 89) return "A";
//   if (score >= 70 && score <= 79) return "B";
//   if (score >= 60 && score <= 69) return "C";
//   if (score >= 50 && score <= 59) return "D";
//   if (score >= 40 && score <= 49) return "F";
//   else{
//     if(score <= 0 || score > 100){
//       console.log('Input is invalid');
//     }
//   }
//   return score;
// }
// let res = getGrade(0);
// console.log(res);



// function Game(player1, player2) {
//   if (player1 === "scissor" && player2 === "paper") return "player1 wins";
//   if (player2 === "scissor" && player1 === "paper") return "player2 wins";
//   if (player1 === "rock" && player2 === "scissor") return "player1 wins";
//   if (player2 === "rock" && player1 === "scissor") return "player2 wins";
//   if (player1 === "paper" && player2 === "rock") return "player1 wins";
//   if (player2 === "paper" && player1 === "rock") return "player2 wins";
//   else {
//     if (player1 === player2) return "Draw Both did not win";
//   }
// }
// let res = Game("paper", "rock");
// console.log(res);



// for(let i = 0; i < 21; i++){
//     if(i % 2 === 0){
//         console.log(i); 
//     }
// }

// for(let i = 1; i < 11; i++){
//    console.log(`5 * ${i} = ${5 * i}` );
// }


//  let sum = 0;
// for(let i = 1; i < 101; i++){
//     sum += i
//     console.log(sum);  
// }

// let user = prompt('enter your number')

// for(let i = 0; i < user; i++){
//    if(user % 2 === 0){
//     console.log('even');
    
//    }
//    else{
//     console.log('odd');
    
//    }
// }

// for(let i = 0; i < 101; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i); 
//     }  
// }

// for(let i = 1; i < 101; i++){
//    if(i % 7 === 0){
//     break;
//    }
//    console.log(i);
   
// }


// for(let i = 1; i < 20; i++){
//     if(i % 3 === 0){
//         continue;
//     }
//    console.log(i);
   
// }


// let count = 0;
// for(let i = 1; i <101; i++){
//     if(i % 2 === 1){
//         count++
//         console.log(i);
//     }
//     if(count === 5) break;
// }


// [ Default parameter functions ]
// function  abc(p1=0,p2=0){
//     console.log(p1+p2);
// }
// abc(4,4);

// [ rest parameter functions ]
// function abc(...val){
//     console.log(val); 
// }
// abc(1,2,3,4,5,6,7,8,9);

// [ Return value ]
// function abc(n){
//     return 12 + n;
// }
// let res = abc(23);
// console.log(res);


// [ First class Function ]
// let abc = function(val){
//         val()
// }

// abc(function(){
//   console.log('hello');
  
// })


// let arr = [1,2,3,4,5,6];
// arr.forEach(function(arr){
//     console.log(arr);
// });

// let res = arr.map(function(val){
//     if(val > 3) return val;
// });
// console.log(res);

// let res = arr.filter(function(val){
//    if(val > 3) return true; 
// });
// console.log(res);

// let arr = [1,2,3,4,5,];

// let res = arr.reduce(function(acc, val){
//     return acc+ val
// },0);
// console.log(res);

let obj = {
    name: "Prasun",
    age: 25,
    place: 'imadol'
};
let a = 'name';
console.log(obj[a]);

