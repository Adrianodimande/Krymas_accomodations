class Header extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
    <div class="gtranslate_wrapper fixed bottom-20 right-10 z-50 bg-[#F28705] p-3 rounded-full shadow-lg cursor-pointer">

    </div>
    <header class="bg-white shadow-md fixed w-full z-10 top-0 left-0">
    <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex justify-between items-center">

            <!-- Logo -->
            <div class="text-xl font-semibold text-[#F28705]" data-aos="fade-down" data-aos-duration="1000">
              <a class='w-10 h-10' href="#">
                        <img class="w-10 h-10" src="../assets/logo.png" alt="" srcset="">
                    </a>
            </div>

            <!-- Menu de Navegação para Desktop -->
            <nav class="hidden md:flex space-x-8" data-aos="fade-down" data-aos-duration="1500">
                <a href="Krymas_accommodation_visit.html" class="text-gray-700 hover:text-[#F28705] transition duration-300" data-aos="fade-up" data-aos-duration="1200">Start</a>
                <a href="about.html" class="text-gray-700 hover:text-[#F28705] transition duration-300" data-aos="fade-up" data-aos-duration="1200">About</a>
                <a href="accommodations.html" class="text-gray-700 hover:text-[#F28705] transition duration-300" data-aos="fade-up" data-aos-duration="1200">Accommodations</a>
                <a href="gallery.html" class="text-gray-700 hover:text-[#F28705] transition duration-300" data-aos="fade-up" data-aos-duration="1200">Gallery</a>
                <a href="location_contact.html" class="md:hidden lg:flex text-gray-700 hover:text-[#F28705] transition duration-300" data-aos="fade-up" data-aos-duration="1200">Location & contact</a>
                <a href="reservations.html" class="text-gray-700 hover:text-[#F28705] transition duration-300" data-aos="fade-up" data-aos-duration="1200">Reservations</a>
            </nav>

            <!-- Botão de Ação (Agendar Visita) -->
            <div class="hidden md:block" data-aos="fade-down" data-aos-duration="1500">
                <a href="location_contact.html#contato" class="bg-[#F28705] text-white py-2 px-6 rounded-lg hover:bg-[#F28705] transition duration-300">Schedule a Visit</a>
            </div>

            <!-- Botão de Menu para Dispositivos Móveis -->
            <div class="md:hidden flex items-center">
                <button id="menu-button" class="text-gray-700 hover:text-[#F28705] focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

        </div>

        <!-- Menu Móvel (Modal) -->
        <div id="menu-mobile" class="md:hidden mt-4 hidden space-y-4 bg-white p-6 rounded-lg shadow-lg">
            <a href="Krymas_accommodation_visit.html" class="block text-gray-700 hover:text-[#F28705] transition duration-300">Start</a>
            <a href="about.html" class="block text-gray-700 hover:text-[#F28705] transition duration-300">About</a>
            <a href="accommodations.html" class="block text-gray-700 hover:text-[#F28705] transition duration-300">Accommodations</a>
            <a href="gallery.html" class="block text-gray-700 hover:text-[#F28705] transition duration-300">Gallery</a>
            <a href="location_contact.html" class="block text-gray-700 hover:text-[#F28705] transition duration-300">Location & contact</a>
            <a href="reservations.html" class="block text-gray-700 hover:text-[#F28705] transition duration-300">Reservations</a>
            <div class="mt-6">
                <a href="#visit" class="block bg-[#F28705] text-white py-2 px-6 rounded-lg hover:bg-[#F28705] transition duration-300">Schedule a Visit</a>
            </div>
        </div>
    </div>
</header>

`;
    }
}


customElements.define('main-header', Header);