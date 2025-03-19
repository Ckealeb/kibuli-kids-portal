
/**
 * Page-specific content generation
 */

import { createHeroSection, createWelcomeSection } from './components.js';

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
          
          <!-- Key Features Section -->
          <section class="py-16 bg-gray-50 rounded-xl mt-8">
            <div class="container mx-auto px-6">
              <h2 class="text-3xl font-semibold mb-12 text-center">Why Choose Us</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold mb-2">Islamic Values</h3>
                  <p class="text-gray-600">Education rooted in Islamic principles and moral teachings, nurturing spiritual growth.</p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold mb-2">Academic Excellence</h3>
                  <p class="text-gray-600">Comprehensive curriculum designed to build strong foundations in literacy, numeracy, and critical thinking.</p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold mb-2">Caring Environment</h3>
                  <p class="text-gray-600">Safe, nurturing atmosphere with experienced teachers committed to each child's well-being and development.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      `;
    case 'about':
      return `
        <main class="container mx-auto px-6 py-8">
          <section class="py-12">
            <div class="max-w-4xl mx-auto">
              <h1 class="text-4xl font-bold mb-8 text-center">About Our School</h1>
              
              <div class="mb-12">
                <img src="public/placeholder.svg" alt="School Building" class="w-full h-64 object-cover rounded-xl mb-6">
                <h2 class="text-2xl font-semibold mb-4">Our History</h2>
                <p class="text-gray-700 mb-4">Kibuli Muslim Nursery School was established in 1998 with a vision to provide quality early childhood education rooted in Islamic values. Located in the heart of Kibuli, our school has grown from a small classroom with just 15 students to a thriving educational institution serving over 200 children.</p>
                <p class="text-gray-700">Over the years, we have maintained our commitment to nurturing young minds through a balanced approach that emphasizes both academic excellence and spiritual growth. Our dedication to quality education has earned us recognition as one of the leading Islamic nursery schools in Kampala.</p>
              </div>
              
              <div class="mb-12">
                <h2 class="text-2xl font-semibold mb-4">Our Vision</h2>
                <p class="text-gray-700">To be the premier Islamic early childhood education center, recognized for developing well-rounded individuals who excel academically and embody Islamic values.</p>
                
                <h2 class="text-2xl font-semibold mb-4 mt-8">Our Mission</h2>
                <p class="text-gray-700">To provide a nurturing and stimulating environment where children can develop a strong foundation in Islamic values, academic excellence, and social responsibility.</p>
              </div>
              
              <div class="mb-12">
                <h2 class="text-2xl font-semibold mb-4">Our Values</h2>
                <ul class="list-disc pl-6 space-y-2 text-gray-700">
                  <li><span class="font-medium">Faith</span> - Instilling Islamic principles and practices in daily life</li>
                  <li><span class="font-medium">Excellence</span> - Striving for the highest standards in all aspects of education</li>
                  <li><span class="font-medium">Respect</span> - Fostering mutual respect among students, teachers, and the community</li>
                  <li><span class="font-medium">Compassion</span> - Nurturing empathy and care for others</li>
                  <li><span class="font-medium">Integrity</span> - Promoting honesty and moral uprightness</li>
                </ul>
              </div>
              
              <div>
                <h2 class="text-2xl font-semibold mb-4">Our Staff</h2>
                <p class="text-gray-700 mb-4">Our dedicated team consists of qualified teachers and support staff who are committed to providing the best possible education for your child. All our teachers are certified in early childhood education and regularly participate in professional development to stay updated with the latest teaching methodologies.</p>
                <p class="text-gray-700">We maintain a low teacher-to-student ratio to ensure that each child receives the attention and support they need to thrive academically, socially, and spiritually.</p>
              </div>
            </div>
          </section>
        </main>
      `;
    case 'programs':
      return `
        <main class="container mx-auto px-6 py-8">
          <section class="py-12">
            <div class="max-w-4xl mx-auto">
              <h1 class="text-4xl font-bold mb-8 text-center">Our Educational Programs</h1>
              
              <div class="space-y-12">
                <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <h2 class="text-2xl font-semibold mb-4 text-primary">Daycare (6 months - 2 years)</h2>
                  <p class="text-gray-700 mb-4">Our daycare program provides a safe, nurturing environment where infants and toddlers can develop their social, emotional, and cognitive skills through play-based activities.</p>
                  
                  <h3 class="text-lg font-medium mb-2 mt-6">Program Features:</h3>
                  <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    <li>Low caregiver-to-child ratio for personalized attention</li>
                    <li>Age-appropriate toys and learning materials</li>
                    <li>Regular feeding and nap schedules</li>
                    <li>Basic Islamic teachings and practices</li>
                    <li>Regular communication with parents about child's development</li>
                  </ul>
                  
                  <h3 class="text-lg font-medium mb-2">Schedule:</h3>
                  <p class="text-gray-700">Monday to Friday, 8:00 AM to 5:00 PM</p>
                </div>
                
                <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <h2 class="text-2xl font-semibold mb-4 text-primary">Nursery (3 - 4 years)</h2>
                  <p class="text-gray-700 mb-4">Our nursery program focuses on developing foundational skills in literacy, numeracy, and Islamic education through a play-based curriculum that encourages exploration and discovery.</p>
                  
                  <h3 class="text-lg font-medium mb-2 mt-6">Curriculum Highlights:</h3>
                  <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    <li>Introduction to letters, numbers, and basic concepts</li>
                    <li>Development of fine and gross motor skills</li>
                    <li>Islamic stories, duas, and simple Quranic verses</li>
                    <li>Creative arts and music</li>
                    <li>Social skills development through group activities</li>
                  </ul>
                  
                  <h3 class="text-lg font-medium mb-2">Class Hours:</h3>
                  <p class="text-gray-700">Monday to Friday, 8:00 AM to 3:00 PM</p>
                </div>
                
                <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <h2 class="text-2xl font-semibold mb-4 text-primary">Kindergarten (5 - 6 years)</h2>
                  <p class="text-gray-700 mb-4">Our kindergarten program prepares children for primary school through a comprehensive curriculum that balances academic learning with social-emotional development and Islamic education.</p>
                  
                  <h3 class="text-lg font-medium mb-2 mt-6">Curriculum Highlights:</h3>
                  <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    <li>Reading and writing readiness</li>
                    <li>Basic mathematics and problem-solving</li>
                    <li>Science and environmental awareness</li>
                    <li>Quran memorization (selected surahs)</li>
                    <li>Islamic etiquette and moral values</li>
                    <li>Physical education and outdoor activities</li>
                  </ul>
                  
                  <h3 class="text-lg font-medium mb-2">Class Hours:</h3>
                  <p class="text-gray-700">Monday to Friday, 8:00 AM to 3:00 PM</p>
                </div>
              </div>
              
              <div class="mt-12 text-center">
                <h3 class="text-xl font-semibold mb-4">Ready to enroll your child?</h3>
                <button id="programs-enroll-button" class="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all font-medium">Enroll Now</button>
              </div>
            </div>
          </section>
        </main>
      `;
    case 'gallery':
      return `
        <main class="container mx-auto px-6 py-8">
          <section class="py-12">
            <h1 class="text-4xl font-bold mb-8 text-center">School Gallery</h1>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="overflow-hidden rounded-lg shadow-sm">
                <img src="public/placeholder.svg" alt="Classroom Activities" class="w-full h-64 object-cover hover:scale-105 transition-transform">
                <div class="p-4 bg-white">
                  <h3 class="font-medium">Classroom Activities</h3>
                </div>
              </div>
              
              <div class="overflow-hidden rounded-lg shadow-sm">
                <img src="public/placeholder.svg" alt="Playground Fun" class="w-full h-64 object-cover hover:scale-105 transition-transform">
                <div class="p-4 bg-white">
                  <h3 class="font-medium">Playground Fun</h3>
                </div>
              </div>
              
              <div class="overflow-hidden rounded-lg shadow-sm">
                <img src="public/placeholder.svg" alt="Islamic Studies" class="w-full h-64 object-cover hover:scale-105 transition-transform">
                <div class="p-4 bg-white">
                  <h3 class="font-medium">Islamic Studies</h3>
                </div>
              </div>
              
              <div class="overflow-hidden rounded-lg shadow-sm">
                <img src="public/placeholder.svg" alt="Arts and Crafts" class="w-full h-64 object-cover hover:scale-105 transition-transform">
                <div class="p-4 bg-white">
                  <h3 class="font-medium">Arts and Crafts</h3>
                </div>
              </div>
              
              <div class="overflow-hidden rounded-lg shadow-sm">
                <img src="public/placeholder.svg" alt="School Events" class="w-full h-64 object-cover hover:scale-105 transition-transform">
                <div class="p-4 bg-white">
                  <h3 class="font-medium">School Events</h3>
                </div>
              </div>
              
              <div class="overflow-hidden rounded-lg shadow-sm">
                <img src="public/placeholder.svg" alt="Outdoor Learning" class="w-full h-64 object-cover hover:scale-105 transition-transform">
                <div class="p-4 bg-white">
                  <h3 class="font-medium">Outdoor Learning</h3>
                </div>
              </div>
            </div>
          </section>
        </main>
      `;
    case 'contact':
      return `
        <main class="container mx-auto px-6 py-8">
          <section class="py-12">
            <div class="max-w-4xl mx-auto">
              <h1 class="text-4xl font-bold mb-8 text-center">Contact Us</h1>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 class="text-2xl font-semibold mb-4">Get In Touch</h2>
                  <p class="text-gray-700 mb-6">We'd love to hear from you. Please feel free to contact us with any questions about our programs, enrollment process, or to schedule a visit to our school.</p>
                  
                  <div class="space-y-4">
                    <div class="flex items-start">
                      <svg class="w-6 h-6 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <div>
                        <h3 class="font-medium">Address</h3>
                        <p class="text-gray-600">Off Prince Badru Kakungulu Rd.<br>Opp Kibuli Hospital</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start">
                      <svg class="w-6 h-6 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <div>
                        <h3 class="font-medium">Phone</h3>
                        <p class="text-gray-600">+256 701 748 194</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start">
                      <svg class="w-6 h-6 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <div>
                        <h3 class="font-medium">Email</h3>
                        <p class="text-gray-600">kibulimuslimnurseryschool@gmail.com</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start">
                      <svg class="w-6 h-6 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h3 class="font-medium">School Hours</h3>
                        <p class="text-gray-600">Monday - Friday: 8:00 AM - 3:00 PM<br>Saturday & Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 class="text-2xl font-semibold mb-4">Send Us a Message</h2>
                  <form class="space-y-4">
                    <div>
                      <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input type="text" id="name" name="name" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    </div>
                    
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                      <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    </div>
                    
                    <div>
                      <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input type="text" id="subject" name="subject" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    </div>
                    
                    <div>
                      <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                      <textarea id="message" name="message" rows="4" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                    </div>
                    
                    <button type="submit" class="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-medium">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
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
