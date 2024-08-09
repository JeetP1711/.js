// This is a railway form for submitting and cancelling the form, its like a basic form just a basic..............!

// Creating a class named RailwayForm in here
// Which has three functions in here itself
// 1st func ---> submit() ---> which submits the form to server.......
class RailwayForm {
    submit() {
        console.log(this.name + ": Your form is been submitted for the train : " + this.number);
    }
    cancel() {
        console.log(this.name + ": Your form is been cancelled for the train : " + this.number);
    }
    fill(name, number) {
        this.name = name;
        this.number = number;
    }
}

let Jeet = new RailwayForm();
let Raghvat = new RailwayForm();
Jeet.fill("Jeet", 1868);
Raghvat.fill("Raghvat", 1770);
Jeet.submit();
Raghvat.submit();
Jeet.cancel();

// This form is just the basic form of the RailwayForm being submitted and cancelled....!