// const items = [
//   {
//     image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
//     title: 'BIOLOID',
//     description: 'Это популярная серия программируемых робототехнических конструкторов компании Robotis. Серия представлена разнообразными универсальными наборами, которые подойдут как начинающим робототехникам, так и специалистам, работающим над решением актуальных робототехнических задач. Также в наборе есть пульт для управления роботом и набор пластиковых элементов для придания уникального вида собранным моделям.',
//     price: '82 000'
//   },
//   {
//     image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
//     title: 'BIOLOID Premium kit',
//     description: 'BIOLOID Premium kit – набор для создания различных шагающих роботов на основе моторов Dynamixel и контроллера СМ-530, для образования, игр и соревнований.',
//     price: '126 000'
//   },
//   {
//     image: 'https://code.s3.yandex.net/web-code/oop/card_detail2.png',
//     title: 'Airwheel',
//     description: 'Модель позволяет использовать при движении и педали и электрическую тягу, а также их сочетание. Съемный аккумулятор легко заменяется во время поездки, позволяя тем самым существенно увеличивать ее продолжительность.',
//     price: '145 000'
//   },
// ];


fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=30')
.then((res) => {
  // Проверяем успешность запроса и выкидываем ошибку
  if (!res.ok) {
    throw new Error('Error occurred!')
  }
  return res.json()
})
  .then((data) => {
    console.log(data);
    appendCards(data);
  })
  .catch((err) => {
    console.log(err); // "Что-то пошло не так: ..."
  });


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
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__description').textContent = this._body;

    return this._element;
  }
}

function appendCards(data) {
  data.forEach((item) => {
  
    const card = new Card(item, '.cards__card-template');
    const cardElement = card.generateCard();
  
    // Добавляем в DOM
    document.querySelector('.cards__list').append(cardElement);
  });
}

// items.forEach((item) => {
  
//   const card = new Card(item, '.cards__card-template');
//   const cardElement = card.generateCard();

//   // Добавляем в DOM
//   document.querySelector('.cards__list').append(cardElement);
// });
