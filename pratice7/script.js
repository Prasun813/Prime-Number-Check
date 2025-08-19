// let num = 0;

// if(num > 0) return console.log("It's  a positive number");
// if(num < 0)return console.log("It's a Negative number");
// if(num >= 0)return console.log("It's equal to 0");

// let age = 2;

// if(age < 18 && age > 0) return console.log("You cannot vote");
// if(age >= 18) return console.log("You can vote");
// if(age === 0) return console.log("this is invalid");

// let num = 3;

// if(num % 2 === 0) return console.log("this is even number");
// if(num % 2 === 1) return console.log("this is odd number");

// let num = 0;

// function checkPositiveNumber(num){
//     if(num > 0) return console.log("this is a positive number");
//     if(num < 0) return console.log("this is negative number");
//     if(num >= 0) return console.log("this is equal to 0");
// }
// let res = checkPositiveNumber(num);
// console.log(res);

// let Hello = function (){
//     console.log("Hello user");
// }
// Hello();
// console.log(typeof Hello);

// function outerFunction() {
//   let outerVariable = "I am from outer function";

//   function innerFunction() {
//     console.log(outerVariable);
//   }
//   return innerFunction;
// }
// let res = outerFunction();
// console.log(res);

// function makeCounter(){
//     let count = 0;
//     function InnerCount(){
//         count++;
//         console.log(`count is now : ${count}`);
//     }
//     return InnerCount;
// }
// let res = makeCounter();
// res();
// res();

// function makeSecretKeeper() {
//   let message = "I love Javascript";
//   function messaageReviled() {
//     console.log(message);
//   }
//   return messaageReviled;
// }
// let res = makeSecretKeeper();
// res();

// let arr = [1,2,3,4];
// let newArr = arr.map(event => event * 2);
// console.log(newArr);

// const num = [1,2,3,4,5];
// const newArr = num.map(elem => elem * 2);
// console.log(newArr);

// const name = ["alice","bob","charlie"];
// const newName = name.map(ele => ele.toUpperCase());
// console.log(newName);

// let arr = ["apple", "banana","orange"];
// let newArr = arr.map((elem,index) => `Items ${index} ${elem}`);
// console.log(newArr);

// let arr = [
//   {
//     name: "Alice",
//     age: 20,
//   },
//   {
//     name: "Bob",
//     age: 30,
//   },
//   {
//     name: "Charlie",
//     age: 35,
//   },
// ];

// const newArr = arr.map(elem => elem.name);
// console.log(newArr);

// let num = [2,3,4];
// let newNum = num.map(elem => `Result ${elem * elem}`);
// console.log(newNum);

// let arr = ['1','2','3','4'];
// let newArr = arr.map(ele => parseInt(ele));
// console.log(newArr);

// function evenNumber(arr){
//     let newArr = arr.filter(elem => elem % 2 === 0);
//     console.log(newArr);
// }

// let arr = [1,2,3,4,5,6];
// evenNumber(arr);

// function findLargeString(name){
// const newName = name.filter(elem => elem.length >= 5);
// console.log(newName);
// }

// let names = ["apple","bat", "cat", "dolphine", "eggs"];
// findLargeString(names);

// function checkAge(older) {
//   let newAge = older.filter((elem) => elem.age >= 18);
//   console.log(newAge);
// }

// let age = [
//   {
//     name: "Alice",
//     age: 23,
//   },
//   {
//     name: "Bob",
//     age: 16,
//   },
//   {
//     name: "Charlie",
//     age: 12,
//   },
//   {
//     name: "David",
//     age: 21,
//   },
// ];
// checkAge(age);

// function uniqueValue(arr) {
//   let newArr = arr.filter((elem, index) => arr.indexOf(elem) === index);
//   console.log(newArr);
// }
// let arr = [1, 2, 2, 3, 4, 4, 5];
// uniqueValue(arr);

// function priceCheck(obj){
//     let newObj = obj.filter(elem => elem.price < 600 && elem.category === "Electronics");
//     console.log(newObj);
// }

