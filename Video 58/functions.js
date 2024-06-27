// This video is about the functions in the javascript......
// Making a function for the name, means which ever name I give, then all the lines would include that name
function nice(name){
    console.log("Hey "+name+ ", you are good!"); //Including a string name here....
    console.log("Hey "+name+ ", you are nice!!");
    console.log("Hey "+name+ ", you are awesome...!");
    console.log("Hey "+name+ ", your t-shirt is jordar..!");
    console.log("Hey, my name is "+ name);
}
// Here we made this function with the name, so that whenever I will give a name for any it will print this lines including that name.....
nice("Jeet"); //Calling the nice function for name = "Jeet"

// Now let us make a function which will sum the 2 numbers we want and we will sum that 2 numbers.......
function sum(a, b) {
    console.log(a+b); // This will print the values of a + b
}
// This will print the value of sum of a and b directly
sum(12,13);

// Now if I want to store this result in some variable and give that variable or anything in different things then..........

function sums(x, y, c = 4){
    return x + y + c;
}
// If I write return then I can store this values in some variable and print that variable in here.....
result = sums(14,15);
// And here I have stored the sums value in result variable
console.log("The sum of the 2 numbers are: "+ result); // I have printed the sums value answer here..... #result
// I can make different variable for every other values and results....
result1 = sums(32, 45);
result2 = sums(244, 95);
result3 = sums(32, 48, 12); // Here I have specified the third value so it will take this value of c instead of the above given value
// Here I have made different results variables for storing different values in sums
// Now printing all the variables in line
console.log("The sum of the 2 numbers are: "+ result1); // I have printed the sums value answer here..... #result1
console.log("The sum of the 2 numbers are: "+ result2); // I have printed the sums value answer here..... #result2
console.log("The sum of the 2 numbers are: "+ result3); // I have printed the sums value answer here..... #result3
// I have printed all the different results here.............
// This is called the optional operators in functions, which take the value as initial value and if we give some value then it will take that value for the specific...........
// Now its time for making the arrow function......
const func1=(x1)=>{
    console.log("Hi, this is an arrow function and its value is ... "+ x1);
}
func1(12); // I have set this variable value 12 here....
func1(125); // I have set this variable value 125 here....
func1(123); // I have set this variable value 123 here....


// This was all about the functions in javascript and basics of it...........