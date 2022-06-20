export const setClassActive = (element, index, className) => {
    element[index].classList.add(`${className}` + '_active');
};