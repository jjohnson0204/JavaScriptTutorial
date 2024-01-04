// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

// 1. declaration       let x;
// 2. assignment        x = 100;


// Numbers
let x;
x = 100;

// combined
let y = 123;

let age1 = 25;
let price = 11.99;
let gpa = 2.1;

// logs to Inspect / Console
console.log(x);

console.log(typeof gpa);
console.log(`You are ${age1} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);

// Strings

let firstName = "Jaye";
let favoriteFood = "Pizza";
let email = "Email@gmail.com";

console.log(typeof  firstName);
console.log(`Your name is: ${firstName}`);
console.log(`Your favorite food is: ${favoriteFood}`);
console.log(`Your email is: ${email}`);

// Booleans

let online = false;
let forSale = true;
let student = true;

console.log(typeof online);
console.log(`${firstName} is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${student}`);


// HTML Example 
let fullName = "Jaye";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`; 