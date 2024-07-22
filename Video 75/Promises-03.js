// In this we will learn about the promise chaining in the JavaScript...
// Promise Chaining means apde multiple level par promise na .then na pachi .then lagai ae and so on chalavta jaiye, ene kevay promise chaining

// Like loop jevu ke ek pate pachi biju, bija pachi tijo and so on and on.....
// Giving an example....--->

// Promise Chaining no matlab ki je apde ek promise hoy ena attached biji khasi badhi promise hu extend kari saku and ek n pachad hu khasi badhi promises apply kari saku...
// Means ek ni pachad biji, bija ni pachad tiji and so on and on and on
// Agad mare ema gamme tetli nakhvi hoy etli nankhay...

let p1 = new Promise((resolve, reject) => {
    console.log("This is the main promise...!");
    setTimeout(() => {
        resolve("Main Promise Resolved After 2s...!");
    }, 2000);
})

p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        console.log("This is Second Promise...!");
        setTimeout(() => {
            resolve("After 2s in derived promise....!");
        }, 2000);
    })
    return p2;
}).then((value) => {
    console.log("We are done");
    return 2;
}).then(value => {
    console.log("We are pakka vala done now....!");
})

// Explaination of the code above.....!

// Explanation of code inline....

// let p1 = new Promise((resolve, reject) => { // Creating a basic promise here with the name p1....
//     console.log("This is the main promise...!"); // Consoling the basic in the promise for the refrence of us
//     setTimeout(() => { // This is here the basic setTimeout function for the differentiation of our program...
//         resolve("Main Promise Resolved After 2s...!"); // This is the resolve for the p1 promise...
//     }, 2000); // And here the 2s timeout Interval for this....
// }) // Here the promise p1 is finished..

// Now lets delve into the .then() part in here
// p1.then((value) => { // Its the basic .then for the p1...
//     console.log(value); // Consoling the value of the resolve of the p1 promise
//     let p2 = new Promise((resolve, reject) => { // Now here creating a new promise p2 in here in the .then of p1..
//         console.log("This is Second Promise...!"); // Creating the promise like the basic way....!
//         setTimeout(() => { // This is here the basic setTimeout function for the differentiation of our program...
//             resolve("After 2s in derived promise....!"); // This is the resolve for the p2 promise...
//     }, 2000); // And here the 2s timeout Interval for this....
//     })
//     return p2; // Here is the catch here I am returning the promise p2 from here in the .then(), which means now if I need to take the value in the next .then()
// Then it will call the p2..
// Returning value means now I am triggering the .then after this .then then it will trigger the promise p2, tuk ma p2 call thase ave...!
// })