// Map is used to generate the new array from the reference of the other array, without manually writing the array elements
let array = [1,34,2,6,2,17,13];
let newArr = []; // Here I created an empty array and now I want to give all the values of upper array to the newArr

for (let index = 0; index < array.length; index++) {
    const element = array[index]; // Getting all the values of the array 
    newArr.push(element); // push is the function we studied earlier, and now we are pushing the elements from array to newArr    
}

console.log(newArr); // FInally printing the newArr and checking
// This is called map in js........