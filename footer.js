class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
       <!-- Footer Section -->
<footer class="bg-[#262626] text-white py-16">
    <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
                <h3 class="text-xl font-semibold mb-4 text-[#F28705]" data-aos="fade-up" data-aos-duration="1200">About Us</h3>
                <p data-aos="fade-up" data-aos-duration="1200">Enjoy our prime location and quality accommodations. The perfect destination for unforgettable moments.</p>
            </div>
            <div>
                <h3 class="text-xl font-semibold mb-4 text-[#F28705]" data-aos="fade-up" data-aos-duration="1200">Useful Links</h3>
              <ul class="space-y-2">
    <li data-aos="fade-up" data-aos-duration="1200"><a href="Krymas_accommodation_visit.html" class="text-white hover:text-[#F28705] transition duration-300">Start</a></li>
    <li data-aos="fade-up" data-aos-duration="1200"><a href="about.html" class="text-white hover:text-[#F28705] transition duration-300">About</a></li>
    <li data-aos="fade-up" data-aos-duration="1200"><a href="accommodations.html" class="text-white hover:text-[#F28705] transition duration-300">Accommodations</a></li>
    <li data-aos="fade-up" data-aos-duration="1200"><a href="gallery.html" class="text-white hover:text-[#F28705] transition duration-300">Gallery</a></li>
    <li data-aos="fade-up" data-aos-duration="1200"><a href="location_contact.html" class="md:hidden lg:flex text-white hover:text-[#F28705] transition duration-300">Location & Contact</a></li>
    <li data-aos="fade-up" data-aos-duration="1200"><a href="reservations.html" class="text-white hover:text-[#F28705] transition duration-300">Reservations</a></li>
</ul>

            </div>
            <div data-aos="fade-up" data-aos-duration="1200">
                <h3 class="text-xl font-semibold mb-4 text-[#F28705]">Follow Us</h3>
                <div class="flex space-x-6">
                    <a href="#" class="text-2xl hover:text-blue-500"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="text-2xl hover:text-blue-400"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="text-2xl hover:text-pink-500"><i class="bi bi-instagram"></i></a>
                </div>
            </div>
        </div>
        <div class="mt-12 text-center text-sm text-gray-400">
            <p>&copy; 2024 Krymas Accommodations. All rights reserved.</p>
        </div>
    </div>
</footer>



    `;
    }

}

customElements.define('main-footer', Footer);

