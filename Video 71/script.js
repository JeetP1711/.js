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
// And now if I want to remove any attribute from the code, I need to write like
// document.querySelector(".box").removeAttribute("style"); // this removed the attribute named style from the line
// removeAttribute is used to remove the attribute from the line, like here I removed the style attribute from the code in here or say the line mentioned.....

// Ave apde joiye ke kevi ritna aama apde insert kari sakiye elements ne and ene edit karvu hoy to kevi ritna

// Ama apde elements insert karvani to khasi methods che but ema apde jovanu che ke kevi ritna karay

// Ahiya ave ek navo element banaisu apde ave ahiy


// 1. Append Method
// let div1 = document.createElement("div");
// div1.innerHTML = "I am been inserted <b>by Jeet</b>";
// div1.setAttribute("class", "created");
// document.querySelector(".container").append(div1);
// Explaination of code....
// let div1 = document.createElement("div"); // Aa line no matlab ki ahiya apde ek element banaiye che je ek div che...
// div1.innerHTML = "I am been inserted <b>by Jeet</b>"; // Aano matlab ke ama hu aa add karis and lakhis aa andar
// div1.setAttribute("class","created"); // Ene apde class apyu .setAttribute thi ----> setAttribute("class","created") ---> etle peli value batave ke apde su apiye che ke su banaiye chiye ----> ahiya apde class banayu jene value api created
// document.querySelector(".container").append(div1); // .append() ---> ano matlab ke aa at last ma add kari dese div.container ma ekdum chele add kari dese...


// 2. Prepend Method
// let div2 = document.createElement("div");
// div2.innerHTML = "I am been inserted <b>by Jeet</b>";
// div2.setAttribute("class", "created");
// document.querySelector(".container").prepend(div2);
// Explaination of code....
// let div2 = document.createElement("div"); // Aa line no matlab ki ahiya apde ek element banaiye che je ek div che...
// div2.innerHTML = "I am been inserted <b>by Jeet</b>"; // Aano matlab ke ama hu aa add karis and lakhis aa andar
// div2.setAttribute("class","created"); // Ene apde class apyu .setAttribute thi ----> setAttribute("class","created") ---> etle peli value batave ke apde su apiye che ke su banaiye chiye ----> ahiya apde class banayu jene value api created
// document.querySelector(".container").prepend(div2); // .prepend() ---> ano matlab ke aa at last ma add kari dese div.container ma ekdum pehla add kari dese...


// 3. Before Method
// let div3 = document.createElement("div");
// div3.innerHTML = "I am been inserted <b>by Jeet</b>";
// div3.setAttribute("class", "created");
// document.querySelector(".container").before(div3);
// Explaination of code....
// let div2 = document.createElement("div"); // Aa line no matlab ki ahiya apde ek element banaiye che je ek div che...
// div2.innerHTML = "I am been inserted <b>by Jeet</b>"; // Aano matlab ke ama hu aa add karis and lakhis aa andar
// div2.setAttribute("class","created"); // Ene apde class apyu .setAttribute thi ----> setAttribute("class","created") ---> etle peli value batave ke apde su apiye che ke su banaiye chiye ----> ahiya apde class banayu jene value api created
// document.querySelector(".container").before(div2); // .before() ---> ano matlab ke aa body ma ekdum pehla add kari dese... matlab div.container ni upar


// 4. After Method
// let div4 = document.createElement("div");
// div4.innerHTML = "I am been inserted <b>by Jeet</b>";
// div4.setAttribute("class", "created");
// document.querySelector(".container").after(div4);
// Explaination of code....
// let div2 = document.createElement("div"); // Aa line no matlab ki ahiya apde ek element banaiye che je ek div che...
// div2.innerHTML = "I am been inserted <b>by Jeet</b>"; // Aano matlab ke ama hu aa add karis and lakhis aa andar
// div2.setAttribute("class","created"); // Ene apde class apyu .setAttribute thi ----> setAttribute("class","created") ---> etle peli value batave ke apde su apiye che ke su banaiye chiye ----> ahiya apde class banayu jene value api created
// document.querySelector(".container").after(div2); // .after() ---> ano matlab ke aa body ma ekdum chelle add kari dese... matlab div.container ni niche


