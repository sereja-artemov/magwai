let menuBtn = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.main-nav');
let contactsBlock = document.querySelector('.header__contacts');


menuBtn.addEventListener('click', (e) => {
  if (menu.classList.contains('main-nav--active')) {
    menu.classList.remove('main-nav--active');
    contactsBlock.classList.remove('header__contacts--active');
    document.body.style.overflow = 'auto';
  } else {
    menu.classList.add('main-nav--active');
    contactsBlock.classList.add('header__contacts--active');
    document.body.style.overflow = 'hidden';
  }
})