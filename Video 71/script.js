// Through this video we will learn how can we insert or remove the elements present in the body or say html.....
// Now if I want to select and want to know the html code for the div I am selecting...
// console.log(document.querySelector(".box").innerHTML) // This is the <b>Box</b>.. // This returns this string given there................. even the b tag is also shown...
// document.querySelector(".box").innerHTML // As we have learned about the query selector, it will select the first element in the class mentioned, and here...
// .innerHTML means, this is for knowing the text or code inside the element
// This will return the code inside the selected element in string form and prints that.....
// .innerHTML shows the inner code of the html element...
// This returns whole code, even the html elements in here too
// If u want to also know the full html along with the element itself then u need to write like...
// console.log(document.querySelector(".box").outerHTML); // This will print me the div.box itself too like..... // <div class="box">This is the <b>Box</b>..</div>
// The outerHTML even prints the tag itself where innerHTML don't...
// Diff. Between .innerHTML & .outerHTML.
// .innerHTML just prints the text inside the tag... like here it prints the ... --> "This is the <b>Box</b>.." 
// .outerHTML prints the whole element along with the code itself including the tag and class or id of the html element.
// So simply, .innerHTML prints only text of html element, and .outerHTML prints the whole element along with the text

// And there's a one more too to just show the text of the inner elements of a container like here in the html file
// console.log(document.querySelector(".container").innerHTML); // '\n        <div class="box">This is the <b>Box</b>..</div>\n        <div class="box">This is the <b>Box</b>..</div>\n    '
// This will print the whole element in this
// But if I use .innerText.. then it will only print the text of both the inner elements
// console.log(document.querySelector(".container").innerText); // This will print... // 'This is the Box..\nThis is the Box..'
// The .innerText only prints the text inside the element and no tags, but the .innerHTML prints the sub tags too like here div.box and b tags...
// Same way hu anno element ke tag name b jani saku like....
// console.log(document.querySelector(".container").tagName); // This will return me the value 'DIV', coz container after all ek div che etle ena tagName ma div lakhaine ayu
// tagName returns the name of tag of the pointed class or any...
// Like here there are two ways to know the element, 1st way is tagName and other way is nodeName
// Banev ma difference hoy che, tagName just elements nej name ape like div che p tag che and badha html elements, but nodeName ae text node ne b jagya ape and comment ne b node aj kevay...
// console.log(document.querySelector(".container").textContent); // .textContent thi je b content hoy ne ae badhu text form ma avse, just content no tags and no element shown...
// document.querySelector(".container").hidden ---> this will check if the line been selected is hidden or not, and hu aani value true apine aa lines ne hide b kari saku like...
// document.querySelector(".container").hidden = true ---> this will make the hidden value = true and it will hide both the divs present in the .container
// Avi ritna hu values hide b kari saku whenever I want and whatever I want...

// Now editing...
// Hu aa .container ni andar nu innerHTML ke text b change kari saku....
// document.querySelector(".box").innerHTML = "Hey, I am Jeet.." // This will change the innerHTML of the .box to "Hey, I am Jeet"
// But there's a catch, this will only change the innerHTML of first element with class box only.... coz querySelector ----> lol
// AVe mare agar janvu che ke aa je element che ema style attribute che...
// To ena mate hu lakhis
// document.querySelector(".box").hasAttribute("style") // Avu lakhu and if style attribute hase to ema true return karse, jemke ahiya me add kari style attribute inline ma to aama ave true return kare che
// Ama just inline css aj ganase baki external and internal css varu kai nai ganay.. just style attribute in the inline css.....
// .hasAttribute thi kbr pade ke ae attribute present che ke nai....
// And .getAttribute thi apde ene joi sakiye, ke su che inline css aa element ni em....
// document.querySelector(".box").getAttribute("style") // aa mane aa line ni inline css return karse which is ... // "display: flex;"
// And ave if hu lakhu .setAttribute to enathi hu css ke je b inline value hoy ene set kari saku like
// document.querySelector(".box").setAttribute("style", "display: inline-block") // And now this will add a inline css and update the value of display to display: inline-block
// This way I can set any attribute value using setAttribute.
// SetAttribute ---> sets the value....
// HasAttribute ---> checks if the value mentioned is present or not....
// GetAttribute ---> returns the value of attribute mentioned here....
// And now if I want to remove any attibute from the code, I need to write like
// document.querySelector(".box").removeAttribute("style"); // this removed the attribute named style from the line
// removeAttribute is used to remove the attribute from the line, like here I removed the style attribute from the code in here or say the line mentioned.....