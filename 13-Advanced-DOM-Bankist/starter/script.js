'use strict';

///////////////////////////////////////

// Selectors
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.getElementById(`section--1`);

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

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

// Event listener on the parent element then assigns clicked to the child element that was clicked on
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //exits the function if an area inside the parent that is not a button was clicked
  if (!clicked) return;

  //forEach removes the active tab class the previous active class and then adds it to the one that was clicked.
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  //adds the active tab class to the correct tab
  clicked.classList.add('operations__tab--active');

  // Hides all tab content
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activates the correct tab content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Nav links fade animation

function navFade(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
}

nav.addEventListener('mouseover', navFade.bind(0.5));

nav.addEventListener('mouseout', navFade.bind(1));

// Sticky nav bar

// //ineffective method
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function (e) {
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// function observerCallback(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// }

// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

function stickyNav(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Reveal section animation

const allSections = document.querySelectorAll('.section');

function revealSection(entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
  } else {
    entry.target.classList.add('section--hidden');
  }
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

//hides sections initially
allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy loading images
const imageTargets = document.querySelectorAll('img[data-src');

function loadImage(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
}

const imageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imageTargets.forEach(img => imageObserver.observe(img));

// Slider functionality
function slider() {
  const slides = document.querySelectorAll('.slide');
  const buttonLeft = document.querySelector('.slider__btn--left');
  const buttonRight = document.querySelector('.slider__btn--right');
  let currentSlide = 0;
  const dotContainer = document.querySelector('.dots');

  createDots();
  activeDot(0);

  //Spreads the slides out to their appropriate location
  slides.forEach((s, i) => (s.style.transform = `translateX(${i}00%)`));

  //slide function

  function slideMove() {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${i - currentSlide}00%)`;
    });
  }

  //previous and next slide functions
  function previousSlide() {
    if (currentSlide === 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide--;
    }
    slideMove();
    activeDot(currentSlide);
  }

  function nextSlide() {
    if (currentSlide === slides.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    slideMove();
    activeDot(currentSlide);
  }

  //Creates the dots for the slider
  function createDots() {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button`
      );
    });
  }

  //Changes which dot is "active"
  function activeDot(slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  }

  // Event handlers

  //next slide event handler
  buttonRight.addEventListener('click', nextSlide);

  //previous slide event handler
  buttonLeft.addEventListener('click', previousSlide);

  //left/right arrow event handlers
  document.addEventListener('keydown', function (e) {
    //using short circuiting to only execute the function if the correct key is pressed
    e.key === 'ArrowLeft' && previousSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      currentSlide = slide;
      slideMove();
      activeDot(slide);
    }
  });
}
slider();

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
