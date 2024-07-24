const ele = document.getElementById('para1');
console.log(ele);
ele.textContent = `This is Frist paragraph.`;


/// Select an HTML elements by its class and change its background color.
const container = document.querySelector('.container');
console.log(container);
container.style.backgroundColor = '#444';
container.style.color = '#eee';


// # Create a new div element with some text content and append it to the body.
const box = document.createElement('div');
box.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione deleniti, repudiandae explicabo omnis tempora laboriosam maiores cumque amet provident quia obcaecati, earum quod illo voluptatum, repellendus magnam veniam itaque sapiente?';

document.body.appendChild(box);



//# create a new li element and add it to an existing ul list.

let list = document.querySelector('ul');
let li = document.createElement('li');
li.innerText = "PineApple";
list.appendChild(li);


//# select an html element and remove its from the DOM.
const content = document.querySelector('.content');
console.log(content);
content.remove();


// # remove the last child of a specific HTML element.

let myBox = document.querySelector('#myElement');
console.log(myBox.lastElementChild);
myBox.removeChild(myBox.lastElementChild);


// 

// # select an HTML element and change one of its attibutes (eg, src of an img).
let image = document.querySelector('img');
image.setAttribute('src', 'https://www.shutterstock.com/image-photo/new-sprout-grows-on-transparent-260nw-2271911621.jpg');





// # add and remove a CSS class to/from an Html element .

image.setAttribute('class', 'image');
image.removeAttribute('class');

myBox = document.querySelector('#myElement');
myBox.setAttribute('class', 'myContainer');
myBox.classList.add('box');
myBox.classList.remove('myContainer');



// # Add a click event listener to a button that change the text content of a paragraph.

let para = document.querySelector('.footer p');
let button = document.querySelector('.footer button');
button.addEventListener('click', function () {
    para.remove();
});



// # add a mouseover event listener to an element that changes it border color.

para.style.border = '5px solid red';
para.addEventListener('mouseover', () => {
    para.style.borderColor = 'blue';
})




