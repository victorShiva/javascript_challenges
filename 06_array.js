let arrayOfNumber = [1,2,3,4,5];
// console.log(arrayOfNumber);

// console.log(arrayOfNumber[0]);
// console.log(arrayOfNumber[arrayOfNumber.length-1]);

arrayOfNumber.push(6);
// console.log(arrayOfNumber);

arrayOfNumber.pop();
// console.log(arrayOfNumber);

arrayOfNumber.shift();
// console.log(arrayOfNumber);

arrayOfNumber.unshift(9);
// console.log(arrayOfNumber);




let numArray = [1,3,5,6,2,4,9,12];

const newArray = numArray.map(val=>val*2);
// console.log(newArray);

const evenNumberArr = numArray.filter(num => num%2==0 );
// console.log(evenNumberArr);


const sumOfArray = numArray.reduce((accu,curr)=>{
    accu += curr;
    return accu;
},0)
// console.log(sumOfArray);




let fruits = ["apple", "banana", "orange", "grape", "mango", "strawberry", "watermelon", "pineapple", "cherry", "blueberry"];
// for(let i = 0 ; i < fruits.length ; i++){
//     console.log(fruits[i]);
// }


// fruits.forEach((val=>console.log(val)));



let twoDimensionalArray = [
    ["apple", "banana", "orange"],
    ["grape", "mango", "strawberry"],
    ["watermelon", "pineapple", "cherry"],
    ["blueberry","mango"]
  ];

//   twoDimensionalArray.forEach((val=>console.log(val)));


  twoDimensionalArray.forEach((val=>console.log(val[1])));


