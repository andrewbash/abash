'use strict'

window.onload = function() {
 paralaxHeader(); 
 mouseParalax()  
};

function paralaxHeader() {
    //Gives header a fixed position and adds margin to the body to offset the loss of the header from the flow

    const header = document.querySelector('.site__header');
    const body = document.querySelector('.site__body');
    let paralaxOffset = header.offsetHeight;

    header.classList.add('site__header--fixed');
    body.style.marginTop = paralaxOffset + 'px';
}




function mouseParalax() {
    // Code heavily modified from https://codepen.io/vahidseo/pen/qahfL
    
    const parallaxBox = document.querySelector ( '.hero .container' );
    const parentObj = parallaxBox.parentNode;
    const containerWidth = parseInt( parentObj.offsetWidth );
    const containerHeight = parseInt( parentObj.offsetHeight );
    const left = 1;
    const top = 1;
    const speed = 8;
    
    parallaxBox.onmousemove = function ( event ) {
        event = event || window.event;
        const x = event.clientX - parallaxBox.offsetLeft;
        const y = event.clientY - parallaxBox.offsetTop;

        let translationX = left - ( ( ( x - ( parseInt( parallaxBox.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed );
        let translationY = top - ( ( ( y - ( parseInt( parallaxBox.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed );
        
        parallaxBox.style.transform = 'translate(' + translationX + 'px, ' + translationY + 'px)';
        
    }
    
}

