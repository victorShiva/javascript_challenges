// Use templete literals to create a strings that includes variables for a person name and age ,  and log the string to the console.
let name = "Harshit";
let age = 20;

let personInfo = `hey I am ${name} and my age is ${age}`;
// console.log(personInfo);



// Create a multi-line string using template literals and log it to the console.
let multiLine = `this is an apple
it's color red`;
// console.log(multiLine);


// Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let number = [3, 4, 6, 8, 3, 6, 3];
let [num1, num2] = number;
// console.log(num1);
// console.log(num2);



let book1 = {
    title: "The Secret",
    author: "Rhonda Byrne",
    year: 2006
}

let { title, author } = book1;
// console.log(title);
// console.log(author);



//#  Spread and Rest Operator
// Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = ["a", "b", "c", ...array1];

// console.log(array2);


// use the Rest Operator in a function to accept an arbitary number of arguments, sum them and return the result.

function calculate(...numbers) {
    console.log(arguments);
    let sum = 0;
    numbers.forEach(num => sum += num);
    return sum;
}

// console.log(calculate(2, 3, 7, 8, 3))
// calculate(3, 5, 7, 9, 3, 1);




// # use enhanced object literals to create an object with methods and properties, and log the object to the console.

const user = "Sanjeev";
const userAge = 21;
const key = 'goal';

const person = {
    user,
    userAge,
    [key]: 'this is Dynamic Key',
    greet() {
        console.log(`Hello my name is ${this.user} and I am ${this.userAge} years old.`);
    }
}

// console.log(person);



// # Create an object with computed property names based on variables and log the object to the console.
const key1 = 'firstName';
const key2 = 'lastName';
const key3 = 'age';


const student = {
    [key1]: "Raghav",
    [key2]: "Gupta",
    [key3]: 21,
    getInfo() {
        console.log(`Name : ${this[key1]}  ${this[key2]} , Age : ${this[key3]}`);
    }
}

// console.log(student);
// student.getInfo();




