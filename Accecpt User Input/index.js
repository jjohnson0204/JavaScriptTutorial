//  How to accept user input

// 1. EASY WAY = window input
// 2. PROFESSIONAL WAY = HTML textbox


//1.
let username;

username = window.prompt("What's your username?");

console.log(username);


//2.

document.getElementById("mySubmit").onclick = function(){   // when clicked submit
    username = document.getElementById("myText").value;     // get the value of myText
    console.log(username); // show result to console
    document.getElementById("myH1").textContent = `Hello, ${username}`;
}
