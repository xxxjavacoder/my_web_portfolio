const humburger = document.querySelector('.humburger'),
    menu = document.querySelector('.menu'),
    close_menu = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
    menu.classList.add('active');
})

close_menu.addEventListener('click', () => {
    menu.classList.remove('active');
})
    