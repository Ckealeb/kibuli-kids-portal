
/**
 * Main JavaScript file for Kibuli Muslim Nursery School website
 */

import { createHeader, createMobileMenu, createFooter, createEnrollmentDialog } from './components.js';
import { createMainContent } from './pages.js';
import { handleEnrollmentSubmit } from './enrollment.js';
import { createGalleryContent } from './gallery.js';

document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  const activePage = root.dataset.page || 'home';

  // Render the page structure with the appropriate content based on the active page
  let mainContent;
  if (activePage === 'gallery') {
    mainContent = createGalleryContent();
  } else {
    mainContent = createMainContent(activePage);
  }

  root.innerHTML = `
    ${createHeader(activePage)}
    ${mainContent}
    ${createFooter()}
    ${createMobileMenu()}
    ${createEnrollmentDialog()}
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

  // Enrollment dialog functionality
  const openEnrollmentDialog = document.getElementById('open-enrollment-dialog');
  const enrollmentDialog = document.getElementById('enrollment-dialog');
  const closeEnrollmentDialog = document.getElementById('close-enrollment-dialog');
  const dialogOverlay = document.getElementById('dialog-overlay');

  if (openEnrollmentDialog && enrollmentDialog) {
    openEnrollmentDialog.addEventListener('click', () => {
      enrollmentDialog.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  }

  if (closeEnrollmentDialog && enrollmentDialog) {
    closeEnrollmentDialog.addEventListener('click', () => {
      enrollmentDialog.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  if (dialogOverlay && enrollmentDialog) {
    dialogOverlay.addEventListener('click', () => {
      enrollmentDialog.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  // Add event listener to enrollment form
  const enrollmentForm = document.getElementById('enrollment-form');
  if (enrollmentForm) {
    enrollmentForm.addEventListener('submit', handleEnrollmentSubmit);
  }

  // Make the handleEnrollmentSubmit function available globally
  window.handleEnrollmentSubmit = handleEnrollmentSubmit;
});