// 5. After Method
// let div5 = document.createElement("div");
// div5.innerHTML = "I am been inserted <b>by Jeet</b>";
// div5.setAttribute("class", "created");
// document.querySelector(".container").replaceWith(div5);
// Explaination of code....
// let div2 = document.createElement("div"); // Aa line no matlab ki ahiya apde ek element banaiye che je ek div che...
// div2.innerHTML = "I am been inserted <b>by Jeet</b>"; // Aano matlab ke ama hu aa add karis and lakhis aa andar
// div2.setAttribute("class","created"); // Ene apde class apyu .setAttribute thi ----> setAttribute("class","created") ---> etle peli value batave ke apde su apiye che ke su banaiye chiye ----> ahiya apde class banayu jene value api created
// document.querySelector(".container").replacewith(div2); // .replacewith() ---> ano matlab ke aa body ma div.container ni badle ma div.created banai dese like replace kari dese div.container ne aa nava thi....


// Simple Explanation of Methods Given Above ------>
// .append()      ----> Append means ae selected item na last ma add kari dese
// .prepend()     ----> Prepend means e selected item na beginning ma add kari dese
// .before()      ----> Before means ae selected item na pela add kari dese
// .after()       ----> After means ae selected item na pachi add kari dese
// .replaceWith() ----> ReplaceWith means ke ae selected item ne replace kari dese nava jode


// Now time to learn about inserting adjacent html

// let cont = document.querySelector(".container");
// Storing value of document.querySelector(".container") in cont glabally for in here

// 1. BeforeBegin Method
// cont.insertAdjacentHTML("beforebegin","Hi I am inserted by jeet, using <b>BeforeBegin</b>");
// BeforeBegin means ke ae selected element start thaya pela add karse

// 2. AfterBegin Method
// cont.insertAdjacentHTML("afterbegin","Hi I am inserted by jeet, using <b>AfterBegin</b>");
// AfterBegin means ke ae selected element start thaya pachi ena begining ma add karse
// Matlab ki tarat start thaya pachi add kari dese ae starting ma


// 3. BeforeEnd Method
// cont.insertAdjacentHTML("beforeend","Hi I am inserted by jeet, using <b>BeforeEnd</b>");
// BeforeEnd means ke ae selected element na end thay ena pela add karse
// Like selected element na ending ma


// 4. AfterEnd Method
// cont.insertAdjacentHTML("afterend","Hi I am inserted by jeet, using <b>AfterEnd</b>");
// AfterEnd means ke ae selected element na pachi add karse

// This adjacent method can be used for inserting text and element too........

// Quick Explaination
// BeforeBegin  ----> Element start thaya pela
// AfterBegin   ----> Element start thaya pachi starting ma top par
// BeforeEnd    ----> Element end thaya pela ending ma end par
// AfterEnd ----> Element puru thaya pachi


// Node removal method
// Means removing a element permenantly...

// document.querySelector(".box").remove();
// This will remove the first .box element from here......

// Quick Explanation Of Remove ---->
// .remove()  ----> Selected element ne remove kari apse....


// Now how to know the classList of the selected element there's a method for it

// Selecting and knowing all the list of class the .container have, like I updated the class = "container red bg-blue";

// document.querySelector(".container").classList
// It returns me -----> DOMTokenList(3) ['container', 'red', 'bg-blue', value: 'container red bg-blue']
// This is the list form

// document.querySelector(".container").className
// It returns me ----> "container red bg-blue"
// Just the name of classes it has

// document.querySelector(".container").classList.add("Jeet"); // This will add the class Jeet in the classList of .container
// document.querySelector(".container").classList.remove("red"); // This will remove the class red from the classList .container
// document.querySelector(".container").classList.toggle("red"); // Toggle no matlab ke agar red hase to nikadi dese and nai hoy to api dese, means che to remove and na hoy to add
// document.querySelector(".container").classList.contains("bg-blue"); // Aa check kari apse ke aa className che mara classList ma .container ma...