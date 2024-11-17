
const preloader=document.querySelector('#preloader');



window.addEventListener('load',function(){
  preloader.classList='hidden';
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



  // <!-- Script to Toggle Mobile Menu -->


      // <!-- Script para controlar o modal -->
  
        // Função para abrir o modal
        function openModal(imageElement) {
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');

            // Definir o 'src' da imagem modal para a imagem clicada
            modalImage.src = imageElement.src;

            // Mostrar o modal
            modal.classList.remove('hidden');
        }

        // Função para fechar o modal
        function closeModal() {
            const modal = document.getElementById('imageModal');
            modal.classList.add('hidden');
        }


      
