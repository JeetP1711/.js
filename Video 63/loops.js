let ar = [93, 12, 6, 57, 8, 9, 45]

for (let i = 0; i < ar.length; i++) {
    const element = ar[i];
    console.log(element)
}

ar.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

// forin loop
let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, " : ", element);
    }
}