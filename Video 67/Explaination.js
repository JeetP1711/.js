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
*/