let closeBtn = document.querySelector('.modal-content__close');
let overlay = document.querySelector('.overlay');
let form = document.querySelector('.modal-content');
let ctaBtns = document.querySelectorAll('[data-type="question"]');

let isModalOpen = false;

ctaBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!isModalOpen) {
      openPopup();
    }
  });
})

closeBtn.addEventListener('click', () => {
  if (isModalOpen) {
    closePopup();
  }
})

overlay.addEventListener('click', () => {
  if (isModalOpen) {
    closePopup();
  }
})

document.addEventListener('keydown', function (e) {
  if(e.keyCode === 27) {
    if (isModalOpen) {
      closePopup();
    }
  }
});

function closePopup() {
  overlay.style.display = 'none';
  form.style.display = 'none';
  isModalOpen = false;
}

function openPopup() {
  overlay.style.display = 'block';
  form.style.display = 'block';
  isModalOpen = true;
}