// Random Number Generator

// const min = 50;
// const max = 100;

// //Random number from 1 to 100
// let randomNum = Math.floor(Math.random() * 100) +1;
// console.log(randomNum);

// //Random number between 50 and 100
// let randomNum2 = Math.floor(Math.random() * (max-min)) + min;
// console.log(randomNum2);

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("label1");
const myLabel2 = document.getElementById("label2");
const myLabel3 = document.getElementById("label3");

const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}