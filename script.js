// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3, /* Exibir 3 vídeos por vez */
//     spaceBetween: 30, /* Espaço entre os vídeos */
//     loop: true, /* Habilita loop */
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         768: {
//             slidesPerView: 2, /* Mostra 2 vídeos por vez em telas menores */
//         },
//         480: {
//             slidesPerView: 1, /* Mostra 1 vídeo por vez em telas pequenas */
//         }
//     }
// });
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Previne o comportamento padrão do link
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

  window.addEventListener("scroll", () => {
    const parallax = document.querySelector(".home");
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});


