const reviewsSlider = tns({
    container: '.reviews-slider',
    items: 3,
    slideBy: 1,
    gutter: 50,
    navContainer: '.reviews__slider-nav',
    controlsContainer: '.reviews__slider-controls'
});
// Select plan
const planBlock = document.querySelectorAll('.plan__item');


planBlock.forEach((item) => {
    item.addEventListener('click', changePlan)

    function changePlan() {
        removeAll()
        addBorder(this)
    }

    function removeAll() {
        planBlock.forEach((item) => {
            item.classList.remove('plan__item_active')
        })
    }

    function addBorder(block) {
        block.classList.add('plan__item_active')
    }
})
