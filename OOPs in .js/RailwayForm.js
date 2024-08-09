// This is a railway form for submitting and cancelling the form, its like a basic form just a basic..............!

// Creating a class named RailwayForm in here
// Which has three functions in here itself
// 1st func ---> submit() ---> which submits the form to server.......
class RailwayForm{
    submit(){
        console.log(this.name+ ": Your form is been submitted!!!");
    }
    cancel(){
        console.log(this.name+ ": Your form is been cancelled");
    }
    fill(name){
        this.name = name;
    }
}

let Jeet = new RailwayForm();
let Raghvat = new RailwayForm();
Jeet.fill("Jeet");
Raghvat.fill("Raghvat");
Jeet.submit();
Raghvat.submit();
Jeet.cancel();