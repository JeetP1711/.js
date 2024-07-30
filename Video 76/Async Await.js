// This is the file containing the async await...!
// Let us try to fetch the data of the weather and I am trying to make the weather fetching console

async function TheMain(){

async function getWeatherData(){
    let GujaratWeather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("21 Degree");
        }, 1000);
    })

    let MumbaiWeather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("27 Degree");
        }, 7000);
    })

    console.log("Fetching Gujarat Weather.... Please Wait!");
    let GujaratW = await GujaratWeather;
    console.log("Fetched Gujarat Weather: "+ GujaratW);
    console.log("Fetching Mumbai Weather.... Please Wait!");
    let MumbaiW = await MumbaiWeather;
    console.log("Fetched Mumbai Weather: "+ MumbaiW);
    return [GujaratW, MumbaiW]
}

function Rag(){
    console.log("I am not waiting, coz I am the normal function without await and async");
}

async function Rag1(){
    console.log("I am waiting, coz I am the function with await and async which means I will be loaded at last after all the promises are synced...!");
}



console.log("Welcome to Weather Forecast!!");
let b = Rag();
let a = await getWeatherData();
let c = await Rag1();
}


TheMain();