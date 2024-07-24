// This is promise api file....!

// Lets create basic 3 promises in here to understand the promise api here....!

let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 1")
    }, 1000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 2")
    }, 2000);
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 3")
    }, 3000);
})

p1.then(value=>{
    console.log(value);
})

p2.then(value=>{
    console.log(value);
})

p3.then(value=>{
    console.log(value);
})
