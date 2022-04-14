
// Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
// while (i < 5) {
//   myArray.push(i);
//   i++;
// }

do {
    myArray.push(i)
    i++
} while (i < 10)

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    if (n === 0) {
        return 0
    } else {
        return sum(arr, n - 1) + arr[n - 1]
    }
}




// We have an array of objects representing different people in our contacts lists.

// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return the string No such contact.

// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.






// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop]
            } else {
                return `No property found`
            }
        }
    }
    return `No such name`
    // Only change code above this line
}

//   lookUpProfile("Akira", "likes");

// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + 1)
}

// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
//The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
// The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.

function convertToInteger(str, radix) {
    return parseInt(str, 2)
}

convertToInteger("10011");


//   The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.
//   Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

function checkEqual(a, b) {
    return a === b ? `${a} is equal to ${b}` : `${a} is not equal to ${b}`
}

checkEqual(1, 2);

//   In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.

function checkSign(num) {
    return (num > 0) ? `positive`
        : (num < 0) ? `negative`
            : `zero`
}

