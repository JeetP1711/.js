console.log("Hello");
// console.log(document.body.childNodes);
// document.childNodes // This will give me list of all the child nodes present in the body like all the elements, even the spaces will be considered as the text nodes
// And the output of this in console is --> NodeList(5) [text, div.container, text, script, text]
// document.childNodes[0] //  This will give me the first element, of the html body, means it will return the text which is the space and enter we gave in the starting before the div.container in the body
// document.childNodes[1] //  Similarly, this will give me the second element, of the html body, means it will return the div.box Box1 element, which is a division element so it will return me the division element
// document.firstChild // This will give me the first element, of the html body, means it will return the text which is the space and enter we gave in the starting before the div.container in the body
// Similarly .....
// document.lastChild // This will give me the last element, of the html body, means it will return the text which is the space and enter we gave in the after the div.container in the body
// FirstChild ---> will give me the first child of whole html body...., means it will be here the empty space which is referred here to the text form node..
// FirstChild means the first ever child of the body, which normally is the space in here...
// document.childNodes[1].childNodes ---> // This will give me the all childNodes of the div.container here will are all the boxes from box1-box5......
// And it will not only give the boxes, but also the text nodes, which are the enter and empty spaces in here in the div.container before the boxes in the div
// The output will be........... [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// Here the text refers to the empty spaces and the text given in here and the comment is the basic comment given here........
// This console will count all the empty spaces in here as a text format





// The explanation of the DOM nodes in here is..............
/*
<div class="container">    // This will be considered as a text node element in the 
        <!-- This is a comment -->   // This will be considered as the comment node // Then again the text node coz of extra space.....
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <div class="box">Box 4</div>
        <div class="box">Box 5</div>
    </div>

    NodeList(5) [text, div.container, text, script, text] // This will
    // firstChild etle ki je b pelo child hase akha html file no, jem ki ahiya return karse ae text form, karanke ahiya je apde extra space and enter space apel che ae ahiya text return karse, karanke je empty spaces hoy ae html ma as a text element ganay che, coz it refers as text.........
    // .firstChild--> This gives the first child of the html body
    // .lastChild--> This gives the last child of the html body
    // Agar 2 element vache space ke tab space b hase ke ek enter b hase ne to b ae text form node ghanase, coz empty space ne b aa loka string maj nakhe and uk string == text..... so ya emptySpace =-->> text node

    // Now if I write document.childNodes[1].childNodes ----->> then It will return me the elements of the div.container
    // Like aa nested jevu che, ke ek element na andar na child elements na childElements, and ahiya badha batavse, like ahiya apde je tree structure kaiye ne evu tree struct che, and eni jevi ritna aa akhu agad jaay and vadhe and u can track elements such way....
*/