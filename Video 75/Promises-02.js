// This will teach the .then and .catch in here

// Firstly I will just write down the code here...

let p1 = new Promise(function(resolve, reject){
    console.log("Promise 1 is Pending...");
    setTimeout(() => {
        console.log("After 4 seconds P1");
        resolve("This promise is resolved");
    }, 4000);
})
p1.then(value=>{
    console.log(value)
})

let p3 = new Promise((resolve, reject)=>{
    console.log("The promise is waiting...");
    setTimeout(() => {
        console.log("After 4 seconds P2");
        reject(new Error("This is an error passing this promise"));
    }, 4000);
})
p3.then((value)=>{
    console.log(value);
},(error=>{
    console.log(error);
}))