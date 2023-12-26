let button = document.querySelector('#menu');
let navigation = document.querySelector('.navigation-collapsed');
let closeMenu = document.querySelector('#close-menu');
let featDrop = document.querySelector('.features');
let mainBlur = document.querySelector('.container');

 
button.addEventListener('click', () => {
    button.classList.add('close');
    navigation.classList.add('active');
    closeMenu.classList.remove('close');
    mainBlur.classList.add('blur');
    

    
    
})
closeMenu.addEventListener('click', () => {
    button.classList.remove('close');
    navigation.classList.remove('active');
    mainBlur.classList.remove('blur');
})




