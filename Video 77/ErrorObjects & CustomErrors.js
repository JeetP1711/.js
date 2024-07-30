// This is for the custom errors and Error Objects....!

// The custom error is the way like I can throw a particular type of error from here in

// ANd error object means in the error, I just want particular thing or that to be printed.....


try {
    console.log(Jeet)
} catch (error) {
    console.log(error.name); // This will help me print the name and type of the error, like here it is the reference Error
    console.log(error.message); // This will help me print the message of the error to be filled like here the message is "Jeet is not defined"
    console.log(error.stack) // This will help me print the whole error in here.....
}

// Like ave hu emnem error lakhu to mane akhi error print karine ape like blah blah blah, vastu hoy nani but error akha gaam thi moti,, to ene seolve karva error object banayu che, so that ki ahiya mane bau ghucham ghucham na lage

