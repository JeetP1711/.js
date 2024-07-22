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
}).then(value=>{
    console.log("We are pakka vala done now....!");
})