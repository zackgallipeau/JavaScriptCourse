'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.getElementById(`section--1`);

btnScrollTo.addEventListener(`click`, function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
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
*/

const h1 = document.querySelector('h1');

function h1Alert(e) {
  alert('addEventListener: Great! You are reading the heading :D');
  h1.removeEventListener('mouseenter', h1Alert);
}
h1.addEventListener('mouseenter', h1Alert);