// let obj = [
//   { name: "Laptop", price: 1000, category: "Electronics" },
//   { name: "Shirt", price: 30, category: "Clothing" },
//   { name: "Phone", price: 500, category: "Electronics" },
//   { name: "Jeans", price: 40, category: "Clothing" },
// ];
// priceCheck(obj)

// let arr = [1,2,3,4,5];
// let copyArr = [];
// arr.forEach((elem) => copyArr.push(elem * elem))
// console.log(copyArr);

// let arr = ["hello","world","javascript"];
// let copyArr = [];
// arr.forEach(elem => copyArr.push(elem));
// console.log(copyArr);

// let grade = 79;
// if(grade >= 90 && grade <= 100) return console.log('your Grade is: A+');
// if(grade >= 80 && grade <= 89) return console.log('your Grade is: A');
// if(grade >= 70 && grade <= 79) return console.log('your Grade is B');
// if(grade >= 60 && grade <= 69) return console.log('your Grade is c');
// if(grade >= 50 && grade <= 59) return console.log("your Grade is D");
// if(grade >= 40 && grade <= 49) return console.log("you need to study hard");

// let arr = ["apple", "banana", "apricot", "cherry"];

//  let newArr = arr.find((elem) => elem.charAt('a'));
//   console.log(newArr);

// function ReserveString(num){
//  return num.split('').reverse().join();
// }

// let num = "Prasun thapa magar";
// console.log(ReserveString(num));

// function reverseString(str) {
//   let newName = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newName = newName + " " + str[i];
//   }
//   return newName;
// }
// let arrName = ["apple", "mango", "banana", "orange"];
// console.log(reverseString(arrName));

// let words = "Prasun";
// function reverseStr(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr = newStr + str[i];
//   }
//   return newStr;
// }
// let res = reverseStr(words);
// if (res === words) return console.log(`${words} is palindrome`);
// return console.log(`${words} in not palindrome`);

// let arr = ["Prasun","thapa","magar"];
// arr.push("lives");
// arr.unshift("hello");
// arr.pop();
// arr.shift();
// arr.splice(1,2);
// console.log(arr);
// console.log(arr[arr.length - 1]);

// function AlternateElement(arr) {
//   let elem = [];
//   for (let i = 0; i < arr.length; i += 2){
//     elem.push(arr[i]);
//   }
//   return elem;
// }
// let arr = [-5, 1, 4, 2, 12];
// let res = AlternateElement(arr);
// console.log(res.join(' '));

