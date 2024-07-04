// Reduce is used to take the values from the array, and using only that much values that are being asked in the function, like if two values are asked in a function and array is of 10 length, then the function will take 2 values from initial index and then will return and return till all the values are not fullfil.....
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function red(a, b) {
    return a + b;
}

console.log(arr.reduce(red)); // This is the syntax of using the reduce function........