// What are arrays???
// Arrays are a collection of different datatypes in here javascript.....
// Arrays are variables which can store more than one value.
// And the values can also be of different types and data types like bool, var and string in one array...
// Arrays are mutable
let arr = [1, 2, 3, 4, 5, 6, 7];
// Index   0,1,2,3,4,5,6
console.log(arr);
console.log("Length of Array-> ", arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
// I can even change the arrays value in here
arr[0] = 6999;
console.log("Changed value of arr[0] -> ", arr[0]);
// In console, type of array is considered as the object..
console.log("Type of Array arr-> ", typeof arr);

// I can even convert this array into the string
// By using the toString property in JS
console.log("Converting the array into string-> ", arr.toString()); // By this the array is now converted into the string...
console.log(arr.join(" and "));
// The join func also converts the array into to string and even more instead of , we can separate this string elements by whatever we want, like above i have converted the , into and, so the elements are separated by and......
// Now lets talk about some functions which are important like push(), pop(), shift(), unshift().....
// arr.pop(); // This will remove the element from the behind which is 7 here......   // Last index removed
// arr.push(1); // This will add the element 1 at the behind in the index[6], pop and push both works at the last element // Last index added
// arr.push("Jeet");
// // Push adds element and pop removes the element
// arr.shift(); // This will remove the element from front with index 0, which is 1 here..., means it is like pop but from front index 1 // First index removed
// arr.unshift(10); // This will add the element 10 at the front with index[0], means it is like push but from front.... // First index added
// Now lets learn about concat in arrays
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [9, 8, 7];
// I have taken this three arrays
// Now let's concat this three arrays
// console.log(a1.concat(a2,a3)); // Here I have concated values of a2 and a3 in a1, and this way both a2 and a3 are here concated in a1....
// And the concat doesn't change the value of arrays here
// Sort in js
// a3.sort(); // This will sort the whole a3 array to 7,8,9
// Sort function is used to sort the array