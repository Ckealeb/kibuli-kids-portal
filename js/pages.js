
/**
 * Page content creation functions for Kibuli Muslim Nursery School website
 */

import { createHeroSection, createWelcomeSection } from './components.js';
import { contactInfo } from './contact.js';

/**
 * Create the main content based on the active page
 * @param {string} activePage - The current active page
 * @returns {string} HTML string for the main content
 */
export function createMainContent(activePage) {
  switch (activePage) {
    case 'home':
      return createHomeContent();
    case 'about':
      return createAboutContent();
    case 'programs':
      return createProgramsContent();
    case 'contact':
      return createContactContent();
    default:
      return createHomeContent();
  }
}

/**
 * Create home page content
 * @returns {string} HTML for home page
 */
function createHomeContent() {
  return `
    ${createHeroSection()}
    ${createWelcomeSection()}
    
    <section class="py-16 bg-secondary">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-semibold mb-8 text-center">Why Choose Us?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Islamic Education</h3>
            <p class="text-gray-600">Our curriculum integrates Islamic teachings and values with modern educational practices.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Experienced Teachers</h3>
            <p class="text-gray-600">Our staff are qualified professionals dedicated to nurturing young minds with care.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Safe Environment</h3>
            <p class="text-gray-600">We provide a safe and nurturing environment where children can learn and grow.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <img src="public/lovable-uploads/b22ef48e-e1ea-4ce5-8673-366a55e9a9e4.png" alt="Children in class" class="rounded-lg shadow-lg">
          </div>
          <div class="md:w-1/2 md:pl-12">
            <h2 class="text-3xl font-semibold mb-4">Our Modern Facilities</h2>
            <p class="text-gray-700 mb-6">
              We provide state-of-the-art facilities designed to enhance the learning experience. Our classrooms are spacious, well-lit, and equipped with educational resources that stimulate curiosity and learning.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Safe and secure learning environment</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Interactive learning materials</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Outdoor play area with age-appropriate equipment</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Prayer spaces for Islamic practices</span>
              </li>
            </ul>
            <a href="gallery.html" class="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Create about page content
 * @returns {string} HTML for about page
 */
function createAboutContent() {
  return `
    <section class="pt-12 pb-16">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">About Our School</h1>
          <p class="text-lg text-gray-600">
            Learn about our history, vision, and commitment to quality Islamic education.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 class="text-2xl font-semibold mb-4">Our History</h2>
            <p class="text-gray-700 mb-4">
              Kibuli Muslim Nursery School was established in 1985 with the aim of providing quality early childhood education based on Islamic principles. For over three decades, we have been nurturing young minds and instilling valuable life skills and moral values.
            </p>
            <p class="text-gray-700">
              Our school started with just one classroom and has grown into a respected institution known for academic excellence and Islamic education. Today, we continue to serve the community by providing a balanced education that prepares children for their future.
            </p>
          </div>
          <div>
            <img src="public/lovable-uploads/373d258a-ba2f-48d3-94b2-44e8c4ac3873.png" alt="School history" class="rounded-lg shadow-lg w-full h-auto">
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div class="order-2 md:order-1">
            <img src="public/lovable-uploads/017aa9191-3493-4286-a2bf-3003c2e3a848.png" alt="Our vision" class="rounded-lg shadow-lg w-full h-auto">
          </div>
          <div class="order-1 md:order-2">
            <h2 class="text-2xl font-semibold mb-4">Our Vision & Mission</h2>
            <div class="mb-4">
              <h3 class="text-xl font-medium text-primary mb-2">Vision</h3>
              <p class="text-gray-700">
                To be a leading Islamic nursery school that nurtures well-rounded children who excel academically and embody Islamic values.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-medium text-primary mb-2">Mission</h3>
              <p class="text-gray-700">
                To provide a nurturing and stimulating environment where children can develop a strong foundation in Islamic values, academic excellence, and social responsibility.
              </p>
            </div>
          </div>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-semibold mb-6 text-center">Our Values</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <div class="inline-block p-3 bg-primary/10 rounded-full text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-medium mb-2">Excellence</h3>
              <p class="text-gray-600">We strive for excellence in everything we do, from teaching to character building.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <div class="inline-block p-3 bg-primary/10 rounded-full text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 class="text-lg font-medium mb-2">Respect</h3>
              <p class="text-gray-600">We foster mutual respect among students, staff, and parents as a core Islamic value.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <div class="inline-block p-3 bg-primary/10 rounded-full text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-medium mb-2">Community</h3>
              <p class="text-gray-600">We believe in building a strong community of learners, educators, and families.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Create programs page content
 * @returns {string} HTML for programs page
 */
function createProgramsContent() {
  return `
    <section class="pt-12 pb-16">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">Our Programs</h1>
          <p class="text-lg text-gray-600">
            Discover our comprehensive early childhood education programs designed to nurture young minds.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-primary/20">
              <img src="public/lovable-uploads/ff020603-8474-44c6-a98d-982f8c8f2532.png" alt="Daycare Program" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Daycare Program</h3>
              <p class="text-gray-600 mb-4">Ages: 6 months - 2 years</p>
              <p class="text-gray-700 mb-6">
                Our daycare program provides a safe, nurturing environment for infants and toddlers. We focus on early developmental milestones, sensory experiences, and building trust.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Age-appropriate sensory activities</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Consistent caregivers for emotional security</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Regular communication with parents</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-primary/20">
              <img src="public/lovable-uploads/cc09cf7b-1022-4989-965d-47d026fc3fad.png" alt="Nursery Program" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Nursery Program</h3>
              <p class="text-gray-600 mb-4">Ages: 3 - 4 years</p>
              <p class="text-gray-700 mb-6">
                Our nursery program introduces structured learning while maintaining a play-based approach. Children develop social skills, language abilities, and cognitive foundations.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Basic Islamic studies and Arabic alphabet</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Pre-literacy and numeracy skills</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Social development through group activities</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-primary/20">
              <img src="public/lovable-uploads/b22ef48e-e1ea-4ce5-8673-366a55e9a9e4.png" alt="Kindergarten Program" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Kindergarten Program</h3>
              <p class="text-gray-600 mb-4">Ages: 5 - 6 years</p>
              <p class="text-gray-700 mb-6">
                Our kindergarten program prepares children for primary school with a focus on academic readiness while nurturing their Islamic identity and character.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Reading, writing, and mathematics fundamentals</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Quran memorization and Islamic studies</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Critical thinking and problem-solving activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-primary/10 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h2 class="text-2xl font-semibold mb-4">Ready to Enroll Your Child?</h2>
          <p class="text-gray-700 mb-6">
            We're currently accepting applications for all programs. Spaces are limited, so we encourage you to apply early.
          </p>
          <button id="programs-enroll-button" class="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors font-medium">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  `;
}

/**
 * Create contact page content
 * @returns {string} HTML for contact page
 */
function createContactContent() {
  return `
    <section class="pt-12 pb-16">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
          <p class="text-lg text-gray-600">
            We'd love to hear from you. Reach out with any questions about our programs or enrollment.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="text-primary mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">Address:</h3>
                    <p class="text-gray-600">${contactInfo.address}</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-primary mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">Phone:</h3>
                    <p class="text-gray-600">${contactInfo.phone}</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-primary mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">Email:</h3>
                    <p class="text-gray-600">${contactInfo.email}</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-primary mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">Office Hours:</h3>
                    <p class="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                    <p class="text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
                    <p class="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h2 class="text-2xl font-semibold mb-4">Find Us</h2>
              <div class="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7575396306244!2d32.593567!3d0.292722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb34c7949b11%3A0x7d9c7a06acd05dd6!2sKibuli%20Hospital!5e0!3m2!1sen!2sus!4v1665156204576!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form id="contact-form" class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                />
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                />
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-medium"
                id="contact-submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
