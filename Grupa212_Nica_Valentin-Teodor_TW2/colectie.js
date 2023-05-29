const showMoreButton = document.querySelector('.show-more-btn');
const moreImages = document.querySelector('.more');

showMoreButton.addEventListener('click', function () {
    moreImages.style.display = 'block';
    showMoreButton.style.display = 'none';
});

