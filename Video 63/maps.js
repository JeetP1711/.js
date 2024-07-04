// Map is used to generate the new array from the reference of the other array, without manually writing the array elements
let array = [1, 34, 2, 6, 2, 17, 13];
let newArr = []; // Here I created an empty array and now I want to give all the values of upper array to the newArr

// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; // Getting all the values of the array 
//     newArr.push(element**2); // push is the function we studied earlier, and now we are pushing the elements' square from array to newArr    
// }

// console.log(newArr); // FInally printing the newArr and checking
// This is the basic normal method of doing it

let NewArray = array.map((e) => { // This is the syntax of map, we are giving the reference of array in this and creating a new array using map
    return e ** 2; // returning the square of elements in NewArray
})

console.log(NewArray); // Checking the values