const sliderWrapper = document.querySelector('.slider__container');
const rightButtonSlider = document.querySelector('#rightButton');
const leftButtonSlider = document.querySelector('#leftButton');
let indexElementClick = itemsSlider.findIndex((item) => item.classList[1].includes('slider__dish-text_active'));

import {clearClassActive} from "../../desktop.blocks/menu/clearClassActive.js";
import {setClassActive} from "../../desktop.blocks/menu/setClassActive.js";
import  {linkItems, itemsSlider, nameDish, snacksCards, saladsCards, clickEvent, soupsCards, hotDishesCards, 
    garnishCards, dessertsCards} 
    from "../../desktop.blocks/menu/checkoutTabs.js";

function slider()  {
    sliderWrapper.addEventListener(clickEvent, (event) => {

        if (event.target === leftButtonSlider) {
            if (indexElementClick == 0) {
                indexElementClick = 6;
            }
            leftButtonSlider.style.backgroundColor = '';

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
            if (indexElementClick == (itemsSlider.length - 1)) {
                indexElementClick = -1;
            } 

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
}

export {slider};