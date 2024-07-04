/*
What are Arrays?
Arrays are the data type which can hold more that one data type in it, like it can hold a string, a number and a bool value at same time in one array.
Like I can store a number, a string, and a bool in one same array without any hesitation in here...
*/
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr); // This will print the whole array in here
console.log(arr.length); // This will print the length of the array in here
console.log(arr[1]); // This way I can even print the specific element of the array by giving the index number with the array name......

arr[0] = 6969; // If I want to change the specific value of the array than I need to write and code it like this, so now the value of a[0] is now 6969 and now the array is been updated with the new value. So this way array is mutable and can be updated like this.
console.log(arr[0]); // Now the value of arr[0] is updated to 6969.....
console.log(typeof (arr)); // This is the way to print the type of the data type arr and this will show object
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
// When the delete is used, so it doesn't delete the alloted memory from there, it just deletes the value, but the memory of that element is still present there
console.log(arr[5]); // Here the output shows undefined, means the memory is still allocated for the arr[5], its just its not showing the value of arr[5]
// Now lets learn about concat in arrays
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [9, 8, 7];
// I have taken this three arrays
// Now let's concat this three arrays
console.log(a1.concat(a2, a3)); // Here I have concated values of a2 and a3 in a1, and this way both a2 and a3 are here concated in a1....
// And the concat doesn't change the value of arrays here
// Concat doesn't change the array, it just mixes the arrays or whatever datatype or variable, you want to mix it in there, that gets mixes up
let n1 = "Jeet"; // Here, I have took a string and m trying to mix it with the array..
console.log(a1.concat(n1)); // And tada, I can mix this with the array in here
console.log(arr.concat(n1, a1, a2, a3)); // And here I have mixed all the arrays along with the string and its showing the output directly by mixing all the things up.
// Sorting in js
// To sort array in js, u just need to write .sort() and it will sort the array automatically
let arr2 = [23, 11, 3, 67, 89, 4, 55, 67, 69];
// arr2.sort();
console.log(arr2);
// This will give you the sorted array by itself, you don't need to write the big big codes, like that been in c and cpp.......
// arr2.splice(1,3); // This will splice 3 elements from starting with index 1
// Splice works like, splice(1,3), so this means 1st in bracket shows the index number to select, so here we selected index 1, (i.e. 11 number) and the 2nd number in the bracket shows that how much number to splice (i.e. delete from the array), so here we spliced 3 numbers from index 1, (i.e. 11,3&67 this numbers will be spliced from the array)
// And the output will be....... ---> [ 23, 89, 4, 55, 67, 69 ] [spliced array]
// Original Array ------> [23, 11, 3, 67, 89, 4, 55, 67, 69]->[Original Array]

// Now adding the numbers with splicing.............
// arr2.splice(1, 3, 222, 333);
// The first 2 numbers in bracket are for deleting or say splicing the elements out of the array, and other 2 numbers mentioned here, will take place of that elements which are spliced here....
// Output ---> [  23, 222, 333, 89, 4, 55, 67, 69]
// 222 took position of index 1 and 333 took position of index 2 in here......
// I can add as many elements I want from here
// arr2.splice(1,3,1) // This will add one element in space of three elements spliced
// arr2.splice(1,3,111,222,333) // This will add three elements in space of three elements spliced
// arr2.splice(1,3) // This will add no elements in space of three elements spliced
// console.log(arr2);
// Array.from can convert anything into array
console.log(Array.from("Jeet")); // This will convert any string into an array by creating different characters the different element // Output --> ['J','e','e','t']

// With this the arrays is being completed..............
// Jsk....💖