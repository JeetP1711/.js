// Now we will try to make a loadScript function using this promises and all..

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload = (script) => {
            resolve("Script has been loaded...!");
        }
        script.onerror = () => {
            reject(0);
        }
    })
}

let p = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
p.then((value) => {
    console.log(value);
    return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value) => {
    console.log("Second Script Ready");
}).catch(error => {
    console.log("We are sorry but we are having problems loading this script");
})

// This loadscript function will help you to see if the script is loaded succesfully or not

// Explanation of the code given below inline wise....

// const loadScript = (src) =>{ // Here we created a variable named loadScript with the data type src, which means it will take the src link of the js....!
//     return new Promise((resolve, reject)=>{ // This is the syntax of the basic promise in heree...
//         let script = document.createElement("script"); // Here we created a element which will take the script of the loadScript src.....
//         script.type = "text/javascript"; // Here the script type of the script is javascript this means that...
//         script.src = src; // Here this will take src as the source of the script given in the loadscript...
//         document.body.appendChild(script); // this will append a new child in here which means ek navu element banavse node ma
//         script.onload = (script) => { // Agar script load thai jase to aa thase aama
//             resolve("Script has been loaded...!"); // Load thai jase to resolve baki reject
//         }
//         script.onerror = () => {reject(0)} // AGar error avse to script reject thase.....
//     })
// }
