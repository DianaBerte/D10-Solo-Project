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

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/