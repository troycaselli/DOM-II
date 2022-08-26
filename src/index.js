import './less/index.less'

// Your code goes here!

// mouseover

const linkArr = Array.from(document.querySelectorAll('.main-navigation a'));

linkArr.forEach(link => {
    link.addEventListener('mouseover', (event) => {
    event.target.textContent = 'Poof!';
    })
})

// mouseleave

const homeLink = document.querySelector('.nav a:nth-of-type(1)');
const aboutLink = document.querySelector('.nav a:nth-of-type(2)');
const blogLink = document.querySelector('.nav a:nth-of-type(3)');
const contactLink = document.querySelector('.nav a:nth-of-type(4)');

homeLink.addEventListener('mouseleave', (event) => {
    homeLink.textContent = 'Home';
})
aboutLink.addEventListener('mouseleave', (event) => {
    aboutLink.textContent = 'About Us';
})
blogLink.addEventListener('mouseleave', (event) => {
    blogLink.textContent = 'Blog';
})
contactLink.addEventListener('mouseleave', (event) => {
    contactLink.textContent = 'Contact';
})

// keydown

const copyright = document.querySelector('footer p');

document.addEventListener('keydown', function(event) {
    if(event.key === '-') {
        copyright.style.fontSize = '.5rem';
        console.log('working');
    } else if(event.key === '+') {
        copyright.style.fontSize = '1.5rem';
        console.log('working');
    } 
})

// scroll

const mainNav = document.querySelector('.main-navigation');

document.addEventListener('scroll', event => {
    mainNav.style.backgroundColor = '#FFEBCD';
})

// load

window.addEventListener('load', event => console.log(`Page is loaded!`));

// (html and css changed on DOM for functionality below)

const form = document.createElement('form');
document.querySelector('.content-destination').appendChild(form);
form.classList.add('form-class');

const label = document.createElement('label');
label.textContent = 'Desired Oasis: ';
label.setAttribute('for', 'location');
label.style.fontSize = '1.5rem';
document.querySelector('form').appendChild(label);

const inputText = document.createElement('input');
inputText.setAttribute('id', 'location');
inputText.setAttribute('type', 'text');
document.querySelector('form').appendChild(inputText);

const submitButton = document.createElement('input');
submitButton.setAttribute('id', 'submit');
submitButton.setAttribute('type', 'submit');
document.querySelector('form').appendChild(submitButton);

const section = document.querySelector('.content-destination');
section.style.display = 'flex';
section.style.flexDirection = 'column';
section.style.alignItems = 'center';

const formClass = document.querySelector('.form-class');
formClass.style.marginTop = '2%';

// submit

form.addEventListener('submit', (event) => {
    if(input.value === '') {
        event.preventDefault();
        alert('No destination submitted');
    } else {
        alert('submitted!');
        formClass.reset();
    }
})

// focus

const input = document.querySelector('form #location');

input.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = '#17A2B8';
})

// blur

input.addEventListener('blur', (event) => {
    event.target.style.background = '';
})

// dblclick

document.querySelectorAll('.destination .btn').forEach(button => {
    button.addEventListener('dblclick', event => {
        alert('A single click will do!');
    })
})

// beforeunload

window.addEventListener('beforeunload', (event) => {
    console.log(`Are you sure you want to leave before booking your dream vacation?`);
});
