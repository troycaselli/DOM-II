import './less/index.less'

// Your code goes here!

const homeLink = document.querySelector('.main-navigation a:nth-of-type(1)');

homeLink.addEventListener('mouseover', (event) => {
    event.target.textContent = 'Poof!';
})

homeLink.addEventListener('mouseleave', (event) => {
    event.target.textContent = 'Home';
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
    mainNav.style.backgroundColor = '#345678';
})

window.addEventListener('load', event => console.log(`Page is loaded!`));

const input = document.querySelector('input');

input.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = '#83C3E9';
})

input.addEventListener('blur', (event) => {
    event.target.style.background = '';
})