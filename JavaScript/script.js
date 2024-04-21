'use strict';

var logoToRedirectHome = document.querySelector('.logo');

logoToRedirectHome.addEventListener('click',function(){
    window.location.href="index.html";
    console.log('Logo button clicked');
})

// menu icon click event

let menuBtn = document.querySelector('.menu-icon');

let navbar = document.querySelector('.container1-contents');

let sectionContents = document.querySelector('.Home-Contents');

menuBtn.addEventListener('click',function(){
    navbar.classList.toggle('active');
    sectionContents.classList.toggle('blur');
})