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