
/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

// This code will give you the business names using this adjective, shop name and another word given above

let rand;
let first, second, third;

rand = Math.random(); // Here we made the random from the rand to take the name of the first
if(rand<0.33){ // if the value is less than 0.33 then this will give the value this
    first = "Crazy";
}
else if(rand<0.66 && rand>=0.33){ // If the value is between 0.66 and 0.33 then this will store this value
    first = "Amazing";
}
else{ // And this is the else condition for the random number generation....
    first = "Fire";
}

rand = Math.random(); // Here we made the random from the rand to take the name of the second
if(rand<0.33){ // if the value is less than 0.33 then this will give the value this
    second = "Engine";
}
else if(rand<0.66 && rand>=0.33){ // If the value is between 0.66 and 0.33 then this will store this value
    second = "Foods";
}
else{ // And this is the else condition for the random number generation....
    second = "Garments";
}

rand = Math.random(); // Here we made the random from the rand to take the name of the third
if(rand<0.33){ // if the value is less than 0.33 then this will give the value this
    third = "Bros";
}
else if(rand<0.66 && rand>=0.33){ // If the value is between 0.66 and 0.33 then this will store this value
    third = "Limited";
}
else{ // And this is the else condition for the random number generation....
    third = "Hub";
}

console.log(`${first} ${second} ${third}`); // Printing first, second and third in this to get the output of business name.....