// function linearSecrch(arr,x){
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === x){
//         sum = i;
//     }
//   }
//   return sum;
// }

// let arr = [1,2,3,4];
// let x = 3;
// console.log(linearSecrch(arr,x));

// function findLargest(arr) {
//   let num = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       num = arr[i];
//     }
//   }
//   return num;
// }

// let arr = [10, 20, 30];
// console.log(findLargest(arr));

// function findSecondLargest(arr){

//     let a = -Infinity;
//     let b =  -Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > a){
//             b = a;
//             a = arr[i];
//         }
//        else if(arr[i] > b){
//           b = arr[i];
//         }
//     }
//     return b;
// }

// let arr = [12,35,1,10,34,1];
// console.log(findSecondLargest(arr));

// let score = 60;

// if(score >  100 && score <= 0 ) return console.log("this is invalid");
// if(score >= 90 && score <= 100) return console.log("Your Grade: A+");
// if(score >= 80 && score <= 89) return console.log("Your Grade: A");
// if(score >= 70 && score <= 79) return console.log("Your Grade: B");
// if(score >= 60 && score <= 69) return console.log("Your Grade: C");
// if(score >= 50 && score <= 59) return console.log("Your Grade: D");
// if(score >= 40 && score <= 49) return console.log("Your Grade: F");

// function chechPalindrome(str) {
//   let newStr = [];
//   for(let i = str.length - 1; i >= 0; i--){
//     newStr = newStr + str[i];
//   }
//   if(newStr === some) return console.log(`${newStr} is palindrome`);
//   return console.log(`${newStr} is not palindrome`);
// }

// let some = "madam";
// console.log(chechPalindrome(some));

// function checkEqual(str, trs) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === trs[i]) return console.log(`${str} is subsequence of ${trs}`);
//     return console.log(`${str} is not subsequence of ${trs}`);
//   }
// }
// let str1 = "AXY";
// let str2 = "YADXCP";
// console.log(checkEqual(str1, str2));

// function reverseString(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr = str[i];
//     console.log(newStr);
//   }
//   return newStr;
// }
// let str = "hello";
// console.log(reverseString(str));

// function sumEvenNumber(arr){
// let sum = 0;
// let newArr = arr.filter(elem => elem % 2 === 0);
// sum = newArr;
// return sum;
// }
// let arr = [1,2,3,4,5,6];
// console.log(sumEvenNumber(arr));

// function isPalindrome(str){
//   let newStr = '';
//     for(let i = str.length - 1; i >= 0; i--){
//        newStr += str[i];
//     }
//    if(str !== newStr){
//     return true;
//    }else{
//     return false;
//    }
// }

// let str = "A man a plan a canal Panama";
// console.log(isPalindrome(str));

// function maxProduct(arr) {
//   let a = -Infinity;
//   let b = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > a) {
//       b = a;
//       a = arr[i];
//     } else if (arr[i] < b) {
//       b = arr[i];
//     }
//   }
//   return a * b;
// }

// let arr = [2, 3, , 4, 5];
// console.log(maxProduct(arr));

// function countChar(str, char) {
//   let newStr = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       newStr++;
//     }
//   }
//   return newStr;
// }

// let str = "banana";
// console.log(countChar("banana","a"));

// function createSecretMessageHolder(secret){
//     let words = "Hello";
//      function saysome(message){
//          return words + message;
//     }
//     return saysome;
// }
// let res = createSecretMessageHolder();
// console.log(res("Prasun"));

// function makeIdGenerator(){
//     let userId = 0;
//     for(let i = 0; i < 5; i++){
//        function generateId(){
//        return userId++
//        }
//     }
//     return generateId;
// }
// let res = makeIdGenerator();
// console.log(res());
// console.log(res());
// console.log(res());

// function makeMultiple(factor) {
//   function factorNUmber(factor1) {
//     return factor * factor1;
//   }
//   return factorNUmber;
// }
// let res = makeMultiple(2);
// console.log(res(5));

// function RemoveDuplicates(arr) {
//   let num = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       num = arr[i];
//       console.log(num);
//     }
//   }
// }

// let arr = [2, 2, 2, 2, 2];
// let res = RemoveDuplicates(arr);
// console.log(res);

// function ArrayReverse(arr){
//     let copyArr = [];
//     let n = arr.length;
//     for(let i = 0; i < n / 2; i++){
//        copyArr = arr.reverse();
//        arr = copyArr;
//     //    console.log(arr);
//     }
//     return arr;
// }

// let arr = [1, 4, 3, 2, 6, 5];
// console.log(ArrayReverse(arr));

// function checkArraySorted(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// let arr = [3, 1, 4, 2, 5];
// console.log(checkArraySorted(arr));

// function countCandies(jar){
//     if(jar === 0){
//         return 0;
//     }
//     return 1 + countCandies(jar - 1);
// }
// console.log(countCandies(3));

// function checkArray(num, i = 0) {
//   if(i === num.length - 1){
//     return true;
//   }
//   if(num[i] > num[i + 1]){
//     return false;
//   }
//   return checkArray(num, i + 1);
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(checkArray(arr));

// function First (){
//     console.log("this is first");
//     Second()
// }

// function Second(){
//     console.log("tis is Second");
//     THird();
// }
// function THird(){
// console.log('This is third');

// }
// First();

// function pow(x,n){
//     let res = 1;
//     for(let i = 0; i < n; i++){
//         res = res * x;
//     }
//     return res;
// }
// console.log(pow(2,3));

// function pow(x,n){
//     if(n === 1){
//         return x;
//     }
//     else{
//         return x * pow(x, n - 1);
//     }
// }
// console.log(pow(2,3));


// function Multiply(arr) {
//   console.log(arr);
//   if (arr.length <= 0) return 1;
//   return arr[arr.length - 1] * Multiply(arr.slice(0, arr.length - 1));
// }
// console.log(Multiply([1, 2, 3, 4]));

