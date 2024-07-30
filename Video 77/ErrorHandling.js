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
try {
    console.log(R-098);
} catch (error) {
    console.log("There is an Error Fetching The Username And Password Of R-098");
}
