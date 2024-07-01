/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

// Here is the solution for this code....

let a = 12, b = 23;
let c = Math.random();
var opt = "/";

if(c<0.1){
    console.log("Its a fault here aka 10% chance")
    if(opt == "+"){
        console.log(a-b);
    }
    else if(opt == "-"){
        console.log(a/b);
    }
    else if(opt == "*"){
        console.log(a+b);
    }
    else if(opt == "/"){
        console.log(a**b);
    }
}
else{
    if(opt == "+"){
        console.log(a+b);
    }
    else if(opt == "-"){
        console.log(a-b);
    }
    else if(opt == "*"){
        console.log(a*b);
    }
    else if(opt == "/"){
        console.log(a/b);
    }
}
console.log(c);