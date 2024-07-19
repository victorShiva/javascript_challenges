// function checkNumber(num) {
//     (num % 2 === 0) ? console.log("EVEN") : console.log("ODD");
// }
// checkNumber(5);
// checkNumber(12);
// checkNumber(0);
// checkNumber(1);
// checkNumber(2);


// function square(num) {
//     return num * num;
// }
// console.log(square(12));




// --------------------#function Expression

// const max = function (num1, num2) {
//     num1 > num2 ? console.log(num1) : console.log(num2);
// }
// max(123, 456);
// max(865, 653);


// const concatString = function (str1, str2) {
//     return (str1 + ' ' + str2);
// }
// console.log(concatString("Shiva", "Gupta"))



// ------------------------- # Arrow function

// let sum = (num1, num2) => num1 + num2;
// console.log(sum(123, 5));


// # write an arrow function to check if a string contains a specific character and return a boolean value.

// const containsString = (str, char) => {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) return true;
//     }
//     return false;
// }
// console.log(containsString("Raghava", "g"));
// console.log(containsString("Raghava", "m"));



// --------------------- parameter and default values
// # write a function that take two parameters and return their product. Provide a default value for the second parameter.

// function product(num1, num2 = 10) {
//     return num1 * num2;
// }
// console.log(product(5, 4));
// console.log(product(9));


// function greeting(person, age = 22) {
//     return `Hello My Name Is ${person} and age is ${age}`;
// }
// console.log(greeting("Raghav", 25));
// console.log(greeting("Shiva"));






//_____--------------------- higher-order function

// # write a higher order function that takes a functionand a number , and call the function that many times.

// function callMany(callback, num) {
//     for (let i = 1; i <= num; i++) {
//         callback();
//     }
// }
// function greeting() {
//     console.log("Hello Good-Morning");
// }

// callMany(greeting, 5);




// # write a higher order function that takes two functions and a value, applies the first function to the value and then applies the second function to the result.

function outerFunc(func1, func2, val) {
    return func2(func1(val));
}

const first = function (num) {
    return num;
};

const second = function (back) {
    return back;
}

console.log(outerFunc(first, second, "Shiva"));