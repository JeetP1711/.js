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
for (const key in obj) { // Here we made a const named key which will fetch the keys like name, id and company from the object obj
        const element = obj[key]; // This will fetch the data from the obj key and will store here
        console.log( element); // And this will print the element here..........
        console.log(key, element); // And this will print the element along with the keys.....
}

// Now ForOf Loop
// This loop is used to print each element or say character from the array

for (const c of "Jeet") {
    console.log(c);
}
// This is the loop which will print each letter in different line of word "Jeet".