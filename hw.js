// JS Basics

/* EXERCISE A

Create a variable called test and assign a string value to it.

*/

function title(titleString) {
    console.log(`\n-------------------------------${titleString}--------------------------------\n`);
}

title("exercise A");

let test = "Assigning a string value to test";
console.log(test)

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/

title("exercise B");

let sum = (10 + 20);
console.log("The sum between 10 and 20 is:", sum)


/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/

title("exercise C");

let random = Math.floor(Math.random() * 21);
console.log("Random number between 0 and 20:", random)

/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/

title("exercise D");

let me = {
    name: "Diana",
    surname: "Berte",
    age: 28
}
console.log("This is me:", me)

/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/

title("exercise E");

delete me.age;
console.log("This is me without the age property:", me)



/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/

title("exercise F");

let skills = ["I'm currently studying JavaScript", "That's all for now 1", "That's all for now 3"];
me.skills = skills;
console.log("This is the me object with added an array of the programming languages I know:", me)


/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/

title("exercise G");

me.skills.pop();
console.log("This is the me object without the last listed skill:", me);

title("JS Functions");
title("exercise 1");

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/

function dice(n) {
    for (let i = 1; i <= n; i++) {
    return (Math.floor(Math.random() * 6));
   }
   return dice;
}

console.log(dice(1)); /* incorrect, it's showing also 0 */

/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/

title("exercise 2");

function WhoIsBigger(a, b) {
    if (a > b) {
        return a; 
    } else {
        return b;
    }
}

console.log(WhoIsBigger(103, 99))


/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/

title("exercise 3");

function splitMe(str) {
    let words = str.split(" ");
    return words;
    }

console.log(splitMe("I love coding"))

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/

title("exercise 4");

function deleteOne(str, boo) {
    if (boo === true) {
        let words = str.slice(1);
        return words;
    } else {
        let words2 = str.slice(0, -1);
        return words2
    }
} 

console.log(deleteOne("I love coding", true))

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/

title("exercise 5");

function onlyLetters(str) {
    const newstr = str.replace(/[0-9]/g, '');
    return newstr
}

console.log(onlyLetters("I have 2 dogs"))

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/

title("exercise 6");

function isThisAnEmail (str) {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (str.match(validRegex)) {
        return true;
    } else {
        return false
    }
}

console.log(isThisAnEmail("someone@gmail.com"))

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/

title("exercise 7");

function whatDayIsIt (date) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    return day
}

console.log(whatDayIsIt())

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/

title("exercise 8");

function rollTheDices(num) {
    
}