console.log("Hi I am conditional operator");
let age = 5;
let grace = 2;
let realAge = 0;
// Now learning about the operators of js like there are in c/c++
console.log(age + grace); // This is simple addition operator // Simple Addition // 7
console.log(age - grace); // This is simple subtraction operator // Simple Subtraction // 3
console.log(age * grace); // This is simple multiplication operator // Simple Multiplication // 10
console.log(age / grace); // This is simple division operator // Simple Division (Quotient) // 2.5
console.log(age ** grace); // This is not simple, it is the exponential operator // It will print age^grace (5^2) // 25
console.log(age % grace); // This is not simple, it is the modulo operator // It will print the remainder of the division of age and grace // 1
if ((age + grace) > 18) { //This is the condition like the same like we use c/c++ or any other language
    console.log("You can drive"); // If age is greater then 18 then it will print this
}
else {
    console.log("You cannot drive"); // Or else it will print this
}
// Assignment Operators
realAge += grace; // realAge = realAge + grace
realAge -= grace; // realAge = realAge - grace
realAge *= grace; // realAge = realAge * grace
realAge /= grace; // realAge = realAge / grace
realAge %= grace; // realAge = realAge % grace
realAge **= grace; //realAge = realAge ** grace
console.log(realAge);

// Comparison Operator
// a==b // This will compare the both values // equal to
// a!=b // This will compare and check the not equal to value // not equal to
// a===b // This will compare the whole type and value // equal to in value and type
// a!==b // This will compare whole value and type and says not equal to // not equal to value or type
// a<b // This will compare if a is less then b // lesser then
// a>b // This will compare if a is greater then b // greater then
// a>=b // This will compare if a is greater then and equal to b // greater then equal to
// a<=b // This will compare if a is less then and equal to b // less then equal to
// a?b 
/*
This
is
a
multiline
comment
*/
// The else if statements
let a = 0;
// This is the else if ladder where we can see we have made the whole ladder in the else if ladder like the if then else if then else again, this way there are in total 3 conditions in here and same way we can make as many conditions as we want here.....
if (a >= 18) {
    console.log("You can drive."); // If the age will be greater then 18 then this will get printed
}
else if (a == 0) {
    console.log("Are you kidding"); // This will be printed when the age will be 0 and this gets printed
}
else {
    console.log("You cannot drive"); // This will be printed if both above conditions are false
}

// Ternary Operator
// Ternary Operators are such conditions which I can directly make it in the code without writing the else if conditions in here
let x=5, y=9;
let z = (x>y)?(x-y):(y-x);

console.log(z);