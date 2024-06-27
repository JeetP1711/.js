console.log("This is string tutorials..");
let a = "Jeet";
let b = "Vaidehi";
let p = "porsche"

console.log(a); // Simply Printing the a string
console.log(a[0]) // Accessing the first character of the string here which is J
console.log(a[1]) // Accessing the second character of the string here which is e
console.log(a[2]) // Accessing the third character of the string here which is e
console.log(a[3]) // Accessing the fourth character of the string here which is t
console.log(a[4]) // Accessing the fifth character of the string here which is not possible and not present so it will show undefined in the terminal. JS is the most error less language, it will try its best to not show errors and resolve the errors by itself as fast and perfect as possible.......
console.log(a.length); // Printing the length of the a string
// Template Literals
console.log(a.toLowerCase()); // This will print jeet.... #lowercase
console.log(a.toUpperCase()); // This will print JEET.... #UPPERCASE
console.log("Hi my name is " + a + " and my friend's name is" + b);
// This way we can write and add two strings in same line and can have it, but there is a other way too of adding such things and making it more appropriate and time saving.....
// So the way is....
console.log(`Hi my name is ${a} and my friend's name is ${b}`);
// SO this way I can add the `` instead of "" in the sense to just add the variables so much smoother and faster in the way to make things smooth and easy...
// I can directly add the variables by ${name} and that variable would be added to the line and console.log()
// Escape Sequences, what are escape sequences??????
// Escape Sequence are those which are needed in the program to add some lines or add some space or special characters in the line which normally are not allowed in the line. 
// For example, "", tab spaces, line breaks and much more....
// \n -> line break
// \" -> for "
// \t -> tab space
console.log("I am adding a \n line break \n here too....."); // \n is for the line break between this words and shifting the lines to new line
console.log("I am adding a \"double quotes\" here too how we can add this....."); // \" is used to add the double quotes in the line through it...
console.log("A \t space \t tab between this words...") // \t is used to add the tab space between the lines here...
// There is a different way too for adding the double quotes in program and is most off used here... and that is..
console.log(`This is the "double quotes" in here without\\\"`) // This is method without using the \"
// Slicing the sentence or word in here........
console.log(p.slice(1,4)); // This will slice the word porsche means it will start from index 1 (that is o) and will stop at index 4 (that is before c (means ors only))
// So this way the slicing works means the elements are being sliced....
console.log(p.slice(2)); // This will slice the word porsche from letter r to last means the word will be "rsche"