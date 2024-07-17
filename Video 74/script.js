// What are Events?
// Actually Events are those which we do with the elements thorugh the mouse, keyboard or any way we interact with the elements in here...
// Events means je b elements ahiya apde hoy ema apde alag alag vastu kariye eni sathe ene events kevay
// Like ek elements upar me click karyu, k dbl click karyu ke ene copy karyu aa badhi events kevay, nd aa badhi specific mouse events che
// Mouse Events -----> https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events    // Aa link upar mouse ni badhi Events kbr padi jase
// Keyboard Events ----> https://developer.mozilla.org/en-US/docs/Web/API/Element#keyboard_events // Aa link upar keyboard ni badhi events kbr padi jase


// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     document.querySelector(".box").innerHTML = "I am a <b>Big Box</b> now..";
// })
// Ahiya .addEventListner no matlab ki ahiya hu ek evi event add karu chu, jenathi jyare b hu click karis tyare aa condition apply thase, jemki jyare hu aa btn par click karis tyare je arrow function ma lakhelu che ae apply thai jase and run thase
// AddEventListener thi ama event add thase like jyare browser aa element par aa event listen karse tyare avu thase em....

// let btn = document.getElementById("btn"); // Ana thi apde ek variable banayo and ema apde btn id ne target kari je ek button che

// btn.addEventListener("click",()=>{ // Aa line no matlab ke jyare b click naam ni event aama listen thase aa button par tyare aa arrow function ne call karvanu
// Means jyare b button par click thase tyare aa vastu thase
// document.querySelector(".box").innerHTML = "I am a <b>Big Box</b> now.."; // And jyare button click thase tyare aa run thase
// Means ke jyare hu button click karis tyare aa .box nu text change thai jase to ---> "I am a <b>Big Box</b> now..";
// }) // Here the function ends.....!

let btn2 = document.getElementById("btn");

btn2.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "I am a <b>Big Box</b> now..";
})

// This is same as above just aama event dblclick che, means when I would double click on the button, this will change the content as mentioned...

// btn.addEventListener("dblclick", () => { // This will addEventListner for double click means whenever the button will listen double click, it will change the content of the .box to mentioned ---> "I am a <b>Big Box</b> now.."