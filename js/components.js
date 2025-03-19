
/**
 * UI Components for website
 */

import { getContactInfo } from './utils.js';

/**
 * Create the header component
 * @param {string} activePage - The current active page
 * @returns {string} HTML string for header
 */
export function createHeader(activePage) {
  return `
    <header class="site-header shadow-sm">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="flex flex-col">
            <div class="brand">
              <img src="public/lovable-uploads/66a4b5d7-97e0-4712-bc75-04a42fff4480.png" alt="Kibuli Muslim Nursery School Logo" class="h-15 w-auto">
              <div>
                <div class="text-2xl font-bold text-primary">Kibuli Nursery</div>
                <div class="brand-motto">Education is Divine</div>
              </div>
            </div>
          </div>
          <nav class="hidden md:flex space-x-2">
            <a href="index.html" class="nav-button ${activePage === 'home' ? 'active' : 'text-gray-700 hover:text-primary'}">Home</a>
            <a href="about.html" class="nav-button ${activePage === 'about' ? 'active' : 'text-gray-700 hover:text-primary'}">About</a>
            <a href="programs.html" class="nav-button ${activePage === 'programs' ? 'active' : 'text-gray-700 hover:text-primary'}">Programs</a>
            <a href="gallery.html" class="nav-button ${activePage === 'gallery' ? 'active' : 'text-gray-700 hover:text-primary'}">Gallery</a>
            <a href="contact.html" class="nav-button ${activePage === 'contact' ? 'active' : 'text-gray-700 hover:text-primary'}">Contact</a>
          </nav>
          <button id="mobile-menu-button" class="md:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <div class="header-spacer"></div>
  `;
}

/**
 * Create mobile menu component
 * @returns {string} HTML string for mobile menu
 */
export function createMobileMenu() {
  return `
    <div id="mobile-menu" class="mobile-menu">
      <div class="mobile-menu-header">
        <div class="brand">
          <img src="public/lovable-uploads/66a4b5d7-97e0-4712-bc75-04a42fff4480.png" alt="Kibuli Muslim Nursery School Logo" class="h-10 w-auto">
          <span class="text-lg font-bold">Kibuli Muslim Nursery School</span>
        </div>
        <button id="mobile-menu-close" class="mobile-menu-close">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav class="mobile-menu-links">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="programs.html">Programs</a>
        <a href="gallery.html">Gallery</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  `;
}

/**
 * Create hero section for home page
 * @returns {string} HTML string for hero section
 */
export function createHeroSection() {
  return `
    <section class="relative h-[600px] bg-primary text-white">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Kibuli Muslim Nursery School
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl animate-fadeIn">
          Nurturing young minds with quality education founded on Islamic values
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <div id="enrollment-dialog-root"></div>
          <a href="programs.html" class="bg-transparent border border-white px-8 py-3 rounded-full hover:bg-white/10 transition-all font-medium">
            Our Programs
          </a>
        </div>
      </div>
    </section>
  `;
}

/**
 * Create welcome section for home page
 * @returns {string} HTML string for welcome section
 */
export function createWelcomeSection() {
  return `
    <section id="welcome-section" class="py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-semibold mb-8 text-center">Our Mission</h2>
        <p class="text-gray-700 leading-relaxed text-center">
          To provide a nurturing and stimulating environment where children can develop a strong foundation in Islamic values, academic excellence, and social responsibility.
        </p>
      </div>
    </section>
  `;
}

/**
 * Create footer component
 * @returns {string} HTML string for footer
 */
export function createFooter() {
  const contactInfo = getContactInfo();
  
  return `
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Kibuli Muslim Nursery School</h3>
            <p class="text-gray-400 mb-4">
              Education is Divine
            </p>
            <div class="text-gray-400 space-y-2 mb-4">
              <p>${contactInfo.address}</p>
              <p>Tel: ${contactInfo.phone}</p>
              <p>Email: ${contactInfo.email}</p>
            </div>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.663 9.11 8.434 9.841v-6.984h-2.033v-2.857h2.033V9.743c0-3.012 1.797-4.669 4.533-4.669 1.315 0 2.463.099 2.795.143v3.24h-1.92c-1.433 0-1.724.688-1.724 1.687v2.201h3.148l-.407 2.857h-2.741v6.984C18.337 21.11 22 16.991 22 12z"/></svg></a>
              <a href="#" class="text-gray-400 hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569a9.9 9.9 0 01-2.825.775 4.974 4.974 0 002.164-2.723 9.844 9.844 0 01-3.132 1.192 4.97 4.97 0 00-8.46 4.53 13.98 13.98 0 01-10.139-5.104 4.97 4.97 0 001.557 6.58 4.844 4.844 0 01-2.227-.616v.061a4.97 4.97 0 003.98 4.879 4.969 4.969 0 01-2.224.083 4.978 4.978 0 004.604 3.458 9.889 9.889 0 01-6.102 2.105 9.878 9.878 0 01-1.175-.064 13.938 13.938 0 007.548 2.212c9.056 0 14.01-7.509 14.01-13.985 0-.214-.005-.426-.015-.637.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg></a>
              <a href="#" class="text-gray-400 hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.354 4.646a5 5 0 00-7.071 0l-.707.707-.707-.707a5 5 0 00-7.071 0 5 5 0 000 7.071l.707.707 7.071 7.071.707.707.707-.707 7.071-7.071.707-.707a5 5 0 000-7.071zM12 16l-5-5 1.414-1.414L12 13.172l3.586-3.586L17 11l-5 5z"/></svg></a>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="index.html" class="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="about.html" class="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="programs.html" class="text-gray-400 hover:text-white">Programs</a></li>
              <li><a href="admissions.html" class="text-gray-400 hover:text-white">Admissions</a></li>
              <li><a href="contact.html" class="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4">School Hours</h3>
            <p class="text-gray-400">Monday - Friday: 8:00 AM - 3:00 PM</p>
            <p class="text-gray-400">Saturday & Sunday: Closed</p>
          </div>
        </div>
        
        <div class="mt-12 text-center border-t border-gray-700 pt-8">
          <p class="text-gray-500">© 2024 Kibuli Muslim Nursery School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}
