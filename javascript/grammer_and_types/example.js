{
    let name = 'ridvan';
    console.log(name)
}

// console.log(name) // it will throw exception

// Type conversion

var answer = 45;
answer = '45';
answer = true;

// '+' operators

console.log('answer is '+ 45)

// convert string to numbers

console.log(typeof '45') // return string
console.log(typeof +'45') // return number
console.log(parseInt('450')) // return  450
console.log(parseInt('a4as50')) // return NaN
console.log(parseFloat('4.5')) // return 4.5
console.log(parseFloat('a4.5')) // return NaN

// -------------- Fancy example ----------------

console.log('4'+7) // string 47
console.log(+'4'+7) // number 11
console.log(typeof +'85' ) // return number



