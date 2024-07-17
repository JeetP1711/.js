// What are SetInterval & SetTimeout?
// SetTimeout no matlab ki ek var thase aatla time pachi means time out thaya pachi, just one time
// SetInterval means ke ae atla time pachi thatuj rese no matter what, its an interval of time

// Now I am just setting a time interval of 1s and less to show u this by....

// This is the function created by CWH for generating random color
function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

// This above code is just for the random color generation by CodeWithHarry...........

setInterval(() => {
    document.querySelector(".child").style.backgroundColor = getRandomColor();
}, 1000);
// This setInterval function gives the interval to the element being focused or pointed
// And then it does the task which is been given here.....


setTimeout(() => {
    document.querySelector(".child1").style.backgroundColor = getRandomColor();
}, 3000);

// And here I have given timeout so it just changed the color of the background of child1 only one time
// When the time outs the color doesnt change
// And function wont work

// SetInterval sets an interval of time, after which the task gets continued and continued
// SetTimeOut means it will just run the code one time when it is being the time is out, the code wont excecute

// SetInterval ---> Regular interval basis..
// SetTimeOut ----> Only One time running..