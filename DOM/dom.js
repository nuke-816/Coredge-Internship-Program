// Examine the document objectsconsole.dir(document);

// console.log(document.domain);// Getting the domain name of the document
// console.log(document.cookie);// Getting the cookies of the document
// console.log(document.URL);// Getting the URL of the document
// console.log(document.title);// Getting the title of the document
// //document.title = 123;// Changing the title of the document
// console.log(document.doctype);// Getting the doctype of the document

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');// Getting element by ID
// header.style.borderBottom = 'solid 4px #000';// Adding style to the element
// console.log(headerTitle);
//headerTitle.textContent = 'Assalamualikum';
//headerTitle.innerText = 'Waalaikumussalam';// Both textContent and innerText works same but textContent is faster
//headerTitle.innerHTML = '<h3>Hello World</h3>';// This will change the inner HTML of the element
// headerTitle.style.borderBottom = 'solid 3px #000';// Adding style to the element

// var items = document.getElementsByClassName('list-group-item');// Getting elements by class name
// console.log(items);
// items[0].style.fontWeight = 'bold';
// items[1].textContent = 'Hello 2';// Changing the text of the second element
// items[2].style.backgroundColor = 'yellow';
// //Gives Error
// //items.style.backgroundColor = '#f4f4f4';// Changing background color of all elements
// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = '#d28484';// Changing background color of all elements
// }
//item5 will not change beacuse it dont have class 'list-group-item'


//getting elements by tag name
var li = document.getElementsByTagName('li');// Getting elements by tag name
console.log(li);
li[0].style.fontWeight = 'bold';
li[1].textContent = 'Hello 2';// Changing the text of the second element    
li[2].style.backgroundColor = 'yellow';
for(var i=0; i<li.length; i++){
    li[i].style.backgroundColor = '#84d2b2';// Changing background color of all elements
}

// Query Selector
var header = document.querySelector('#main-header');// Getting element by ID
header.style.borderBottom = 'solid 4px #ff0000';

var input = document.querySelector('input');// Getting element by tag name
input.value = 'Hello World';// Changing the value of the input

var submit = document.querySelector('input[type="submit"]');// Getting element by attribute
submit.value = "SEND KRO";// Changing the value of the submit button

var item = document.querySelector('.list-group-item');// Getting element by class name
item.style.color = 'red';// Changing the color of the first item

var lastItem = document.querySelector('.list-group-item:last-child');// Getting last element by class name
lastItem.style.color = 'blue';// Changing the color of the last item

var secondItem = document.querySelector('.list-group-item:nth-child(2)');// Getting second element
secondItem.style.color = 'purple';// Changing the color of the second item

// Query Selector All
var titles = document.querySelectorAll('.title');// Getting all elements by class name
console.log(titles);
titles[0].textContent = 'what items?';// Changing the text of the first element