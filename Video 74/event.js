let a = document.querySelector(".child");
a.addEventListener("click",()=>{
    alert("Child is clicked")
})
let b = document.querySelector(".childContainer");
b.addEventListener("click",()=>{
    alert("ChildContainer is clicked")
})
let c = document.querySelector(".container");
c.addEventListener("click",()=>{
    alert("Container is clicked")
})