'use strict'

window.onload = function() {
 paralaxHeader();   
};

function paralaxHeader() {
    const header = document.querySelector('.site__header');
    const body = document.querySelector('.site__body');
    let paralaxOffset = header.offsetHeight;

    header.classList.add('site__header--fixed');
    body.style.marginTop = paralaxOffset + 'px';
}




