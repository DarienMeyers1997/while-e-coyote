const prompt = require("prompt-sync")({sigint: true})

//Write a program that takes a string and 'repeats it' until the string's length is greater than or equal to 10.
/* 

Need to prompt the user to create a string
need the string to repeat unti the string length is 10 or more characters
needs: str.length, while, sum, and maybe a sum++ or +=

*/


let string = prompt("Enter a single letter,string or word: ")

 let str = ""

 while(str.length <= 10){
    str = string + str
    console.log(str)
 }

