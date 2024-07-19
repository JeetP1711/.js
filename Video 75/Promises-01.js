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
    console.log("Promise 1 is Pending...");
    setTimeout(() => {
        console.log("After 4 seconds P1");
        resolve("This promise is resolved");
        console.log("This promise is resolved");
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
// console.log("This promise is resolved"); // Apde ahiya just apda mate ahiya promise is resolved evu print karyu
//     }, 4000); // Aano matlab ke 4000 ms pachi aa load thase---> i.e. 4s....
// }) // Promise finished here
// console.log(p1); // Ahiya apde p1 ni condition print kariye che ki kai state ma che aa promise haal
// And ahiya ae pending maj batavse, coz ahiya apde ene 4s thaya pela ni situation batavse ahiya, like aa ne kbr nai ke aa resolve thsi ke nai, coz timeOut 4s pachi thase
// Coz ena mate aju aa resolve thayu aj nathi etle, and aa badhano karan che asynchronous nature of JS.....

// Now lets do this same for the reject.....


let p2 = new Promise(function(resolve, reject){
    console.log("Promise 2 is Pending...");
    setTimeout(() => {
        console.log("After 4 seconds P2");
        reject= new Error("This promise is rejected");
        console.log(reject)
    }, 4000);
})
console.log(p2);

// Ahiya me ek aa code lakhyo jema upar vara ni jem ahiya apde reject ne call karyo
// And reject ma ek error store kari dese, error no matlab ki je apde console ma errors joiye che ne evi error batavse ahiya
// Like apde console ma red red error joiye evi error ne ahiya apde banai che

// Ave explanation of this code...

// let p2 = new Promise(function(resolve, reject){  // Same as above no need for explanation... ig...
//     console.log("Promise 2 is Pending..."); // Same as above no need for explanation... ig...
//     setTimeout(() => { // Same as above no need for explanation... ig...
//         console.log("After 4 seconds P2"); // Same as above no need for explanation... ig...
//         reject= new Error("This promise is rejected"); // Ahiya me ek error banai jema me lakhyu ke This promise is rejected..
// Error matlab ki ahiya je b avse ae error ma batavse, as I explained above.....
//         console.log(reject) // And ahiya me ae reject ne print karai didhu console ma...
//     }, 4000); // And the timeout for 4s here....
// })
// console.log(p2);


// And aama apde aa basics of Promises Ahiya Patayu....
// Basics Of Promises cleared here......