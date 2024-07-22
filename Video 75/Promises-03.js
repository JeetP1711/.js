// In this we will learn about the promise chaining in the JavaScript...
// Promise Chaining means apde multiple level par promise na .then na pachi .then lagai ae and so on chalavta jaiye, ene kevay promise chaining

// Like loop jevu ke ek pate pachi biju, bija pachi tijo and so on and on.....
// Giving an example....--->


let p1 = new Promise((resolve,reject)=>{
    console.log("This is the main promise...!");
    setTimeout(() => {
        console.log("After 2s...!");
    }, 2000);
})