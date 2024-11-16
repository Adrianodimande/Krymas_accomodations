const preloader=document.querySelector('#preloader');

window.addEventListener('load',function(){
  preloader.classList='hidden';
});


  const swiper = new Swiper('.mySwiper', {
    loop: true, // Para loops infinitos
    slidesPerView: 1, // Exibe 1 slide por vez
    spaceBetween: 10, // Espaço entre os slides

    // Adiciona navegação (botões)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Adiciona paginação
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Responsividade
    breakpoints: {
      // Quando a largura for maior que 640px
      640: {
        slidesPerView: 2, // Exibe 2 slides por vez
      },
      // Quando a largura for maior que 1024px
      1024: {
        slidesPerView: 3, // Exibe 3 slides por vez
      },
    },
  });



  // Function to open the lightbox
  function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = imageSrc; // Set the image source
    lightbox.classList.remove('hidden'); // Show the lightbox
  }

  // Function to close the lightbox
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden'); // Hide the lightbox
  }
