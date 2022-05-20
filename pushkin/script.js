const linkItems = Array.from(document.querySelectorAll('.menu__item-link'));
const nameDish = Array.from(document.querySelectorAll('.menu__name-text'));
const cardSnack = Array.from(document.querySelector('#firstCard').querySelectorAll('.dish'));
const cardSalad = Array.from(document.querySelector('#secondCard').querySelectorAll('.dish'));
const cardSoup = Array.from(document.querySelector('#thirdCard').querySelectorAll('.dish'));
const cardHotDishes = Array.from(document.querySelector('#forthCard').querySelectorAll('.dish'));
const cardGarnish = Array.from(document.querySelector('#fifthCard').querySelectorAll('.dish'));
const cardDessert = Array.from(document.querySelector('#sixCard').querySelectorAll('.dish'));

const clearClassActive = (element, className) => {
    element.find(item => item.classList.remove(`${className}` + '_active'));
};

const setClassActive = (element, index, className) => {
    element[index].classList.add(`${className}` + '_active');
};


const checkoutTabs = (item, index) => {
    item.onclick = () => {
    clearClassActive(linkItems, linkItems[index].classList[0]);
    clearClassActive(nameDish, nameDish[index].classList[0]);

    clearClassActive(cardSnack, cardSnack[index].classList[0]);    
    clearClassActive(cardSalad, cardSalad[index].classList[0]);
    clearClassActive(cardSoup, cardSoup[index].classList[0]);
    clearClassActive(cardHotDishes, cardHotDishes[index].classList[0]);
    clearClassActive(cardGarnish, cardGarnish[index].classList[0]);
    clearClassActive(cardDessert, cardDessert[index].classList[0]);

    setClassActive(linkItems, index, linkItems[index].classList[0]);
    setClassActive(nameDish, index, nameDish[index].classList[0]);

    setClassActive(cardSnack, index, cardSnack[index].classList[0]);
    setClassActive(cardSalad, index, cardSalad[index].classList[0]);
    setClassActive(cardSoup, index, cardSoup[index].classList[0]);
    setClassActive(cardHotDishes, index, cardHotDishes[index].classList[0]);
    setClassActive(cardGarnish, index, cardGarnish[index].classList[0]);
    setClassActive(cardDessert, index, cardDessert[index].classList[0]);


    if (item.classList[1].includes('_active')) {return;}
    };
};

linkItems.forEach(checkoutTabs);