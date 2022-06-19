export const clearClassActive = (element, className) => {
    element.find(item => item.classList.remove(`${className}` + '_active'));
};