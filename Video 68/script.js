console.log("Hello");
// let a = document.getElementsByClassName("box"); // I made a variable and stored the value of class box elements in it......
// a[2].style.color="red"; // Now specifying the element of the box class to being styled...
// In the class I need to specify the number of the element to be selected
// Like here I have selected the element whose index is 2, i.e. is the third element with class box (box 3)..
// Here I selected box 3 and styled it with color red..
// In class if I just want to console log the e then.. it will return me...
// console.log(a); // HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// This will return me the collection of the elements of class box...
// And u can't style the html elements emnem, you need to specify the index of the element to be styled....
// But there's a problem in this, if I add a element in between the box3 and box2 which is box2.5 then box2.5 will get styled, coz it will get the index 2, thats why the box2.5 will get the style.
// If I want to specify the box3 only, then I need to get that element the id, and then whatever I add or remove that element would only get the style..
// So for selecting specific element we take the id for it...
let a = document.getElementById("box3"); // Here I have selected the element by the id box3 and stated that in the variable a
// This ids and class works as the normal classes and ids like we give in the html and css
// Class for multiple elements and id for the specific element...
// But.........⬇️⬇️
// There's a difference in the syntax of both id and class 
// For id ---> document.getElementById // We write here **Element** just element
// For class ---> document.getElementsByClassName // We write here **Elements** elements, coz a class has multiple elements in one class
a.style.backgroundColor = "yellow"; // Styling the selected variable and giving it the BgColor yellow