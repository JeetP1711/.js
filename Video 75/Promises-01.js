// What are promises?
// Promises matlab tuk ma ke evu ke apane assurity ape ke kaam thase to aa madse tamne, and kaam nai thay to aa malse
// Promise matlab ya to solve thase ya to fail tthase but apane notificstion apse and madse ahiya.....
// And ahiya apde banev lai sakiye means ya to resolve ya to error, or say rejected in the code...

// let p1 = new Promise(function(resolve, reject){
//     resolve("This is resolved");
// })
// This is the basic syntax of a promise in here..

// Promise matlab ki ahiya me ek code lakhyo and agar ae resolve thase to mane aa print karine apse baki nai...

// Ave mare ek advance ma samajiye thodu

// I will try to create a setTimeout function and ema hu promise nu resolve and reject nakhine check karis

let p1 = new Promise(function(resolve, reject){
    console.log("Promise is Pending...");
    setTimeout(() => {
        console.log("After 4 seconds");
        resolve("This promise is resolved");
    }, 4000);
})
console.log(p1);
// This promise will be resolved after 4s , coz of the timeOut function been here...
// And now me jyare ahiya p1 ne print karyu che to ae pela load thai jase
// As javaScript aek asynchronous language che to ae sada console.log ne pela print karse, bhale gamme tetlo moto code hoy, pela sadu badhu load thase pachi timeout varu function load thase
// To ahiya starting ma to pending aj batavse, co resolve to 4s pachi thase......

// Ave aa code nu explanation....

// let p1 = new Promise(function(resolve, reject){ // Aa che basic syntax, aek promise banavano....., me ahiya lakhyu 
// let p1 ----> Apde ek variable let karyo
// new ----> matlab ahiya ek navi promise banai
// Promie(function(resolve, reject)) ---> ahiya promise naam nu function che jema 2 vastu thai sake, peli resolve and biji reject
//     console.log("Promise is Pending..."); // Aa vastu sauthi pela tarat print thai jase which shows ke aju promise pending che
//     setTimeout(() => { // Ahiya ek me timeOut function banayo je mane ahiya 4s no time apse, matlab 4s pachi aa run thase
//         console.log("After 4 seconds"); // Aa to just emj print karyu to know 4s over
//         resolve("This promise is resolved"); // Ave 4s pachi aa promise finaly resolve thai jase and ave jaine aa problem fulfilled thase
//     }, 4000); // Aano matlab ke 4000 ms pachi aa load thase---> i.e. 4s....
// }) // Promise finished here
// console.log(p1); // Ahiya apde p1 ni condition print kariye che ki kai state ma che aa promise haal
// And ahiya ae pending maj batavse, coz ahiya apde ene 4s thaya pela ni situation batavse ahiya, like aa ne kbr nai ke aa resolve thsi ke nai, coz timeOut 4s pachi thase
// Coz ena mate aju aa resolve thayu aj nathi etle, and aa badhano karan che asynchronous nature of JS.....