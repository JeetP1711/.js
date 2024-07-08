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
    // If I want to select all the element child from the div.container or any particular tag then, we have to write the syntax like this below given....
    // document.body.firstElementChild.children ----> This will return us ---> [div.box, div.box, div.box, div.box, div.box] // All the div from the div.container
    // .children ---> This will give all the element child from the element being selected.....
    // And now apde je ritna childNodes ma atu evu same apde ama hoy like ----> like hu ahiya particular element ne b point kari saku
    // Like if I want to select the box 2 from the div.container then I need to write like...... document.body.firstElementChild.children[1] ----> This will select the 2nd div.box means box2...
    // Now same way I can select the 3rd box by writing document.body.firstElementChild.children[2]
    // If I want to know the next sibling of the box 3 then I can write like this..... document.body.firstElementChild.children[3].nextElementSibling ----> Sibling here refers coz the parent of both the elements. And this will return me the box5 in exchange
    // The parent of both the elements must be same, like here the div.container is same parent for both the divs....
    // Same way I can write document.body.firstElementChild.children[3].previousElementSibling ---> And this will return me the box 3 in exchange...
    // Next for targeting the next element and previous for targeting the previous element..
    // And if I just write nextSibling or previousSibling than I will also get the text and comments here present like its normal in here like when we discussed about the before we know that simply the browser also selects the text and comments and all spaces, but the element just selects the html tags and elements
    // And most off we use the element only and not simple...
    // And now if I want to know the parent of the element which I am selecting then, I need to write like this..... ---> document.body.firstElementChild.children[2].parentElement.
    // The .parentElement gives me the parent of the element being selected and like here it will return me the div.container when I want to know the parent of children[2] which is box 3.....
    // .parentElement ---> Returns me the parent of the child pointed...
    // And similarly I can even target the rows same way... in table ofc...




*/