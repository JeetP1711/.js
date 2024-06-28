let arr = [1, 13, 45, 5, 7, 11];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element**2);
// }
// Here, we created a loop which will return the value of array but in squared form.......
// This loop was one method of printing the squares and the second and easy time saving method is using map...
let newArr = arr.map((le)=>{
    return (le**2);
})

console.log(newArr);