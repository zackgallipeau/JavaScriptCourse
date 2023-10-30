'use strict';

///////////////////////////////////////

// Selectors
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.getElementById(`section--1`);

// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener(`click`, openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Event handlers

btnScrollTo.addEventListener(`click`, function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation

// This is less efficient than the method below
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('LINK');
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //matching strategy - makes sure to only act if a link is clicked
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;
  console.log(clicked);
  clicked.classList.add('operations__tab--active');
});

//////////////////////////////////////////
//////////////////////////////////////////

// LECTURES
/*
console.log(document.body);



const header = document.querySelector(`.header`);

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';

// document.querySelector(`.highlight`).textContent = 'hehehe boyy';

// header.prepend(message);
header.append(message);
// header.before(message);
// header.after(message);

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener(`click`, () => {
  message.remove();
});

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

const logo = document.querySelector('.nav__logo');

logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);
console.log(logo.src);

console.log(logo.getAttribute('src'));
console.log(logo.dataset.versionNumber);

logo.classList.add('a');
logo.classList.remove('b');
logo.classList.toggle('c');
logo.classList.contains('d');


const h1 = document.querySelector('h1');

// function h1Alert(e) {
//   alert('addEventListener: Great! You are reading the heading :D');
//   h1.removeEventListener('mouseenter', h1Alert);
// }
// h1.addEventListener('mouseenter', h1Alert);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV LINK', e.target, e.currentTarget);
});

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV BAR', e.target, e.currentTarget);
}),
  document.querySelector(`.nav`).addEventListener(`click`, function (e) {
    this.style.backgroundColor = randomColor();
    console.log('Header', e.target, e.currentTarget, this);
  });


const h1 = document.querySelector('h1');

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

// Traversing the DOM tree - downwards
h1.firstElementChild.style.color = 'red';
h1.lastElementChild.style.color = 'yellow';

// Traversing the DOM tree - upwards

h1.closest('.header').style.background = 'var(--gradient-secondary)';

console.log(h1.previousSibling);
// h1.previousSibling.textContent = 'goodbye';

const h1 = document.querySelector('h1');
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el != h1) {
    el.style.transform = 'scale(0.5)';
  }
});
*/
