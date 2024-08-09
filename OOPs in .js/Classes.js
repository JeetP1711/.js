// What are classes?
// Classes are like the objects in which u can store anything and everything in there.
// Objects can just store the value from the user itself from the code and in it through many ways.
// Uk in a class we can describe many things, class is like a big function or say the main func we made in the C and C++, its like that only, just we can create many functions like this in it too
// Its like the classes in C++ only, just a lil syntax changed and like that............!

// Syntax given below

class FirstClass{
    Greeting(){
        console.log("Hi this is the first class...!")
        console.log("Hi "+ this.name + " this is the first Class of JS... Hey!!!");        
    }
    Namaste(name){
        this.name = name;
    }
}

let Jeet = new FirstClass;
let Raghvat = new FirstClass;

Jeet.Namaste("Jeet");
Jeet.Greeting();
Raghvat.Namaste("Jeet");
Raghvat.Greeting();