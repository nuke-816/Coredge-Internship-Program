//cannot be a reserved keyword
//should be meaningful
//cannot start with a number
//cannot contain a space or hyphen
//are case-sensitive
//can use _ or $

// let name = "Talal";
// let first_name = "Talal";
// let $name = "Talal";
// let _name = "Talal";

// console.log(name);
// console.log(first_name);
// console.log($name);
// console.log(_name);

// const interstRate1 = 0.3;
// // interstRate = 1; // This line would cause an error because const variables cannot be reassigned
// console.log(interstRate1);

// let interstRate2 = 0.3;
// interstRate2 = 1;
// console.log(interstRate2);

// //Premitive types: number, string, boolean, undefined, null

// let name = "Talal"; //string literal
// let age = 30; //number literal
// let isApproved = false; //boolean literal
// let firstName = undefined; //undefined literal
// let selectedColor = null; //null literal    
// console.log(name, age, isApproved, firstName, selectedColor);

//Dynamic typing

// let dynamicVar = "Talal";
// typeof dynamicVar; //string
// console.log(dynamicVar);

// dynamicVar = 20;
// typeof dynamicVar; //number
// console.log(dynamicVar);

// let first_name = undefined;
// typeof first_name; //undefined
// let last_name = null;
// typeof last_name; //object
// console.log(typeof first_name);
// console.log(typeof last_name);


//Reference types: Object, Array, Function

// let person = {
//     name: "Talal",
//     age: 20
// };

// console.log(person);

//Dot notation
// console.log(person.name);

//Bracket notation
// console.log(person["name"]);

// let selected = "name";
// person[selected] = "Khan";
// console.log(person.name);

// //Array
// let selectedColors = ["red", "blue"];
// // console.log(selectedColors);
// console.log(selectedColors[0]);

// //length of array is dynamic
// selectedColors[2] = "green";
// console.log(selectedColors.length);
// console.log(selectedColors);

//Function
// function greet(name, lastName) {
//     console.log("Hello " + name + " " + lastName);
// }
// greet("Talal", "Khan");

// function square( number){
//     return number * number;
//     }

//     console.log(square(2));

//Loops

let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(i + ": " + array[i]);
}

//for...of loop
for (let number of array) {
    console.log("Number: " + number);
}

//for...in loop
for (let index in array) {
    console.log("Index: " + index + ", Value: " + array[index]);
}   