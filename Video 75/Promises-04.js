// This is the js file for multiple promise handleres....!
// Multiple Handlers ---> Apde ek promise na multiple .then lakhiye ene multiple handelers kevay...!

let p1 = new Promise((resolve, reject)=>{
    console.log("This is the promise-01..!");
    setTimeout(() => {
        resolve("This is p1 resolved..!");
    }, 3000);
})

p1.then(value=>{
    console.log(value);
})

p1.then(value=>{
    console.log("This is second .then of p1");
})

p1.then(value=>{
    console.log("This is third .then of p1");
})

// Avij vastu ne kevay apde multiple promise handlers jema ek pachi bija bija bija and agad .then vadhtaj jaay ahiya....!