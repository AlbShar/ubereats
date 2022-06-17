function searchCard() {
    const searchForm = document.querySelector('#search');
    searchForm.onkeyup = () => {
        let inputValue = searchForm.value.toUpperCase();
        let cardWrapper = document.querySelectorAll("#card_wrapper");
        let a, textValue;
        for (let i = 0; i < cardWrapper.length; i++) {
            a = cardWrapper[i].querySelector('.card');
            textValue = a.textContent || a.innerText;
            if (~textValue.toUpperCase().indexOf(inputValue)) {
                cardWrapper[i].style.display = '';
            } else {
                cardWrapper[i].style.display = 'none';
            }
        }
    };
}

export {searchCard};


