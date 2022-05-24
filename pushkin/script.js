"use strict";
const linkItems = Array.from(document.querySelectorAll('.menu__item-link'));
const slider = document.querySelector('.slider__container');
const itemsSlider = Array.from(document.querySelectorAll('.slider__dish-text'));
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
let indexElementClick = itemsSlider.findIndex((item) => item.classList[1].includes('slider__dish-text_active'));




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
        console.log(indexElementClick);
        if (item.classList[1].includes('_active')) {return;}
    });
};


slider.addEventListener(clickEvent, (event) => {

        if (event.target === leftButtonSlider) {
            if (indexElementClick == 0) {return;}
            clearClassActive(itemsSlider, 'slider__dish-text');
            setClassActive(itemsSlider, indexElementClick-1, 'slider__dish-text');

            clearClassActive(nameDish, nameDish[0].classList[0]);
            setClassActive(nameDish, indexElementClick-1, nameDish[0].classList[0]);

            clearClassActive(linkItems, linkItems[0].classList[0]);
            setClassActive(linkItems, indexElementClick-1, linkItems[0].classList[0]);
    
            clearClassActive(snacksCards, snacksCards[0].classList[0]);    
            setClassActive(snacksCards, indexElementClick-1, snacksCards[0].classList[0]);

            clearClassActive(saladsCards, saladsCards[0].classList[0]);
            setClassActive(saladsCards, indexElementClick-1, saladsCards[0].classList[0]);

            clearClassActive(soupsCards, soupsCards[0].classList[0]);
            setClassActive(soupsCards, indexElementClick-1, soupsCards[0].classList[0]);

            clearClassActive(hotDishesCards, hotDishesCards[0].classList[0]);
            setClassActive(hotDishesCards, indexElementClick-1, hotDishesCards[0].classList[0]);

            clearClassActive(hotDishesCards, hotDishesCards[0].classList[0]);
            setClassActive(hotDishesCards, indexElementClick-1, hotDishesCards[0].classList[0]);

            clearClassActive(garnishCards, garnishCards[0].classList[0]);
            setClassActive(garnishCards, indexElementClick-1, garnishCards[0].classList[0]);

            clearClassActive(dessertsCards, dessertsCards[0].classList[0]);
            setClassActive(dessertsCards, indexElementClick-1, dessertsCards[0].classList[0]);
            indexElementClick--;
        } 
        else if (event.target === rightButtonSlider) {
            console.log(indexElementClick);
            if (indexElementClick == (itemsSlider.length - 1)) {return;}
            clearClassActive(itemsSlider, 'slider__dish-text');
            setClassActive(itemsSlider, indexElementClick+1, 'slider__dish-text');

            clearClassActive(nameDish, nameDish[0].classList[0]);
            setClassActive(nameDish, indexElementClick+1, nameDish[0].classList[0]);

            clearClassActive(linkItems, linkItems[0].classList[0]);
            setClassActive(linkItems, indexElementClick+1, linkItems[0].classList[0]);

            clearClassActive(snacksCards, snacksCards[0].classList[0]);    
            setClassActive(snacksCards, indexElementClick+1, snacksCards[0].classList[0]);

            clearClassActive(saladsCards, saladsCards[0].classList[0]);
            setClassActive(saladsCards, indexElementClick+1, saladsCards[0].classList[0]);

            clearClassActive(soupsCards, soupsCards[0].classList[0]);
            setClassActive(soupsCards, indexElementClick+1, soupsCards[0].classList[0]);

            clearClassActive(hotDishesCards, hotDishesCards[0].classList[0]);
            setClassActive(hotDishesCards, indexElementClick+1, hotDishesCards[0].classList[0]);

            clearClassActive(hotDishesCards, hotDishesCards[0].classList[0]);
            setClassActive(hotDishesCards, indexElementClick+1, hotDishesCards[0].classList[0]);

            clearClassActive(garnishCards, garnishCards[0].classList[0]);
            setClassActive(garnishCards, indexElementClick+1, garnishCards[0].classList[0]);

            clearClassActive(dessertsCards, dessertsCards[0].classList[0]);
            setClassActive(dessertsCards, indexElementClick+1, dessertsCards[0].classList[0]);
            indexElementClick++;
        }
});


linkItems.forEach(checkoutTabs);

