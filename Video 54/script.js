alert("Hello World");
// This will show the alert while reloading the web page and showing what is written in alert
console.log("The code is running........");
console.log("The code is also running........");
console.log("The code is running like a wow........");
// This will show the console outputs in the console while opening the inspect and going in the console
// Its helpful in debugging the errors and finding the bugs in it
var a = prompt("Enter the number");
// The var character is used to define a variable like we did in the c and cpp and all
// And the prompt is used to show in the alert slider but it does give u input section where u can input whatever you want in it.
console.log("The inputted number is "+ a);
// And this is the output in the console where it shows the value of a which is inputted by the user
// The variable can be int and string too
// Now the confirm keyword in the console
var isTrue = confirm("Are you sure you want to leave this page and blast your laptop");
// This will ask you for the confirmation, yes or no and will ask you.
// Now lets put some condition for this in the code
if(isTrue){
    console.log("Your computer will blast. 🫡🫨🫨.");
}
// This if condition was for when the user agrees and confirms ok in the case, there we must write if(isTrue)
else{
    console.log("Your computer won't blast dw.......🫡🫡.");
}
// This condition is for the else when the user selects for the cancel option in this..........
document.title="I am good";