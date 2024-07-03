/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let random = Math.random(); // This will generate the random number between 0 and 1
let a = prompt("Enter Number 1");
let o = prompt("Enter Operation");
let b = prompt("Enter Number 2");

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**"
}

if (random < 0.1) { // If the random number is less than 0.1 (i.e. 10% of the generation) then this will perform the faulty calculations.......
    // Perform the faulty calculations
    o = obj[o];
    alert(`The solution is: ${eval(`${a} ${o} ${b}`)}`);
    // eval is used to evaluate the basic and arithmetic calculations directly in this eval term
    // That means direct a + o + b
    // Here this will calculate the terms and will take the values directly......
}
else { // This is the else condition which means it will perform simple calculations without any faults.....
    alert(`The solution is: ${eval(`${a} ${o} ${b}`)}`);
}