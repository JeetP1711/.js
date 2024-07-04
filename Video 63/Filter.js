// Filter is used to filter out the specific values from the array, like filtering and showing just the numbers greater than 7.....
let array = [1, 34, 2, 6, 2, 17, 13];

let greater_than_7 = ((e)=>{
    if(e>7){
        return true;
    }
    return false;
}) // I created a function here which returns value true when the number is greater than seven, or else it will return false

console.log(array.filter(greater_than_7)); // I am referencing the array with the greater_than_7 function above I made and if the element is greater than 7 than only the numbers would be shown, coz of true, false.......
// I can even write whole the function in the filter bracket like...
// console.log(array.filter(((e)=>{
//     if(e>7){
//         return true;
//     }
//     return false;
// }))); // I can even write this way but it would be more complicated and hard to understand that's why we specify the whole function from here.......