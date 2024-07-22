// Now we will try to make a loadScript function using this promises and all..

const loadScript = (src) =>{
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload = (script) => {
            resolve("Script has been loaded...!");
        }
        script.onerror = () => {reject(0)}
    })
}

let p = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
p.then((value) =>{
    console.log(value);
    return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value)=>{
    console.log("Second Script Ready");
}).catch(error=>{
    console.log("We are sorry but we are having problems loading this script");
})

// This loadscript function will help you to see if the script is loaded succesfully or not