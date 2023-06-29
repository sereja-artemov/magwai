/*eslint linebreak-style: ["error", "windows"]*/

let limit = 30;
let loadMoreBtn = document.querySelector(".main-btn__load-more");
let visibleCards = 4;
let startCards = 4;

function getCardsData() {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${limit}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error occurred!");
            }
            return res.json();
        })
        .then((data) => {
            localStorage.setItem('cards', JSON.stringify(data));
            initCards();
        })
        .catch((err) => {
            console.log(err);
        });
}

getCardsData();

function initCards() {
    const allCards = JSON.parse(localStorage.getItem('cards'));
    const cardsToLoad = allCards.slice(0, startCards); 

    // Создаем DOM-элементы для новых карточек и добавляем их в контейнер
    cardsToLoad.forEach(cardItem => {
        const card = new Card(cardItem, ".cards__card-template");
        const cardElement = card.generateCard();

        document.querySelector(".cards__list").append(cardElement);
    });
}

function loadMoreCards() {
    const allCards = JSON.parse(localStorage.getItem('cards'));
    const cardsToLoad = allCards.slice(visibleCards, visibleCards + 4); // Выбираем следующие 4 карточки из списка
    
    // Создаем DOM-элементы для новых карточек и добавляем их в контейнер
    cardsToLoad.forEach(cardItem => {
        const card = new Card(cardItem, ".cards__card-template");
        const cardElement = card.generateCard();

        document.querySelector(".cards__list").append(cardElement);
    });
    
    visibleCards += 4; // Увеличиваем счетчик видимых карточек
    
    // Проверка, показывать ли кнопку "Загрузить еще" или скрывать
    if (visibleCards >= allCards.length) {
        loadMoreBtn.style.display = "none";
    }
}


class Card {
    constructor(data, cardSelector) {
        this._title = data.title;
        this._body = data.body;
        this._image = data.image;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector(".card")
            .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector(".card__image").src = this._image || "../../../img/post-img.png";
        this._element.querySelector(".card__title").textContent = this._title;
        this._element.querySelector(".card__description").textContent = this._body;

        return this._element;
    }
}

function appendCards(data) {
    data.forEach((item) => {
        const card = new Card(item, ".cards__card-template");
        const cardElement = card.generateCard();

        document.querySelector(".cards__list").append(cardElement);
    });
}

loadMoreBtn.addEventListener("click", loadMoreCards);
