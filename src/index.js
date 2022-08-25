import './less/index.less'

// Your code goes here!

const linkArr = Array.from(document.querySelectorAll('.main-navigation a'));

linkArr.forEach(link => {
    link.addEventListener('mouseover', (event) => {
    event.target.textContent = 'Poof!';
    })
})

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


const mainNav = document.querySelector('.main-navigation');

document.addEventListener('scroll', event => {
    mainNav.style.backgroundColor = '#FFEBCD';
})

window.addEventListener('load', event => console.log(`Page is loaded!`));

const input = document.querySelector('form #location');

input.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = '#17A2B8';
})

input.addEventListener('blur', (event) => {
    event.target.style.background = '';
})

document.querySelector('label').style.fontSize = '1.5rem';
const form = document.querySelector('form');
const formClass = document.querySelector('.form-class');

form.addEventListener('submit', (event) => {
    if(input.value === '') {
        event.preventDefault();
        alert('No destination submitted');
    } else {
        alert('submitted!');
        formClass.reset();
    }
})

document.querySelectorAll('.destination .btn').forEach(button => {
    button.addEventListener('dblclick', event => {
        alert('A single click will do!');
    })
})

window.addEventListener('beforeunload', (event) => {
    console.log(`Are you sure you want to leave before booking your dream vacation?`);
});
