// # add a click event listener to a button that changes the text content of a paragraph.
let paragraph = document.getElementById('para1');
let btn = document.getElementById('change-text');

btn.addEventListener('click', () => {
    paragraph.innerText = 'The .catch() method is a way to handle rejected promises. It takes a single argument: a function that is called if the promise is rejected. The argument of this function is the reason (error) why the promise was rejected.'
})




// # add a double click event  listener to an image that toggles its visibility.


let poster = document.getElementById('poster');
let hide = document.getElementById('img-hide');


// hide.addEventListener('dblclick', () => {
//     let val = poster.getAttribute('class');
//     if (!val) {
//         poster.setAttribute('class', 'visible');
//     } else {
//         poster.removeAttribute('class');
//     }
// })


hide.addEventListener('dblclick', function () {
    let visible = poster.className;
    if (!visible) {
        poster.classList.add('visible');
    } else {
        poster.classList.remove('visible');
    }
})



// # Add a mouseover event listener to an element that changes it's background color.

let paragraph2 = document.getElementById('para2');

// paragraph2.addEventListener('mouseover', (e) => {
//     e.target.style.backgroundColor = '#333';
//     e.target.style.color = '#fff';
// })

// paragraph2.addEventListener('mouseout', (e) => {
//     e.target.style.backgroundColor = '';
//     e.target.style.color = '';
// })


paragraph2.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#333';
    this.style.color = '#fff';
})

paragraph2.addEventListener('mouseout', function () {
    this.style.backgroundColor = '';
    this.style.color = '';
})






//# Add a keydown event listener to an input field that log s the key press to the console.

document.querySelector('#inputField').addEventListener('keydown', showChar);

function showChar(e) {
    console.log(e.key);
}




//# Add a keyup event listener to an input field that display the current value in a paragrapgh.

document.querySelector('#inputField2').addEventListener('keyup', showPara);

function showPara(e) {
    document.querySelector('#para3').innerText += e.key;
}




// # Add a submit event listener to a form data prevents the defaults submission and logs the form data to the console.
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(document.querySelector('#username').value);
    console.log(document.querySelector('#comment').value);
    console.dir(e.target);
});

//# add a change event listener to a select dropdown that display the selected value in the paragraph .
document.querySelector('#teams').addEventListener('change', (e) => {
    document.getElementById('myteam').textContent = `You are selected team : ${e.target.value}`;
})



//# add a click event listener to a list that log the text content of the clicked list item using event delegation.

// document.querySelector('ul').addEventListener('click', function (e) {
//     console.log(e.target.textContent);
// })




//# add a event listener to a  parent element that listens for events from dynamically added child elements.
const parent = document.querySelector('ul');

Array.from(parent.children).forEach((li) => {
    li.addEventListener('click', (e) => {
        console.log(e.target);
    })
})

const newli = document.createElement('li');
const text = document.createTextNode('Sixth Item');
newli.append(text);

parent.appendChild(newli);


