import validator from "validator";

let closeBtn = document.querySelector(".modal-content__close");
let overlay = document.querySelector(".overlay");
let modalPopup = document.querySelector(".modal-content");
let ctaBtns = document.querySelectorAll("[data-type=\"question\"]");
let form = document.querySelector(".question-form");

let isModalOpen = false;

ctaBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!isModalOpen) {
            openPopup();
        }
    });
});

closeBtn.addEventListener("click", () => {
    if (isModalOpen) {
        closePopup();
    }
});

overlay.addEventListener("click", () => {
    if (isModalOpen) {
        closePopup();
    }
});

document.addEventListener("keydown", function (e) {
    if(e.keyCode === 27) {
        if (isModalOpen) {
            closePopup();
        }
    }
});

function closePopup() {
    overlay.style.display = "none";
    modalPopup.style.display = "none";
    isModalOpen = false;
}

function openPopup() {
    overlay.style.display = "block";
    modalPopup.style.display = "block";
    isModalOpen = true;
}

// валидация формы
let nameField = modalPopup.querySelector(".question-form__name");
let emailField = modalPopup.querySelector(".question-form__email");
let telField = modalPopup.querySelector(".question-form__tel");
let formFields = modalPopup.querySelectorAll(".question-form__field");
let messsage = modalPopup.querySelector(".modal-content__message");
let checkboxField = modalPopup.querySelector(".question-form__moms-checkbox-item");
let checkboxLabel = modalPopup.querySelector(".question-form__moms-checkbox");

form.onsubmit = function () {

    if (!validator.isEmpty(nameField.value)) {
        nameField.classList.remove("field-error");
        messsage.textContent = "";
    } else {
        nameField.classList.add("field-error");
        messsage.textContent = "Введите имя";
        return false;
    }

    if (validator.isEmail(emailField.value)) {
        emailField.classList.remove("field-error");
        messsage.textContent = "";
    } else {
        emailField.classList.add("field-error");
        messsage.textContent = "Некорректно введен Email";
        return false;
    }

    if (validator.isMobilePhone(telField.value, "ru-RU")) {
        telField.classList.remove("field-error");
        messsage.textContent = "";
    } else {
        telField.classList.add("field-error");
        messsage.textContent = "Некорректный номер телефона";
        return false;
    }

    if (!checkboxField.checked) {
        messsage.textContent = "Вы школьник? Поставьте галочку, если нет.";
        checkboxLabel.classList.add("errorColor");
        return false;
    } else {
        messsage.textContent = "";
        checkboxLabel.classList.remove("errorColor");
    }

    Array.from(formFields).forEach((field) => {
        if (validator.isEmpty(field.value)) {
            field.classList.add("field-error");
            messsage.textContent = "Заполните все поля";
            return false;
        } else {
            field.classList.remove("field-error");
            messsage.textContent = "";
        }
    });

};