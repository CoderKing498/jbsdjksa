/**
 WEEK 1: MESSAGE INTERACTIVE SYSTEM 

 */


let userName = prompt("Please, enter your name") 
while (userName === null)

let userAge = Number(prompt("Please, enter your age"))


if(isNaN(userAge)){
    console.error("Please, enter a valid age using numbers.")
}else{
    console.alert()
}

if(userAge <= 18){
    console.alert(`Hi. ${userName}`)
}else{
    console.log(`Hi. ${userName}`)
}
