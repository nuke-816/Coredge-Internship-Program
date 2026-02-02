//map()

// example1
// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(squares);
// console.log(cubes);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

//Example2

// const students = ["talal", "ahmed", "sara", "mohamed"];
// const studentsUpper = students.map(uppperCase);
// const studentsLower = students.map(lowerCase);

// console.log(studentsUpper);
// console.log(studentsLower);


// function uppperCase(element) {
//   return element.toUpperCase();
// }

// function lowerCase(element) {
//   return element.toLowerCase();
// }

//Example3

// const dates = ["2026-01-01", "2026-02-14", "2026-03-17", "2026-04-01"];

// const formattedDates = dates.map(formatDate);
// console.log(formattedDates);
// function formatDate(element) {
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`
// }


//filter()
//Example1
// const numbers = [10, 25, 30, 45, 50, 65, 70];

// const evenNumbers = numbers.filter(isEven);
// const oddNumbers = numbers.filter(isOdd);

// console.log(evenNumbers);
// console.log(oddNumbers);

// function isEven(element) {
//   return element % 2 === 0;
// }

// function isOdd(element) {
//   return element % 2 !== 0;
// }

//Example2
// const words = ["apple", "banana", "kiwi", "grape", "mango", "pear"];

// const longWords = words.filter(isLong);

// console.log(longWords);

// function isLong(element) {
//   return element.length > 4;
// } 
//Example3  
// const ages = [12, 17, 20, 25, 30, 15, 18];

// const adults = ages.filter(isAdult);
// console.log(adults);

// function isAdult(element) {
//   return element >= 18;
// }

//reduce()  
//Example1
// const numbers = [1, 2, 3, 4, 5]; 

// const sum = numbers.reduce(add, 0);
// console.log(sum);

// function add(accumulator, element) {
//   return accumulator + element;
// }

//Example2
// const words = ["Hello", " ", "World", "!"];  

// const result = words.reduce(concatenate, "");
// console.log(result);
// function concatenate(accumulator, element) {
//   return accumulator + element;
// }
//Example3
// const prices = [29.99, 49.99, 19.99, 9.99]; 
// const total = prices.reduce(calculateTotal, 0);
// console.log(total);

// function calculateTotal(accumulator, element) {
//   return accumulator + element;
// }   

//find()
//Example1
// const numbers = [5, 12, 8, 130, 44];
// const found = numbers.find(isLargeNumber);
// console.log(found);
// function isLargeNumber(element) {
//   return element > 10;
// }
//Example2
// const words = ["apple", "banana", "cherry", "date"];
// const found = words.find(isLongWord);

// console.log(found);

// function isLongWord(element) {
//   return element.length > 5;
// }