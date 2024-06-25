console.log("Hey this is video 55 of sigma web dev.")
// This console means we would see this in console whenever I will visit the page
// Check the console in inspect you will notice it. 
var a = 34;
var b = 45;
var c = "Jeet"; // This is the string variable which has been automatically described
var _a = 23; //This way you can name the variable, but u can't name the variable like "5a" or something like that
var $a = "Vaidehi"; //You can name the variable this way too //Not allowed
// But number can't come before the letter in the variable name
console.log(a + b + c); //This will print 79Jeet.
// This is the addition of the three variables that we created in the script and now this would be printed.
console.log(typeof a, typeof b, typeof c); //This will print the types of all three variables which we set here and made.
// Nowadays the most used variable setting term used is let, bcoz it helps u set the block level arrangement
{
    let a=23;
    console.log(a); //This let helps u set the values in the block
    // Like here the output is 23 here
}
console.log(a); // And here the output is 34 coz var is global and if me let b lidhu hoot to b aaj batavet coz ae globally lai let
const a1 = 89;
// a1 = a1+1; // This is not allowed here in the const coz the value is constant overall in the file
console.log(a1);
{
    var b = 230;
    console.log(b); // Here it will print 230
}
console.log(b); // Here it will print 230 only, coz var sets the value globally not block level