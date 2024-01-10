// type conversion = change the datatype of a value to another
//                      (string, numbers, booleans)

/*
    string -> numbers
    string -> booleans
    numbers -> string
    numbers -> booleans
    booleans -> string
    booleans -> numbers
*/

//Get a string and turn it into a number.
let age = window.prompt("How old are you?"); // "25"
age = Number(age);                           // 26   
age+=1;

console.log(age);

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);