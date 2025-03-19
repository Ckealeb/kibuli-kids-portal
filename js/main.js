
/**
 * Main JavaScript file for Kibuli Muslim Nursery School website
 */

import { createHeader, createMobileMenu, createFooter } from './components.js';
import { createMainContent } from './pages.js';
import { handleEnrollmentSubmit } from './enrollment.js';

document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  const activePage = root.dataset.page || 'home';

  // Render the page structure
  root.innerHTML = `
    ${createHeader(activePage)}
    ${createMainContent(activePage)}
    ${createFooter()}
    ${createMobileMenu()}
  `;

  // Mobile menu functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.classList.add('mobile-nav-open');
    });
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('mobile-nav-open');
    });
  }

  // Add event listener after the form is added to the DOM
  if (activePage === 'home') {
    const enrollmentForm = document.getElementById('enrollment-form');
    if (enrollmentForm) {
      enrollmentForm.addEventListener('submit', handleEnrollmentSubmit);
    }
  }

  // Make the handleEnrollmentSubmit function available globally
  // This is needed because it's called from HTML as an inline event handler
  window.handleEnrollmentSubmit = handleEnrollmentSubmit;
});
