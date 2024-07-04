let arr2 = [23, 11, 3, 67, 89, 4, 55, 67, 69];
console.log(arr2);
arr2.splice(1,3); // This will splice 3 elements from starting with index 1
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
console.log(arr2);