// This will teach the .then and .catch in here

// Firstly I will just write down the code here...

let p1 = new Promise(function(resolve, reject){
    console.log("Promise 1 is Pending...");
    setTimeout(() => {
        console.log("After 4 seconds P1");
        resolve("This promise is resolved");
        console.log("This promise is resolved");
    }, 4000);
})
console.log(p1);

p1.then(value=>{
    console.log(value)
})