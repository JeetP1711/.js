// This will teach the .then and .catch in here

// Firstly I will just write down the code here...

let p1 = new Promise(function (resolve, reject) {
    console.log("Promise 1 is Pending...");
    setTimeout(() => {
        console.log("After 4 seconds P1");
        resolve("This promise is resolved");
    }, 4000);
})
p1.then(value => {
    console.log(value)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is Pending waiting...");
    setTimeout(() => {
        console.log("After 4 seconds P2");
        reject(new Error("This is an error for the promise P2 with .catch(error)"))
    }, 4000);
})
p2.catch(error => {
    console.log(error);
})

let p3 = new Promise((resolve, reject) => {
    console.log("The promise is waiting...");
    setTimeout(() => {
        console.log("After 4 seconds P2");
        reject(new Error("This is an error passing this promise showing with .then(error)"));
    }, 4000);
})
p3.then((value) => {
    console.log(value);
}, (error => {
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

// let p2 = new Promise((resolve,reject)=>{ // This is the basic syntax of a promise, and as explained in Promise-01.js ......
//     console.log("Promise is Pending waiting..."); // Here we are printing a basic console.log which shows the promise is still in the pending state at intial
//     setTimeout(() => { // This is a setTimeOut function for the promise being resolved/rejected
//         console.log("After 4 seconds P2"); // This is print for the after 4s....
//         reject(new Error("This is an error for the promise P2 with .catch(error)")); // Ahiya me ek navi error banai aa reject function ma
// Ano matlab ke ahiya me reject naam na function ma ek new Error banai jenu naam me error aj rakhyu che, and ema me ek vastu lakhi ke "This is an error for the promise P2 with .catch(error)"
// And ave aa promise 4s pachi reject thai jase, coz ahiya apde enu 4s nu setTimeout mukyu che etle...
// And ave niche apde aa error ne catch karisu
//     }, 4000); // This is the 4s setTimeout function.....
// })
// p2.catch(error=>{ // This .catch means, ahiya apde value catch karisu error
// Catch means kai b hoy ae apde promise mathi eni value catch karisu like
//     console.log(error); // This will print the catched error from the promise p2.. in here.... after the promise becomes rejected...
// }) // And ahiya aa arrow function and puro function ahiya puro thayo
// With this the reject promise with .catch() is finished here.......

// let p3 = new Promise((resolve, reject)=>{ // This is the basic syntax of a promise, and as explained in Promise-01.js ......
//     console.log("The promise is waiting..."); // Here we are printing a basic console.log which shows the promise is still in the pending state at intial
//     setTimeout(() => { // This is a setTimeOut function for the promise being resolved/rejected
//         console.log("After 4 seconds P2"); // This is print for the after 4s....
//         reject(new Error("This is an error passing this promise showing with .then(error)")); // Ahiya me ek navi error banai aa reject function ma
// Ano matlab ke ahiya me reject naam na function ma ek new Error banai jenu naam me error aj rakhyu che, and ema me ek vastu lakhi ke "This is an error for the promise P2 with .catch(error)"
// And ave aa promise 4s pachi reject thai jase, coz ahiya apde enu 4s nu setTimeout mukyu che etle...
// And ave niche apde aa error ne catch karisu apde .then() no use karine...
//     }, 4000); // This is the 4s setTimeout function.....
// })
// p3.then((value)=>{
// Ahiya me ek arrow function banayu .then ne use karine and ema me ek value input kari and nakhi ahiy....
//     console.log(value); // Ahiya ae value me print karai agar aa mari promise fulfill thai hoy ke like resolve thai hoy to mane aa value return thase resolve
// But ahiya apda case ma resolve to thatuj nai...
// },(error=>{ // And aa ek if else condition jevu che, if resolve thay to console.log(value) naitar error...
//     console.log(error); // And agar reject thay to ahiya error print kari dese....
// })) // And ahiya aa arrow function and puro function ahiya puro thayo
// ANd aani sathe mare aa promise with the help of the reject using .then() puri thai.....!


// With this the promises basics-02 over