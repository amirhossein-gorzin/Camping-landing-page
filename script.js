const navBtn = document.querySelector('.nav__btn');
const navMenu = document.querySelector('.nav-menu');
const barsIcon = document.querySelector('.fa-bars');
const timesIcon = document.querySelector('.fa-times');

navBtn.addEventListener('click', function() {
    if (barsIcon.style.display !== 'none') {
        barsIcon.style.display = 'none';
        timesIcon.style.display = 'block';
        navMenu.style.left='0'
    } else {
        barsIcon.style.display = 'block';
        timesIcon.style.display = 'none';
        navMenu.style.left='-24rem'

    }
});
