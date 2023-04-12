"use strict"; //enables stricter rules for javascript syntax to avoid common mistakes which makes the code more reliable
const burgerMenu = document.querySelector('.burger-menu'); 
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


