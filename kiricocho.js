/*
WEEK 1 - Interactive System

A Javascript interactive program which 
requests name and age in order to display messages in the console.

Variables:
*Let and Const*
*Console.error, Console.log, alert and prompt
*If and Elif
*/



// User data inputs

// Input username
let userName = prompt("Please, enter your name")
while (userName === null || userName.trim() === "") {
    console.error("Error: Please enter a valid name.")
    userName = prompt("Please, enter your name.")
}

// Input user's age
let agePrompt = prompt("Please, enter your age")
while (agePrompt === null || agePrompt.trim() === ""){
    console.error("Error: Enter a valid age in numbers.")
    agePrompt = prompt("Please, enter a valid number.")
}

// Convert string to a number
const age = Number(agePrompt)
if (age < 18){
    alert(`Hello, ${userName}, you are under 18. Keep learning forward and enjoy writing code.`)
}else{
    alert(`Hello, ${userName}, you are an adult. Get ready for great opportunities in the world of programming.`)
}

// Output data
console.log(userName)
console.log(age)
