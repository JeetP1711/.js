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

function sums(x, y){
    return x + y;
}
// If I write return then I can store this values in some variable and print that variable in here.....
result = sums(14,15);
// 
console.log("The sum of the 2 numbers are: "+ result);