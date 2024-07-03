/*
What are Arrays?
Arrays are the data type which can hold more that one data type in it, like it can hold a string, a number and a bool value at same time in one array.
Like I can store a number, a string, and a bool in one same array without any hesitation in here...

*/
let arr = [1,2,3,4,5,6,7];

console.log(arr); // This will print the whole array in here
console.log(arr.length); // This will print the length of the array in here
console.log(arr[1]); // This way I can even print the specific element of the array by giving the index number with the array name......

arr[0]= 6969; // If I want to change the specific value of the array than I need to write and code it like this, so now the value of a[0] is now 6969 and now the array is been updated with the new value. So this way array is mutable and can be updated like this.
console.log(arr[0]); // Now the value of arr[0] is updated to 6969.....
console.log(typeof(arr)); // This is the way to print the type of the data type arr and this will show object
// The console determines the array as an object here

// Now if I want to convert my array into string, than I can do that too
console.log(arr.toString()); // arr.toString(), will convert the array into string here and this will print // 1,2,3,4,5,6,7
// This way the array will get printed like a string separated by commas....
console.log(arr.join(" and "));
// The join func also converts the array into to string and even more instead of , we can separate this string elements by whatever we want, like above i have converted the , into and, so the elements are separated by and......
// Now lets talk about some functions which are important like push(), pop(), shift(), unshift().....
arr.pop(); // This will remove the element from the behind which is 7 here......   // Last index removed
arr.push(1); // This will add the element 1 at the behind in the index[6], pop and push both works at the last element // Last index added
arr.push("Jeet");
// Push adds element and pop removes the element from behind
arr.shift(); // This will remove the element from front with index 0, which is 1 here..., means it is like pop but from front index 1 // First index removed
arr.unshift(10); // This will add the element 10 at the front with index[0], means it is like push but from front.... // First index added
// Shift removes element and unshift adds the element from front
// I can even delete the elements using the index number from the array
delete arr[5]; // This deletes the array element on 5th index of the array
console.log(arr); // As its seen in here the arr has no element on its 5th index now, its showing empty...