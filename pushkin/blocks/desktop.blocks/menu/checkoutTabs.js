const linkItems = Array.from(document.querySelectorAll('.menu__item-link'));
const itemsSlider = Array.from(document.querySelectorAll('.slider__dish-text'));
const nameDish = Array.from(document.querySelectorAll('.menu__name-text'));
const snacksCards = Array.from(document.querySelector('#firstCard').querySelectorAll('.dish'));
const saladsCards = Array.from(document.querySelector('#secondCard').querySelectorAll('.dish'));
const soupsCards = Array.from(document.querySelector('#thirdCard').querySelectorAll('.dish'));
const hotDishesCards = Array.from(document.querySelector('#forthCard').querySelectorAll('.dish'));
const garnishCards = Array.from(document.querySelector('#fifthCard').querySelectorAll('.dish'));
const dessertsCards = Array.from(document.querySelector('#sixCard').querySelectorAll('.dish'));
const clickEvent = ('click' || 'touchstart' || 'touchend' || 'touchcancel' || 'touchmove');
let indexElementClick = itemsSlider.findIndex((item) => item.classList[1].includes('slider__dish-text_active'));


import { clearClassActive } from "./clearClassActive.js";
import { setClassActive } from "./setClassActive.js";

const checkoutTabs = (item, index) => {
    item.addEventListener(clickEvent, () => {
        clearClassActive(linkItems, linkItems[index].classList[0]);
        clearClassActive(nameDish, nameDish[index].classList[0]);
        clearClassActive(snacksCards, snacksCards[index].classList[0]);    
        clearClassActive(saladsCards, saladsCards[index].classList[0]);
        clearClassActive(soupsCards, soupsCards[index].classList[0]);
        clearClassActive(hotDishesCards, hotDishesCards[index].classList[0]);
        clearClassActive(garnishCards, garnishCards[index].classList[0]);
        clearClassActive(dessertsCards, dessertsCards[index].classList[0]);
        clearClassActive(itemsSlider, itemsSlider[index].classList[0]);

    
        setClassActive(linkItems, index, linkItems[index].classList[0]);
        setClassActive(nameDish, index, nameDish[index].classList[0]);
        setClassActive(snacksCards, index, snacksCards[index].classList[0]);
        setClassActive(saladsCards, index, saladsCards[index].classList[0]);
        setClassActive(soupsCards, index, soupsCards[index].classList[0]);
        setClassActive(hotDishesCards, index, hotDishesCards[index].classList[0]);
        setClassActive(garnishCards, index, garnishCards[index].classList[0]);
        setClassActive(dessertsCards, index, dessertsCards[index].classList[0]);
        setClassActive(itemsSlider, index, itemsSlider[index].classList[0]);
        indexElementClick = index;
        if (item.classList[1].includes('_active')) {return;}
    });
};

export {linkItems, itemsSlider, nameDish, snacksCards, saladsCards, clickEvent,
    soupsCards, hotDishesCards, garnishCards, dessertsCards, checkoutTabs};