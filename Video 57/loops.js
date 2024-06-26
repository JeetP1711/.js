// This is the loops in javascript
console.log("This is the script for the FOR LOOP......");
// Let us print the loop for printing 1 - 100 
let a = 1;

for(let i = 0; i<100 ; i++){
    console.log(a+i);
}
// This is the loop for printing 1 - 100

// Now let us see the forin loop......
let obj = {
    "Name":"Jeet",
    "ID": 1017,
    "Company": "RagBooms"
}
// Here we created a object and now we want to print it through the forin loop

// The for in loop is used to fetch the data from the object and print it.....
for (const key in obj) {
        const element = obj[key];
        console.log( element);
}