class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
       <!-- Footer Section -->
 <footer class="bg-[#262626] text-white py-16">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h3 class="text-xl font-semibold mb-4 text-[#F28705]" data-aos="fade-up" data-aos-duration="1200">Sobre Nós</h3>
                    <p data-aos="fade-up" data-aos-duration="1200">Aproveite a nossa localização privilegiada e acomodações de qualidade. O destino ideal para
                        momentos inesquecíveis.</p>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-4 text-[#F28705]" data-aos="fade-up" data-aos-duration="1200">Links Úteis</h3>
                    <ul class="space-y-2">
                        <li data-aos="fade-up" data-aos-duration="1200"><a href="#reservar" class="hover:underline">Reservar Agora</a></li>
                        <li data-aos="fade-up" data-aos-duration="1200"><a href="#comodidades" class="hover:underline">Comodidades</a></li>
                        <li data-aos="fade-up" data-aos-duration="1200"><a href="#depoimentos" class="hover:underline">Depoimentos</a></li>
                        <li data-aos="fade-up" data-aos-duration="1200"><a href="#contato" class="hover:underline">Contato</a></li>
                    </ul>
                </div>
                <div data-aos="fade-up" data-aos-duration="1200">
                    <h3 class="text-xl font-semibold mb-4 text-[#F28705]">Siga-nos</h3>
                    <div class="flex space-x-6">
                        <a href="#" class="text-2xl hover:text-blue-500"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="text-2xl hover:text-blue-400"><i class="bi bi-twitter"></i></a>
                        <a href="#" class="text-2xl hover:text-pink-500"><i class="bi bi-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="mt-12 text-center text-sm text-gray-400">
                <p>&copy; 2024 Complexo Ponta do Ouro. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>


    `;
    }

}

customElements.define('main-footer', Footer);

