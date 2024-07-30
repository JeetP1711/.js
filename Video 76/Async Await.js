// This is the file containing the async await...!
// Let us try to fetch the data of the weather and I am trying to make the weather fetching console

function getWeatherData(){
    let GujaratWeather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("21 Degree")
        }, 1000);
    })

    let MumbaiWeather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("27 Degree")
        }, 7000);
    })
    GujaratWeather.then(value=>{
        console.log(value)
    })
    MumbaiWeather.then(value=>{
        console.log(value)
    })
}