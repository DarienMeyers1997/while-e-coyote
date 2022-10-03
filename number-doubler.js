const prompt = require("prompt-sync")({sigint: true})

//Write a program that prompts the user for a number, then repeatedly doubles that number until it is greater than or equal to 100.


let num = Number(prompt("Pick a number between 1-100: "))

let sum = 2

while(num <= 100){
    num *= sum 
    
    console.log(num)
}



