
/**
 * Utility functions for the website
 */

/**
 * Get contact information for display
 * @returns {Object} Contact information with address, phone, and email
 */
export function getContactInfo() {
  return {
    address: 'Off Prince Badru Kakungulu Rd.<br>Opp Kibuli Hospital',
    phone: '+256 701 748 194',
    email: 'kibulimuslimnurseryschool@gmail.com'
  };
}

/**
 * Scroll to an element smoothly
 * @param {string} elementId - The id of the element to scroll to
 */
export function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
