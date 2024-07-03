let arr = [1,2,3,4,5,6]; // Declaring a array of total which numbers will be multiplied in factorial.
// Like 6! = 6*5*4*3*2*1;
// This way a array arr is defined here

function fact(a,b){ // Function named fact defined here with 2 
    return a*b; // Returns the multiplied value of a and b given here
}

console.log(arr.reduce(fact)); // Reduce is used to here to try all the values of array to try one by one and giving it to the final value......