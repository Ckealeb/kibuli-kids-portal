
/**
 * Page-specific content generation
 */

import { createHeroSection, createWelcomeSection } from './components.js';
import { createEnrollmentForm } from './enrollment.js';

/**
 * Create main content based on active page
 * @param {string} activePage - The current active page
 * @returns {string} HTML string for main content
 */
export function createMainContent(activePage) {
  switch (activePage) {
    case 'home':
      return `
        <main class="container mx-auto px-6 py-8">
          ${createHeroSection()}
          ${createWelcomeSection()}
          ${createEnrollmentForm()}
        </main>
      `;
    case 'about':
      return `
        <main class="container mx-auto px-6 py-8">
          <h2>About Us</h2>
          <p>Learn more about our school.</p>
        </main>
      `;
    case 'programs':
      return `
        <main class="container mx-auto px-6 py-8">
          <h2>Our Programs</h2>
          <p>Explore our educational programs.</p>
        </main>
      `;
    case 'gallery':
      return `
        <main class="container mx-auto px-6 py-8">
          <h2>Gallery</h2>
          <p>See photos of our school and activities.</p>
        </main>
      `;
    case 'contact':
      return `
        <main class="container mx-auto px-6 py-8">
          <h2>Contact Us</h2>
          <p>Get in touch with us.</p>
        </main>
      `;
    default:
      return `
        <main class="container mx-auto px-6 py-8">
          <h2>Welcome</h2>
          <p>This is the default page.</p>
        </main>
      `;
  }
}
