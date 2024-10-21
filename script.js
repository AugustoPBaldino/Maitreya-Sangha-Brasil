

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // Exibe apenas um slide por vez
    spaceBetween: 0,  // Remove o espaço entre os slides
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
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
});



