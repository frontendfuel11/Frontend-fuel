const menuBar = document.querySelector('.nav_Links'),
toggleMenuBtn = document.querySelector('.toggle_menu'),
searchToggletBtn = document.querySelector('.search_icon'),
searchbar = document.querySelector('.searchbar'),
searchcloseBtn = document.querySelector('.search_close');

toggleMenuBtn.addEventListener('click', () => {
     menuBar.classList.toggle('active');
})

searchToggletBtn.addEventListener('click', () => {
     searchbar.classList.add('active');
})
searchcloseBtn.addEventListener('click', () => {
     searchbar.classList.remove('active');
})