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

let p2 = new Promise((resolve,reject)=>{
    console.log("Promise is Pending waiting...");
    setTimeout(() => {
        console.log("After 4 seconds P2");
        reject(new Error("This is an error for the promise P2 with .catch(error)"))
    }, 4000);
})
p2.catch(error=>{
    console.log(error);
})

let p3 = new Promise((resolve, reject)=>{
    console.log("The promise is waiting...");
    setTimeout(() => {
        console.log("After 4 seconds P2");
        reject(new Error("This is an error passing this promise showing with .then(error)"));
    }, 4000);
})
p3.then((value)=>{
    console.log(value);
},(error=>{
    console.log(error);
}))

// Now explanation of each code in here....


// let p1 = new Promise(function(resolve, reject){ // This is the basic syntax of a promise, and as explained in Promise-01.js ...... 
//     console.log("Promise 1 is Pending..."); // Here we are printing a basic console.log which shows the promise is still in the pending state at intial
//     setTimeout(() => { // This is a setTimeOut function for the promise being resolved/rejected
//         console.log("After 4 seconds P1"); // This is print for the after 4s....
//         resolve("This promise is resolved"); // This is the promise being resolved here by calling the resolve...
//     }, 4000); // This is the 4s setTimeout function.....
// })
// p1.then(value=>{ // Apde ahiya .then vapryu che jeno matlab ki aa promise resolve thai jase pachi su thase?
// To ena mate apde ahiya vapryu che .then ---> means ke ave ahiya jyare aa promsie puri thase tyare aa vastu arvani
// To ahiya apde aa .then(value) ---> matlab ki .then ma apde value lidhi resolve ni and ave ahiya print karisu
//     console.log(value) // Ahiya apde je value promise na resolve ni lidhi, ae ahiya print kari...
// }) // And ahiya aa arrow function and puro function ahiya puro thayo
// With this the resolve promise with .then() is finished here.......