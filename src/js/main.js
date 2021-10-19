import '../scss/style.scss';

const imgPath = 'src/assets/';
const clothes = [
    {
        id:    0,
        title: 'Классный худи',
        price: 350,
        isNew: true,
        img:   `${imgPath}hoodie.png`,
    },
    {
        id:    1,
        title: 'Класная футболка',
        price: 220,
        isNew: true,
        img:   `${imgPath}shirt.png`,
    },
    {
        id:    2,
        title: 'Классный худи',
        price: 350,
        isNew: false,
        img:   `${imgPath}hoodie.png`,
    },
    {
        id:    3,
        title: 'Класная футболка',
        price: 220,
        isNew: false,
        img:   `${imgPath}shirt.png`,
    },
    {
        id:    4,
        title: 'Класная куртка',
        price: 500,
        isNew: false,
        img:   `${imgPath}lacoste.jpg`,
    },
    {
        id:    5,
        title: 'Класная куртка',
        price: 500,
        isNew: true,
        img:   `${imgPath}lacoste.jpg`,
    },
];
const accessories = [
    {
        id:      6,
        title:   'Класная бутылка',
        price:   100,
        isNew:   true,
        img:     `${imgPath}bottle.png`,
        details: 'Что то',
    },
    {
        id:      7,
        title:   'Класная бутылка',
        price:   100,
        isNew:   false,
        img:     `${imgPath}bottle.png`,
        details: 'Что то',
    },
    {
        id:      8,
        title:   'Класные очки',
        price:   600,
        isNew:   true,
        img:     `${imgPath}ray.jpg`,
        details: 'Что то',
    },
    {
        id:      9,
        title:   'Класный рюкзак',
        price:   550,
        isNew:   true,
        img:     `${imgPath}tommy.jpg`,
        details: 'Что то',
    },
    {
        id:      10,
        title:   'Класные очки',
        price:   600,
        isNew:   false,
        img:     `${imgPath}ray.jpg`,
        details: 'Что то',
    },
    {
        id:      11,
        title:   'Класный рюкзак',
        price:   550,
        isNew:   false,
        img:     `${imgPath}tommy.jpg`,
        details: 'Что то',
    },
    {
        id:      12,
        title:   'Класный рюкзак',
        price:   600,
        isNew:   false,
        img:     `${imgPath}tommy.jpg`,
        details: 'Что то',
    },
];

function sortArray(arr) {
    arr.sort(item => (item.isNew ? -1 : 1));

    return arr;
}
const sortedClothes = sortArray(clothes);
const sortedAccessories = sortArray(accessories);
const mergedProducts = sortedClothes.concat(sortedAccessories);
const sortedProducts = sortArray(mergedProducts);
const makeModalCard = (title, img, price) => `
    <div class="modal-container">
    <div class="modal__inner inner">
        <div class="inner__image">
            <img
                src=${img}
                alt="Hoodie"
                class="inner__image_big"
                width="330"
                height="330"
            />
        </div>
        <div class="inner__mini">
            <button type="button"><img
                src="/src/assets/white.png"
                alt="White hoodie"
                class="inner__image_small"
                width="50"
                height="50"
            /></button>
            <button type="button"><img
            src="/src/assets/blue.png"
            alt="Blue"
            class="inner__image_small"
            width="50"
            height="50"
        /></button>
            <button type="button"><img
                src="/src/assets/gray.png"
                alt="Gray"
                class="inner__image_small"
                width="50"
                height="50"
            /></button>
        </div>
    </div>
    <div class="modal__content content">
        <h3 class="content__title">
            ${title}
        </h3>
        <div class="content__wrapper">
            <div class="content__points">
                <p class="content__text">${price}</p>
                <button class="button content__button  content__button_yellow" type="button">
                    Попросить 50 баллов
                </button>
            </div>
            <div class="content__balance balance">
                <div class="balance__description">
                    <p class="balance__title">Твой баланс:</p>
                    <span class="balance__subtitle"
                        >3 945 баллов</span
                    >
                </div>
                <div class="balance__image"></div>
            </div>
        </div>
        <div class="product-color">
            <div class="product-color__wrapper">
                <p class="product-color__title">Цвета:</p>
                <div class="product-color__color color">
                    <div class="color__item">
                        <div class="color__image"></div>
                        <div class="color__radio">
                            <input
                            id="radio-1"
                            type="radio"
                            name="radio"
                            value="1"
                            class="color__input"
                        />
                        <label class="color__label" for="radio-1">Синий</label>
                        </div>
                    </div>
                    <div class="color__item">
                        <div class="color__image"></div>
                        <div class="color__radio">
                            <input
                                id="radio-2"
                                type="radio"
                                name="radio"
                                value="2"
                                class="color__input"
                            />
                            <label class="color__label" for="radio-2">Синий</label>
                        </div>
                    </div>
                </div>
                <div class="product-size">
                    <p class="product-size__title">Размер:</p>
                    <div class="product-size__options options">
                        <div class="options__radio">
                            <input
                                id="radio-4"
                                type="radio"
                                name="radio"
                                value="4"
                                class="options__input"
                            />
                            <label class="options__label" for="radio-4">S</label>
                        </div>
                        <div class="options__radio">
                            <input
                                id="radio-5"
                                type="radio"
                                name="radio"
                                value="5"
                                class="options__input"
                            />
                            <label class="options__label" for="radio-5">M</label>
                        </div>
                        <div class="options__radio">
                            <input
                                id="radio-6"
                                type="radio"
                                name="radio"
                                value="6"
                                class="options__input"
                            />
                            <label class= "options__label" for="radio-6">L</label>
                        </div>
                        <div class="options__radio">
                            <input
                                id="radio-6"
                                type="radio"
                                name="radio"
                                value="6"
                                class="options__input"
                            />
                            <label class= "options__label" for="radio-6">L</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-info">
            <div class="product-info__item">
                <p class="product-info__title title">Детали:</p>
                <span class="product-info__subtitle"
                    >Брендированная толстовка от Qazaq Republic.
                    Материал: Хлопок 80%, Вискоза 20%</span
                >
            </div>
            <div class="product-info__item">
                <p class="product-info__title title">Как выбрать размер:</p>
                <span class="product-info__write"
                    >Написать дяде Рику для уточнения.</span
                >
            </div>
        </div>
    </div>
</div>
    `;
