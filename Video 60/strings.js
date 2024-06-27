console.log("This is string tutorials..");
let a = "Jeet";
let b = "Vaidehi";

console.log(a); // Simply Printing the a string
console.log(a[0]) // Accessing the first character of the string here which is J
console.log(a[1]) // Accessing the second character of the string here which is e
console.log(a[2]) // Accessing the third character of the string here which is e
console.log(a[3]) // Accessing the fourth character of the string here which is t
console.log(a[4]) // Accessing the fifth character of the string here which is not possible and not present so it will show undefined in the terminal. JS is the most error less language, it will try its best to not show errors and resolve the errors by itself as fast and perfect as possible.......
console.log(a.length); // Printing the length of the a string
// Template Literals
console.log("Hi my name is " + a + " and my friend's name is" + b);
// This way we can write and add two strings in same line and can have it, but there is a other way too of adding such things and making it more appropriate and time saving.....
// So the way is....
console.log(`Hi my name is ${a} and my friend's name is ${b}`);
// SO this way I can add the `` instead of "" in the sense to just add the variables so much smoother and faster in the way to make things smooth and easy...
// I can directly add the variables by ${name} and that variable would be added to the line and console.log()
