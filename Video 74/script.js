// What are Events?
// Actually Events are those which we do with the elements thorugh the mouse, keyboard or any way we interact with the elements in here...
// Events means je b elements ahiya apde hoy ema apde alag alag vastu kariye eni sathe ene events kevay
// Like ek elements upar me click karyu, k dbl click karyu ke ene copy karyu aa badhi events kevay, nd aa badhi specific mouse events che
// Mouse Events -----> https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events    // Aa link upar mouse ni badhi Events kbr padi jase
// Keyboard Events ----> https://developer.mozilla.org/en-US/docs/Web/API/Element#keyboard_events // Aa link upar keyboard ni badhi events kbr padi jase


let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML = "I am a <b>Big Box</b> now..";
})
// Ahiya .addEventListner no matlab ki ahiya hu ek evi event add karu chu, jenathi jyare b hu click karis tyare aa condition apply thase, jemki jyare hu aa btn par click karis tyare je arrow function ma lakhelu che ae apply thai jase and run thase
// AddEventListener thi ama event add thase like jyare browser aa element par aa event listen karse tyare avu thase em....