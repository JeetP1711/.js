// This is a railway form for submitting and cancelling the form, its like a basic form just a basic..............!

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