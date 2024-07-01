// This is the exercise where we will make a factorial calculator....
var num = 6;
var i = 1;
var fac = 1;
 while(i <= num) {
    
    fac = fac * i;
    i++;
 }

 console.log(fac);

//  Using reduce
let arr = [1,2,3,4,5];
// Here we created a function named sum which will return the value of sum in here
function sum(a,b){ // Taking 2 values a & b
   return a*b;
}
// And now printing the 
console.log(arr.reduce(sum));