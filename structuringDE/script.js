// let obj = {
//   name: "Prasun Thapa magar",
//   age: 25,
//   occupation: "Javascript Developer",
//   location: "Imadol, lalitpur",
//   isMarried: false,
//   address: {
//     city: "lalitpur",
//     pincode: 123456,
//   },
// };

// let {
//   name,
//   age,
//   occupation,
//   location,
//   isMarried,
//   address: { city, pincode },
// } = obj;

// console.log(name);
// console.log(age);
// console.log(isMarried);
// console.log(occupation);
// console.log(city);
// console.log(pincode);

// let arr = [1,2,3,4];

// let [a,b,c,d,e=5] = arr;
// console.log(a,b,c,d,e);

// let a = 4, b = 6;

// let temp = a;

// a = b;
// b = temp;

// console.log(b);
// console.log(a);

//  [a,b] = [b,a]
//  console.log(b);
//  console.log(a);

//  let arr = [1,2,3,4,5,[6,7,8,9]];

//  [a,b,c,d,e,[q,x,y,z]] = arr;
//  console.log(a,b,c,d,e,q,x,y,z);

// let arr = [1,2,3,[8,9]];

// [a,,,[x,y]] = arr;
// console.log(a);
// console.log(x,y);

// let obj = {
//     name: 'Prasun thapa magar',
//     age:25,
//     city:'lalitpur',
//     isMarried: false
// }

// let {name,city,...rest} = obj;

// console.log(name,city, rest);

// let {name:fullName}  ={
//     name: 'Prasun thapa maagr'
// }
// console.log(fullName);

// let obj = {
//   name: "Prasun thapa magar",
//   age: 25,
//   address: {
//     city: "lalitpur",
//     pincode: 810044,
//     arr: [1, 2, 3, 4],
//   },
// };

// let { name: fulllName, age, address:{ city, pincode, arr:[a,x,d,e]}} = obj;

// console.log(a);
// console.log(pincode);
// console.log(city);

// function sum([a, b]) {
//   console.log(a + b);
// }
// let arr = [10,2];
// sum(arr);


// let obj = {
//     name: "Prasun thapa  magar",
//     age: 25,
//     isMarried: false,
//     adress:{
//         city:'imadol,lalitpur',
//         pin
//     }
// }


// const arr = [1,2,3];
// const obj = {...arr}
// console.log(obj);
