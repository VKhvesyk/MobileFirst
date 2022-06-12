"use strict"
const menuBtn = document.querySelector('.header__hamburger');
const menu = document.querySelector('.nav');


menuBtn.addEventListener('click', function(event){
    event.preventDefault();
    toggleMenu();
})


function toggleMenu(){
    menu.classList.toggle('nav_active');
    menuBtn.classList.toggle('header__hamburger_active');
    document.body.classList.toggle('hide-overflow');
}