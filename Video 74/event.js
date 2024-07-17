let a = document.querySelector(".child");
a.addEventListener("click", () => {
    alert("Child is clicked")
})
let b = document.querySelector(".childContainer");
b.addEventListener("click", () => {
    alert("ChildContainer is clicked")
})
let c = document.querySelector(".container");
c.addEventListener("click", () => {
    alert("Container is clicked")
})

// This above one is with bubbling on

// I just made a simple programm here to just click and alert function, means if I click the child, then it shows child is clicked, then vice versa till container
// But here when I click the child the childContainer and Container are selected automatically, and this is called eventBubbling
// Here when, I click on the child, it shows alert "Child is clicked" then --> "ChildContainer is clicked" then also at last ---> "Container is clicked"
// This is called the event bubbling
// Coz when u click on the child, u technically clicked on childContainer too, and universally u clicked on Container too
// This is like, I live in ahmedabad, that means I live in Gujarat, that even means I live in India, and that means I live the Earth tooo
// It is like this only
// Ahmedabad ---> Gujarat ---> India ---> Earth ---> Solar System ---> Milky Way Galaxy ---> And further more....
// Similarly Child ---> ChildContainer ---> Container
// I can even remove this too, for that I need to add a new property....
// By default js will consider the bubbling on and to turn it off u need to write that property
// For that u need to turn off the propogation....

// And the below one is with without propogation and event Bubbling

let d = document.querySelector(".child1");
d.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("Child is clicked")
})
let e = document.querySelector(".childContainer1");
e.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("ChildContainer is clicked")
})
let f = document.querySelector(".container1");
f.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("Container is clicked")
})

// The stop propogation will stop the event bubbling
// Means the particular value will only be selected, means, it will only show child is clicked, if I click on child and vice versa
// Child mate child, childContainer mate ChildContainer & Container mate container aj......
// Ane kevay no event bubbling
// Matlab ke ave je element select karyo che ej
// Matlab ave hu ahmedabad maj rau chu, means ave hu evu nai keva mangto ke hu guj ma b rau chu nd india ma b.
// I just wanna be specific, then I need to apply stopPropogation
// And stopPropogation use karva mate mari jode ek element hovu joiye and ahiya ene mte me e element lidho...
// And then I said e.stopPropogation jena karane mare propogation hati gayu



// To matlab in short ma jyare me bau badha elements lidha hoy and ema childElements b hoy then, me je function click ke evu kai banayu hase, ae jyare hu child ne click karis to ena parents b click thai aj jase and ae function ke je b hoy ae run thase... Jevi ritna ama upar dekhay che ae pramane
// ANd ene hatavu hoy to mare propogation ne stop karvu pade jena thi je element hu select karva mangu chu ej element select thase baki ek b nai thay....
// Propogation bandh karva thi parents select na thay child select karva par
// And by default event bubbling on aj hoy js ma
// Etlej apde manually ene off karvu pade propogation off karine....
// Enathi selected element aj call thase...