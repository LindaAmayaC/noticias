//AGREGAMOS EL EVENTO DEL CLICK AL SIDE BAR 
document.querySelector(".menu-btn").addEventListener("click", () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

//AGREGAMOS EFECTO SCROLL REVEAL
ScrollReveal().reveal('.show');

//SE AGREGA UN DELAY
ScrollReveal().reveal('.news-cards', {delay: 550});
ScrollReveal().reveal('.cards-banner-one', {delay: 550});
ScrollReveal().reveal('.cards-banner-two', {delay: 550});