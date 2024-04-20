'use strict';

var logoToRedirectHome = document.querySelector('.logo');

logoToRedirectHome.addEventListener('click',function(){
    window.location.href="index.html";
    console.log('Logo button clicked');
})