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

// I can even specify the child element with a variable in here...
// let cont = document.childNode[2] // This way I can assign this variable a value of the childNode from here only, so now if I want to do anything with that element I just need to write, cont.childNode[2], then this will give me div.container's child node............
// The variable thing is really very useful.....

// Now if I want to directly select the first element, like I want to have the first div in the body element than, there's a key word too
// document.firstElementChild ---> This will directly give me the first element like divs, paras, or something like that.......
// So it will return me div.container and if i write same in this...
// document.firstElementChild.firstElementChild ----> This will return me box 1, rather than comments and anything this will return me box 1....
// document.firstElementChild.lastElementChild ----> This will return me box 5, rather than the text this will return me the last element A.K.A box5.....




// The explanation of the DOM nodes in here is..............
/*
<div class="container">
        <!-- This is a comment -->   // This will be considered as the comment node // Then again the text node coz of extra space.....
        <div class="box">Box 1</div> // This will be considered as an element and will be as a element or say block type node [coz it's a block element]
        <div class="box">Box 2</div> // This will be considered as an element and will be as a element or say block type node [coz it's a block element]
        <div class="box">Box 3</div> // This will be considered as an element and will be as a element or say block type node [coz it's a block element]
        <div class="box">Box 4</div> // This will be considered as an element and will be as a element or say block type node [coz it's a block element]
        <div class="box">Box 5</div> // This will be considered as an element and will be as a element or say block type node [coz it's a block element]
    </div>

    NodeList(5) [text, div.container, text, script, text] // This will be shown when i try to print the document.body, coz the div.container has 5 diff div, but they are in it, so it will be first stated as the div.container only......
    // firstChild etle ki je b pelo child hase akha html file no, jem ki ahiya return karse ae text form, karanke ahiya je apde extra space and enter space apel che ae ahiya text return karse, karanke je empty spaces hoy ae html ma as a text element ganay che, coz it refers as text.........
    // .firstChild--> This gives the first child of the html body
    // .lastChild--> This gives the last child of the html body
    // Agar 2 element vache space ke tab space b hase ke ek enter b hase ne to b ae text form node ghanase, coz empty space ne b aa loka string maj nakhe and uk string == text..... so ya emptySpace =-->> text node

    // Now if I write document.childNodes[1].childNodes ----->> then It will return me the elements of the div.container
    // Like aa nested jevu che, ke ek element na andar na child elements na childElements, and ahiya badha batavse, like ahiya apde je tree structure kaiye ne evu tree struct che, and eni jevi ritna aa akhu agad jaay and vadhe and u can track elements such way....

    // FirstElementChild ----> aa vastu koi b element hase ne jem ki div, para or something like than even je b tag hoy specific ene element ganay, ekla text ne text aj ganay and baki badha tags ne to aa element tarikej le and ene ae select karse.
    // So elementChild etle je b body ma element hase ene print karse, jemki agar hu evu lakhu ke document.body.firstElementChild ---> To aa div.container ne lavse, na ki text ke comment ne coz bane vastu element ma na ave, ae vastu text node maj ganay and aa div to ek particular element che etle ene print karyu and ave mare div.container na b agar element child joiye to hu ena b elementChild lakhis to ae div nej point karse, coz tya b text ne text aj ganse na ke koi element.
    // So, elementChild matlab eva ki je proper element point karse..
    // Same way agar hu .firstElementChild; ---> Prints first child of whatever selected..... // This will return me the div.container for the given index.html
    // Same way agar hu .lastElementChild; ---> Prints last child of whatever selected..... // This will return me the script tag in this particular index.html

    // And pachi ave hu aa je select karela element che ena jode kai b kari saku, like eni style change kari saku ke kai b, ae ave maru che to hu kari saku
    // Like if hu document.body.firstElementChild.style.color="red"; // Hu avu lakhu to ae element no color red kari dese.... // Means ke ahiya div.container no color red thai jase badha div na color red thai jase............. 





*/