const makeProductCard = (title, img, price, isNew) => `
        <div class="catalog__item">
        <div class="catalog__image">
            <img src= ${img} alt="Shirt" width="330" height="330">
            ${isNew ? '<span class="catalog__badge">new</span>' : ''}
        </div>
        <div class="catalog__description">
        <div class="catalog__price">
            ${price}
        </div>
        <h3 class="catalog__title">
            ${title}
        </h3>
        <p class="catalog__size">Размеры S/M/L</p>
        <button class="button catalog__button catalog__button_blue">Заказать</button>
        </div>
`;

function addProducts(card) {
    const {
        title, img, price, isNew,
    } = card;
    const myCard = makeProductCard(title, img, price, isNew);

    document.querySelector('.js-catalog').innerHTML += myCard;
}
mergedProducts.forEach((card) => {
    addProducts(card);
});
const modal = document.querySelector('.modal');
const outer = document.querySelector('.modal__flag');

document.querySelectorAll('.js-category').forEach((item) => {
    item.addEventListener('click', () => {
        const categoryKey = item.getAttribute('data-id');

        if (categoryKey === 'all') {
            document.querySelector('.js-catalog').innerHTML = '';
            sortedProducts.forEach((card) => {
                addProducts(card);
            });
        } else if (categoryKey === 'cloth') {
            document.querySelector('.js-catalog').innerHTML = '';
            sortedClothes.forEach((card) => {
                addProducts(card);
            });
        } else if (categoryKey === 'accessories') {
            document.querySelector('.js-catalog').innerHTML = '';
            sortedAccessories.forEach((card) => {
                addProducts(card);
            });
        }

        document.querySelectorAll('.catalog__item').forEach((event) => {
            event.addEventListener('click', () => {
                modal.style.display = 'block';
                const image =  event.querySelector('img').src;
                const price = event.querySelector('.catalog__price').innerHTML;
                const title =  event.querySelector('.catalog__title').innerHTML;

                const temp = makeModalCard(title, image, price);

                outer.innerHTML += temp;
            });
        });
    });
});

document.querySelectorAll('.catalog__item').forEach((item) => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        const image =  item.querySelector('img').src;
        const price = item.querySelector('.catalog__price').innerHTML;
        const title =  item.querySelector('.catalog__title').innerHTML;

        const temp = makeModalCard(title, image, price);

        outer.innerHTML += temp;
    });
});

document.querySelector('.modal__button').addEventListener('click', () => {
    modal.style.display = 'none';

    if (outer.querySelector('.modal-container')) {
        outer.querySelector('.modal-container').remove();
    }
});
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';

        if (outer.querySelector('.modal-container')) {
            outer.querySelector('.modal-container').remove();
        }
    }
});
