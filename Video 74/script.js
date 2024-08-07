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

// let btn2 = document.getElementById("btn");

// btn2.addEventListener("dblclick", () => {
//     document.querySelector(".box").innerHTML = "I am a <b>Big Box</b> now..";
// })

// This is same as above just aama event dblclick che, means when I would double click on the button, this will change the content as mentioned...

// btn.addEventListener("dblclick", () => { // This will addEventListner for double click means whenever the button will listen double click, it will change the content of the .box to mentioned ---> "I am a <b>Big Box</b> now.."


// let btn3 = document.getElementById("btn");

// btn3.addEventListener("contextmenu", () => {
//     document.querySelector(".box").innerHTML = "I am a <b>Big Box</b> now..";
// })

// This is same but unless click & double-click, now it's the right click which is here called as contextmenu here
// contextmenu ----> right click....!
// btn3.addEventListener("contextmenu", () => { // This will listen to the event of contextmenu i.e. ---> right click....!



// Now let's learn about the keyboard events...
// document.body.addEventListener("keydown", (e)=>{
//     console.log(e);
// })
// This will print the keys, pressed in the keyboard while on the website or page

// document.body.addEventListener("keyup", (e)=>{
    //     console.log(e);
    // })
    // This will print the keys, after releasing the pressed keys, while on the website or page
    
    // KeyBoard Events --->
    
    // keydown is a event which means it reads that, is there any key pressed in the keyboard, and we are storing that key in the variable e mentioned in the arrow function
    // And we are printing that function in the console...
    // document.body.addEventListener("keydown", (e)=>{ // keydown here means that whenever I press any key on the keyboard, it will store that key in the e and it will console.log its value in the console
    // KeyDown Means pressing the key will listen the event
    
    
    // And there's another event of keyboard which is similr to this
    
    // document.body.addEventListener("keyup", (e)=>{ // This is the keyup and keyup means it will listen to the event when u release any key
    // Like I have pressed s, but when I release the key, it will listen to the event and will store its value to the e and console log, when the pressed key is released
    // This is useful for the shortcut things...
    
    //     console.log(e);
    // })

    
    //     console.log(e.key, e.keyCode); // e.key ---> prints the key // e.keyCode ---> prints the code of the key
    // I can even print this way too, only the required items of the key... like here I am printing the key and keyCode
    // keyCode means the value of the key universaly, just like the ascii value of the key... that is referred as a keyCode