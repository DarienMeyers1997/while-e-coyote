const prompt = require("prompt-sync")({sigint: true})

/*
prompt-sync : get imput from the user 
-while loop - that allows users to input multiple numbers
-print out the sum at the end: 
variable to hold the sum
+= - to add to our users
-reprompt inside the while loop
*/


let num = Number(prompt("Enter some numbers (type 0 when complete)"))

let sum = 0 

while(num > 0){
    sum += num
    num = Number(prompt(">"))

}

console.log(sum)

