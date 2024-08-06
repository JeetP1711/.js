// This is the Practice for the ProtoType in here....

let a = {
    name: 'Jeet',
    interest: 'AutoMobile'
}

console.log(a)
// This was the code of just printing the object a
// Now lets try to add a prototype of a

let p ={
    run: ()=>{
        console.log('RUN')
    }
}
// If I only write this and then try to print a.run then It will give me a bigggggggg error like it did till now


// But now I have made the proto for p and a and combining it...!