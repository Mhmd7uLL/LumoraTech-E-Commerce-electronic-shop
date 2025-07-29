//   Show more button   //

function showMoreBtn() {
    const gridExtra = document.getElementById('product-more')
    const showMoreBtnContainer = document.getElementById('show-more-container')

    gridExtra.classList.toggle('active');
    showMoreBtnContainer.style.display = 'none';
}

