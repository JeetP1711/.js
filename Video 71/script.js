// Through this video we will learn how can we insert or remove the elements present in the body or say html.....
// Now if I want to select and want to know the html code for the div I am selecting...
// console.log(document.querySelector(".box").innerHTML) // This is the <b>Box</b>.. // This returns this string given there................. even the b tag is also shown...
// document.querySelector(".box").innerHTML // As we have learned about the query selector, it will select the first element in the class mentioned, and here...
// .innerHTML means, this is for knowing the text or code inside the element
// This will return the code inside the selected element in string form and prints that.....
// .innerHTML shows the inner code of the html element...
// This returns whole code, even the html elements in here too
// If u want to also know the full html along with the element itself then u need to write like...
console.log(document.querySelector(".box").outerHTML); // This will print me the div.box itself too like..... // <div class="box">This is the <b>Box</b>..</div>
// The outerHTML even prints the tag itself where innerHTML don't...