// console.log("Hello");
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
// let a = document.getElementById("box3"); // Here I have selected the element by the id box3 and stated that in the variable a
// a.style.backgroundColor = "yellow"; // Styling the selected variable and giving it the BgColor yellow
// This ids and class works as the normal classes and ids like we give in the html and css
// Class for multiple elements and id for the specific element...
// But.........⬇️⬇️
// There's a difference in the syntax of both id and class 
// For id ---> document.getElementById // We write here **Element** just element
// For class ---> document.getElementsByClassName // We write here **Elements** elements, coz a class has multiple elements in one class
// Now it comes for teh query selector keyword....
// let b = document.querySelector(".box"); // In query selector we need to write like we do so in the css for selecting the class and id, like #---> id, .---> class
// The query selector property is used to select the first element of the individual class, like this query selector would only select the first element from the box elements, which is box 1.....
// The query selector will only select the first element of the class which is box1....
// console.log(b); // <div class="box">Box 1</div> // This is what it shows here
// b.style.backgroundColor = "green"; // This is the style for box1 only, see I have selected the .box, but it only styles the first box, coz the querySelector only selects the 1st element of the grp or class, and this will only select the first index of the class only.......
// But for this there's a way too....
// document.querySelectorAll(".box") // From this it will select all the elements of the class .box but it will return them in the html collection form....
// console.log(document.querySelectorAll(".box")); // This will return me the html collection of all the elements in the .box
// But we can't directly style it like we do in the id...
// document.querySelectorAll(".box").style.backgroundColor = "red"; // This is showing array coz the console shows that the .style.bgcolor can't be applied to the html collection
// FOr this all to style we need to apply some loop and then do it... SOme mind...
// Like here I will apply simple forEach loop in here...
// document.querySelectorAll(".box").forEach(g=>{
//     console.log(g); // Like see here this will print me all the elements of the box from here only......
//     g.style.backgroundColor = "white"; // See from this I changed the bgcolor of all the elements with class box
// })

// You can even use the for loop for the same...
// Diff Between QuerySelector And QuerySelectorAll⬇️⬇️
// QuerySelector will only select first element of the class or grp being mentioned and we can directly style it from there only...
// QuerySelectorAll will select all the elements from the class or grp being mentioned but we will have to style it individually through the forEach loop or say loop any, coz it will select all the elements of the grp but it will store every elements in the html collection form that's why we need to use the forEach loop to give each element the style and have to select individually all the elements and then we will give style to those elements
// And as we have talked each element will get the inline style if in case we give them styling through the javaScript from here.....

// Now If i want to select the elements using the tag name like i want to select all the divs present here, then I will need to write....⬇️⬇️
// document.getElementsByTagName("div"); // This will select all the elements with the tag name div, even the parent div will also get selected
// Tuk ma badha tag select thase je div hase.... simple

// Now there are some key words for checking the elements are matching or are closest with the element being selected here....
let e =  document.getElementsByTagName("div"); // Just giving this a variable and storing all the divs in e
// Now I want to check if the e[3] matches with the id = "box3" or not
// console.log(e[3].matches("#box3")); // And this shows true coz the fourth div of whole html body has the id = box3
// Now I can do it with the class too...
// console.log(e[0].matches(".container")); // This returns true coz the first div in the body has the class container which contains all the 5 div.box......
// The matches func returns me two things, either true or false.....
// Now lets talk about the .closest func
// This func will reach out to the closest ancestor or sibling in the tags or that
console.log(e[2].closest(".container")); // See this returns me the tag with .conatiner, like this only works with parents and like that
console.log(e[2].closest("html")); // This will return me the whole html body for the same...
// Firstly it checks the element itself then will go to the parent then parent's parent and so on.....
console.log(e[3].closest("#box3")); // This will return me the element itself coz it is the same element which as the id = box3.......
// Now lets talk about the .contains function which will check if the element has the child element this
console.log(document.querySelector(".container").contains(e[2])); // This will return me true coz the e[2] is the child element of the parent .container.............
console.log(document.querySelector(".container").contains(e[0])); // It will also contain itself so it here also states true....
// It only works for the parent element, the child can't contain the parent in itself...

// WIth this the final of functions and selection with class ids and function for that are completed