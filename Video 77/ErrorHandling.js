// Error Handling means handling the errors in a perfect way that it dont show any error in and from it
// Like I am handling the error so that code further doesn't show any error and it becomes errorless and the code doesn't interruot itself in between...!

// Here I have some code of normal and I want the error to be catched from this code

// For handling the error the try and catch method is used...!

setTimeout(() => {
    console.log("Fetching Username And Password Of R-098....... Please Wait.....!");
}, 1000);
setTimeout(() => {
    console.log("Making Way Through The Threads....... Please Wait.....!");
}, 3000);
setTimeout(() => {
    console.log("Unlocking through the DeepWebMedia....... Please Wait.....!");
}, 5000);
setTimeout(() => {
    console.log("Delving In DeepDarkWeb....... Please Wait.....!");
}, 6000);
setTimeout(() => {
    console.log("Found A Link In SilkRoadMedia....... Please Wait.....!");
}, 7000);
setTimeout(() => {
    console.log("Fetching Username And Password Of R-098.......Successfullllllllllllll.....!");
}, 10000);

// Try And Catch Using here
// try {
//     console.log(R-098);
// } catch (error) {
//     console.log("There is an Error Fetching The Username And Password Of R-098");
// }

// HERE I HAVE MADE A ERROR AND TRIED TO WRITE OUT THE R-098 IN HERE, WHICH ISN'T MENTIONED ANYWHERE SO ITS AN ERROR IN THIS SIDE, AND I HAE TRIED TO CATCH THE ERROR USING TRY AND CATCH METHOD
// TRY AND CATCH ENSURES THAT THE ERROR IS BEING CATCHED IF THERE'S ANY ERROR AND WE CAN CONSOLE THE THING WHICH WE WANT HERE TO EXCECUTE, SO THAT THE CODE IS NOT INTERRRUTED, AND WE CAN HAVE THE REMAINING CODE AS IT IS AND WE CAN HAVE THE CODE AS IT IS....!
// THIS WAY TRY AND CATCH IS USED....!

// But there's an other catch here too
// try {
//     setTimeout(() => {
//         console.log(R-098);
//     }, 2000);
// } catch (error) {
//     console.log("Error...1");   
// }
// Now this will show error coz the try catch method doesn't take the errors from the SetTimeout....!
// Coz It don't take errors from the timeout means aa scheduled errors nai batave aa just tarat vara errors batavse
// There's a solution here for it tooo~~~~
// try {
//     setTimeout(() => {
//         try {
//             console.log(R-098);
//         } catch (error) {
//             console.log("This is error");
//         }
//     }, 2000);
// } catch (error) {
    
// }