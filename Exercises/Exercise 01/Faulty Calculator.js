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

let random = Math.random();
let a = prompt("Enter Number 1");
let o = prompt("Enter Operation");
let b = prompt("Enter Number 2");

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**"
}

if (random < 0.1) {
    // Perform the faulty calculations
    o = obj[o];
    alert(`The solution is: ${eval(`${a} ${o} ${b}`)}`);
}
else {
    alert(`The solution is: ${eval(`${a} ${o} ${b}`)}`);
}