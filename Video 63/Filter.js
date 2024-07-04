// Filter is used to filter out the specific values from the array, like filtering and showing just the numbers greater than 7.....
let array = [1, 34, 2, 6, 2, 17, 13];

let greater_than_7 = ((e)=>{
    if(e>7){
        return true;
    }
    return false;
}) // I created a function here which returns value true when the number is greater than seven, or else it will return false

console.log(array.filter(greater_than_7)); // I am referencing the array with the greater_than_7 function above I made and if the element is greater than 7 than only the numbers would be shown, coz of true, false.......