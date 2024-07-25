// This is promise api file....!

// Lets create basic 3 promises in here to understand the promise api here....!

let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 1")
    }, 10000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 2")
    }, 2000);
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve("Value 3")
        reject(new Error("This is an error"));
    }, 100);
})

// let p5 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Value 3")
//     }, 3000);
// })

// p1.then(value=>{
//     console.log(value);
// })

// p2.then(value=>{
//     console.log(value);
// })

// p3.then(value=>{
//     console.log(value);
// })


// Promise API means ke apde je promises banai hoy ema thi specific promises ne select kari sakiye and we can deal with it...!

// Jyare mane na kbr hoy ke aa individually darek promise ketlo time lese resolve thava ma tyare hu promise api ne use karis and ema jyare mare badhi promise ek sathe resolve karvi hoy tyare hu ema promise.all use karis...!
// let p4 = Promise.all([p1,p2,p3]); // This will help me print all the values of the promises I have mentioned in here, like here I have mentioned p1,p2,p3....
// And promise.all karvathi mane badhi promise je b hu bracket ma mention karis ae mane ahiya batavse.. and ae promise ni value ae mane ahiya print karine apse...!
// .all matlab badhane ne select karse and emni value apse je resolve thase ae badha...!

// Promise.all will only work if all the promises are resolved, if anyone of the promise is been rejected, then the promise.all won't even work the way it must....!
// let p4 = Promise.allSettled([p1,p2,p3,p5]); // See here the promise.all didnt worked, coz one of the promise is been rejected and is showing error....!
// This way the promise.all will only work when the promises are all resolved..!!!

// Now lets talk about the promise.race, its an interesting topic
// Like this will race the all the resolved promises...
// Like here for p1,p2&p3 which will resolve fast, it will find that...
// let p4 = Promise.race([p1,p2,p3]);
// Here this will return me the promise whivh will require the shortest time to become resolved....!
// Je b sauthi pela resolve thay ae ahiya ene print kari dese
// And this not only works for the resolved ones but also for the reject also
// Like here I just made 100 miliseconds to p3 and it is in reject and after running the promise.race its showing me the error, coz the error is returned firstly
// Coz ahiya apde race ma badha promise vache race thase, ke pela su resolve thase and pela su reject thase, je promise pela work karse, ae ahiya return thaine print thase..

p4.then(value=>{
    console.log(value);
})