'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

function closeModal() {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
}

function openModal() {
  console.log(`Button clicked`);
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
}

//adds an eventlistener for each of the 3 buttons to open the modal when clicked
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
}

//adds event listeners to the overlay and the close button which will close the modal when pressed
btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
