// This is the Practice for the ProtoType in here....

let a = {
    name: 'Jeet',
    interest: 'AutoMobile',
    run : ()=>{
        console.log('SELF RUN IN a')
    }
}

console.log(a)
// This was the code of just printing the object a
// Now lets try to add a prototype of a

let p ={
    run: ()=>{
        console.log('RUN')
    },
    name2: 'Raghvat!' // I have added a prototype Name2 here and now I want to print it, so I can directly print this now!!!
}
// If I only write this and then try to print a.run then It will give me a bigggggggg error like it did till now


// But now I have made the proto for p and a and combining it...!
// Now I am defining a protype of a into the p, so that a can take
a.__proto__ = p
a.run()
console.log(a.name2); // Directly printing the name2 which is Raghvat!......

// Now this will print the RUN coz we made here the proto for it.....
// And prototype mate apde __proto__ vapariye......!


// Now I have added here the run in a..
// So this will print now the SELF RUN IN a
// Cpz aama sauthi pela priority ape je object ma hoy ene...!