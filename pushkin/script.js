"use strict";
const linkItems = Array.from(document.querySelectorAll('.menu__item-link'));
const nameDish = Array.from(document.querySelectorAll('.menu__name-text'));
const snacksCards = Array.from(document.querySelector('#firstCard').querySelectorAll('.dish'));
const saladsCards = Array.from(document.querySelector('#secondCard').querySelectorAll('.dish'));
const soupsCards = Array.from(document.querySelector('#thirdCard').querySelectorAll('.dish'));
const hotDishesCards = Array.from(document.querySelector('#forthCard').querySelectorAll('.dish'));
const garnishCards = Array.from(document.querySelector('#fifthCard').querySelectorAll('.dish'));
const dessertsCards = Array.from(document.querySelector('#sixCard').querySelectorAll('.dish'));
const clickEvent = ('click' || 'touchstart' || 'touchend' || 'touchcancel' || 'touchmove');
const rightButtonSlider = document.querySelector('#rightButton');
const leftButtonSlider = document.querySelector('#leftButton');



const clearClassActive = (element, className) => {
    element.find(item => item.classList.remove(`${className}` + '_active'));
};

const setClassActive = (element, index, className) => {
    element[index].classList.add(`${className}` + '_active');
};


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
    
        setClassActive(linkItems, index, linkItems[index].classList[0]);
        setClassActive(nameDish, index, nameDish[index].classList[0]);
    
        setClassActive(snacksCards, index, snacksCards[index].classList[0]);
        setClassActive(saladsCards, index, saladsCards[index].classList[0]);
        setClassActive(soupsCards, index, soupsCards[index].classList[0]);
        setClassActive(hotDishesCards, index, hotDishesCards[index].classList[0]);
        setClassActive(garnishCards, index, garnishCards[index].classList[0]);
        setClassActive(dessertsCards, index, dessertsCards[index].classList[0]);
        if (item.classList[1].includes('_active')) {return;}
    });
};


linkItems.forEach(checkoutTabs);