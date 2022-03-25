'use strict';

const tabsContainer = document.querySelector('.card__tabs');
const tabs = document.querySelectorAll('.card__tabs-tab');

const tabsContent = document.querySelectorAll('.card__content')
const navBar = document.querySelector('.articles__nav-links')
// const activeTab = document.querySelector ('.');

tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.card__tabs-tab');
    // console.log(clicked);

    if(!clicked) return;

    tabs.forEach(t => t.classList.remove('card__tabs-tab--active'));
    tabsContent.forEach(c => c.classList.remove('card__content-active'));

    clicked.classList.add('card__tabs-tab--active');

//     if (!clicked) return;

//     tabs.forEach(t => t.classList.remove('.card__tabs-tab--active'));
//     //remove content too!
//     console.log(clicked);

//     clicked.classList.add('.card__tabs-tab--active');

document.querySelectorAll(`.card__content-${clicked.dataset.tab}`).forEach(c =>{
    
    c.classList.add('card__content-active');
});

// document.querySelector(`.card__content-${clicked.dataset.tab}`)
//         .classList.add('card__content-active');
});


navBar.addEventListener('mouseover', function (e){

    
    if (e.target.classList.contains('articles__nav-links--link')){
        const link = e.target;
        const siblings = link.closest('.articles__nav-links').querySelectorAll('.articles__nav-links--link');
        const log =link.closest('.articles__nav-links').querySelector('img');
        // document.querySelectorAll('.articles__nav-links');

        siblings.forEach(el => {
            if(el !== link) el.style.opacity = 0.5;
        });
        log.style.opacity = 0.5;
    }

});
navBar.addEventListener('mouseout', function (e){

    
    if (e.target.classList.contains('articles__nav-links--link')){
        const link = e.target;
        const siblings = link.closest('.articles__nav-links').querySelectorAll('.articles__nav-links--link');
        const log =link.closest('.articles__nav-links').querySelector('img');
        // document.querySelectorAll('.articles__nav-links');

        siblings.forEach(el => {
            if(el !== link) el.style.opacity = 1;
        });
        log.style.opacity = 1;
    }

});

