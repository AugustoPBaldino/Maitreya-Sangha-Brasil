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
      
      // Se for um link com âncora (#), faz scroll para o elemento
      if (targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      } else {
        // Se não for um link com âncora, navega até a página especificada
        window.location.href = targetId;
      }
    });
  });

  window.addEventListener("scroll", () => {
    const parallax = document.querySelector(".home");
    if (parallax) {  // Verifica se o elemento existe
      let scrollPosition = window.pageYOffset;
      parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    }
  });
  
});
