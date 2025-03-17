
// Main JavaScript for Kibuli Muslim Nursery School

document.addEventListener('DOMContentLoaded', function() {
  // Check which page we're on and initialize accordingly
  const path = window.location.pathname;
  
  if (path.includes('about.html')) {
    initializeAboutPage();
  } else if (path.includes('programs.html')) {
    initializeProgramsPage();
  } else if (path.includes('gallery.html')) {
    initializeGalleryPage();
  } else if (path.includes('contact.html')) {
    initializeContactPage();
  } else {
    initializeHomePage();
  }
  
  // Initialize common elements like header and footer
  initializeHeader();
  initializeFooter();
  initializeMobileMenu();
});

function initializeHeader() {
  // Common header functionality if needed
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.add('active');
      document.body.classList.add('mobile-nav-open');
    });
  }
}

function initializeMobileMenu() {
  const closeButton = document.getElementById('mobile-menu-close');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.remove('active');
      document.body.classList.remove('mobile-nav-open');
    });
  }

  // Close mobile menu when a link is clicked
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.remove('active');
      document.body.classList.remove('mobile-nav-open');
    });
  });
}

function initializeFooter() {
  // Common footer functionality 
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
}

function createHeader(activePage) {
  return `
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="brand">
            <img src="public/lovable-uploads/66a4b5d7-97e0-4712-bc75-04a42fff4480.png" alt="Kibuli Muslim Nursery School Logo" class="h-12 w-auto">
            <div class="text-2xl font-bold text-primary">Kibuli Nursery</div>
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

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="mobile-menu">
      <div class="mobile-menu-header">
        <div class="brand">
          <img src="public/lovable-uploads/66a4b5d7-97e0-4712-bc75-04a42fff4480.png" alt="Kibuli Muslim Nursery School Logo" class="h-10 w-auto">
          <div class="text-xl font-bold text-primary">Kibuli Nursery</div>
        </div>
        <button id="mobile-menu-close" class="mobile-menu-close">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mobile-menu-links">
        <a href="index.html" class="${activePage === 'home' ? 'bg-primary text-white' : ''}">Home</a>
        <a href="about.html" class="${activePage === 'about' ? 'bg-primary text-white' : ''}">About</a>
        <a href="programs.html" class="${activePage === 'programs' ? 'bg-primary text-white' : ''}">Programs</a>
        <a href="gallery.html" class="${activePage === 'gallery' ? 'bg-primary text-white' : ''}">Gallery</a>
        <a href="contact.html" class="${activePage === 'contact' ? 'bg-primary text-white' : ''}">Contact</a>
      </div>
    </div>
  `;
}

function createFooter() {
  return `
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Kibuli Muslim Nursery School</h3>
            <p class="text-gray-400 mb-4">
              Providing quality education founded on Islamic values since 1980.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.11 8.03l-1.01 4.72c-.07.35-.27.45-.55.29l-1.55-1.15-1.67 1.6c-.2.2-.43.09-.52-.12l-.73-2.43-1.73-.57c-.39-.13-.4-.4.09-.59l6.83-2.63c.31-.12.61.09.48.48z" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm5.76 5.36c.68 0 1.24.56 1.24 1.24 0 .68-.56 1.24-1.24 1.24-.7 0-1.24-.56-1.24-1.24 0-.7.56-1.24 1.24-1.24zM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="index.html" class="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="about.html" class="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="programs.html" class="text-gray-400 hover:text-white">Our Programs</a></li>
              <li><a href="gallery.html" class="text-gray-400 hover:text-white">Gallery</a></li>
              <li><a href="contact.html" class="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4">School Hours</h3>
            <ul class="space-y-2 text-gray-400">
              <li class="flex justify-between">
                <span>Monday - Friday:</span>
                <span>7:30 AM - 4:30 PM</span>
              </li>
              <li class="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 12:00 PM</span>
              </li>
              <li class="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            <div class="mt-4">
              <a href="contact.html" class="bg-primary text-white px-4 py-2 rounded-md inline-block hover:bg-primary/90 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; <span id="current-year"></span> Kibuli Muslim Nursery School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

function initializeHomePage() {
  const root = document.getElementById('root');
  
  // Main structure
  root.innerHTML = `
    ${createHeader('home')}

    <main>
      <!-- Hero Section -->
      <section id="hero-section" class="relative h-[600px] bg-primary text-white">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Kibuli Muslim Nursery School
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl animate-fadeIn">
            Nurturing young minds with quality education founded on Islamic values
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="contact.html" class="bg-white text-primary px-8 py-3 rounded-full hover:bg-opacity-90 transition-all font-medium">
              Enroll Now
            </a>
            <a href="programs.html" class="bg-transparent border border-white px-8 py-3 rounded-full hover:bg-white/10 transition-all font-medium">
              Our Programs
            </a>
          </div>
        </div>
      </section>
      
      <!-- About Section -->
      <section id="about-section" class="py-16">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="inline-block px-3 py-1 rounded-full bg-white text-xs font-medium text-primary mb-6">
              Our Story
            </div>
            
            <h2 class="text-3xl md:text-4xl font-bold mb-6">About Our School</h2>
            
            <p class="text-gray-600 mb-8">
              Kibuli Muslim Nursery School was established in 1980 with a vision to provide quality education founded on Islamic values. 
              For over four decades, we have nurtured thousands of children, helping them build a strong foundation for their future.
            </p>
            
            <a href="about.html" class="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all font-medium">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
      
      <!-- Programs Section -->
      <section id="programs-section" class="py-20 bg-secondary/50">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="inline-block px-3 py-1 rounded-full bg-white text-xs font-medium text-primary mb-6">
              Our Programs
            </div>
            
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Educational Programs</h2>
            
            <p class="text-gray-600">
              Discover our comprehensive range of educational programs designed to nurture young minds 
              and provide a strong foundation for their future.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="programs-container">
            <!-- Program cards will be inserted here by JavaScript -->
          </div>
        </div>
      </section>
      
      <!-- Gallery Section -->
      <section id="gallery-section" class="py-20">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="inline-block px-3 py-1 rounded-full bg-white text-xs font-medium text-primary mb-6">
              Photo Gallery
            </div>
            
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Our School in Pictures</h2>
            
            <p class="text-gray-600">
              Take a virtual tour of our facilities and get a glimpse of our students' daily activities.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://via.placeholder.com/600x400" alt="Classroom" class="w-full h-64 object-cover" />
            </div>
            <div class="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://via.placeholder.com/600x400" alt="Playground" class="w-full h-64 object-cover" />
            </div>
            <div class="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://via.placeholder.com/600x400" alt="Students" class="w-full h-64 object-cover" />
            </div>
          </div>
          
          <div class="text-center mt-12">
            <a href="gallery.html" class="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all font-medium">
              View Full Gallery
            </a>
          </div>
        </div>
      </section>
      
      <!-- Contact Section -->
      <section id="contact-section" class="py-20 bg-secondary/50">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div class="inline-block px-3 py-1 rounded-full bg-white text-xs font-medium text-primary mb-6">
                Get In Touch
              </div>
              
              <h2 class="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
              
              <p class="text-gray-600 mb-8">
                Have questions about our programs or admissions? We're here to help.
                Get in touch with us through the form or using our contact information.
              </p>
              
              <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
                <div class="flex items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <svg
                      class="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1">Address</h3>
                    <p class="text-sm text-gray-600">Kibuli Road, Kampala, Uganda</p>
                  </div>
                </div>
                
                <div class="flex items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <svg
                      class="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1">Phone</h3>
                    <p class="text-sm text-gray-600">+256 (0) 7XX XXX XXX</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <svg
                      class="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1">Email</h3>
                    <p class="text-sm text-gray-600">info@kibulinursery.ac.ug</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 class="text-xl font-semibold mb-4">Send Us a Message</h3>
              <form id="contact-form" class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    required
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    required
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
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    ${createFooter()}
  `;
  
  // Populate program cards
  const programsContainer = document.getElementById('programs-container');
  const programs = [
    {
      title: "Daycare",
      description: "A nurturing environment for our youngest learners with age-appropriate activities and care.",
      icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>',
      ageRange: "6 months - 2 years",
      delay: 1
    },
    {
      title: "Nursery",
      description: "Building foundational skills through play-based learning and structured activities.",
      icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',
      ageRange: "3 - 4 years",
      delay: 2
    },
    {
      title: "Kindergarten",
      description: "Preparing children for primary school with literacy, numeracy, and social skills.",
      icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>',
      ageRange: "5 - 6 years",
      delay: 3
    }
  ];
  
  programs.forEach(program => {
    const fadeInStyle = `animation: fadeIn 0.5s ease-out ${program.delay * 0.1}s forwards; opacity: 0;`;
    
    const programCard = document.createElement('div');
    programCard.className = 'bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all';
    programCard.style = fadeInStyle;
    
    programCard.innerHTML = `
      <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        ${program.icon}
      </div>
      <h3 class="text-lg font-semibold mb-2">${program.title}</h3>
      <p class="text-gray-600 mb-4">${program.description}</p>
      <div class="text-sm text-gray-500 mb-4">
        <span class="font-medium">Age Range:</span> ${program.ageRange}
      </div>
      <a href="programs.html" class="text-primary font-medium flex items-center hover:underline">
        Learn More
        <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    `;
    
    programsContainer.appendChild(programCard);
  });
  
  // Initialize contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Form submitted');
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
}

function initializeAboutPage() {
  const root = document.getElementById('root');
  
  root.innerHTML = `
    ${createHeader('about')}

    <main>
      <!-- About Hero Section -->
      <section class="relative h-[400px] bg-primary text-white">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            About Our School
          </h1>
          <p class="text-lg md:text-xl max-w-3xl animate-fadeIn">
            Learn about our history, mission, and values
          </p>
        </div>
      </section>
      
      <!-- About Content Section -->
      <section class="py-16">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-6">Our Story</h2>
              <p class="text-gray-600 mb-4">
                Kibuli Muslim Nursery School was established in 1980 with a vision to provide quality education founded on Islamic values. For over four decades, we have nurtured thousands of children, helping them build a strong foundation for their future.
              </p>
              <p class="text-gray-600 mb-4">
                Our school began with just two classrooms and has now grown into a reputable institution known for academic excellence and character development. We take pride in our holistic approach to education, focusing on intellectual, social, emotional, physical, and spiritual growth.
              </p>
              <p class="text-gray-600">
                Today, we continue to uphold our founding principles while embracing modern educational practices to prepare our students for the challenges of the 21st century.
              </p>
            </div>
            <div class="rounded-xl overflow-hidden shadow-lg">
              <img src="https://via.placeholder.com/600x400" alt="School Building" class="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      
      <!-- Mission & Vision Section -->
      <section class="py-16 bg-secondary/50">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-4">Our Mission</h3>
              <p class="text-gray-600">
                To provide quality education that nurtures the intellectual, physical, social, emotional, and spiritual development of children, preparing them to be confident, compassionate, and responsible global citizens grounded in Islamic values.
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-4">Our Vision</h3>
              <p class="text-gray-600">
                To be a leading early childhood education institution recognized for excellence in academics, character development, and Islamic values, where every child's potential is discovered and nurtured in a safe, inclusive, and stimulating environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    ${createFooter()}
  `;
}

function initializeProgramsPage() {
  const root = document.getElementById('root');
  
  root.innerHTML = `
    ${createHeader('programs')}

    <main>
      <!-- Programs Hero Section -->
      <section class="relative h-[400px] bg-primary text-white">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Our Educational Programs
          </h1>
          <p class="text-lg md:text-xl max-w-3xl animate-fadeIn">
            Comprehensive education programs designed for young learners
          </p>
        </div>
      </section>
      
      <!-- Programs Content -->
      <section class="py-16">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Daycare Program -->
            <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold mb-4">Daycare Program</h2>
              <div class="bg-primary/10 text-primary px-3 py-1 rounded-full inline-block text-sm font-medium mb-4">
                Ages 6 months - 2 years
              </div>
              <p class="text-gray-600 mb-6">
                Our daycare program provides a nurturing and stimulating environment for our youngest learners. We focus on age-appropriate activities that promote sensory exploration, motor skills development, and social interaction.
              </p>
              <h3 class="text-lg font-semibold mb-2">What We Offer:</h3>
              <ul class="list-disc list-inside text-gray-600 space-y-1 mb-6">
                <li>Safe and clean environment</li>
                <li>Qualified and caring staff</li>
                <li>Age-appropriate toys and activities</li>
                <li>Regular feeding and rest times</li>
                <li>Basic language and cognitive development</li>
              </ul>
            </div>
            
            <!-- Nursery Program -->
            <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold mb-4">Nursery Program</h2>
              <div class="bg-primary/10 text-primary px-3 py-1 rounded-full inline-block text-sm font-medium mb-4">
                Ages 3 - 4 years
              </div>
              <p class="text-gray-600 mb-6">
                Our nursery program builds foundational skills through play-based learning and structured activities. We introduce children to basic concepts in language, mathematics, and science while nurturing their creativity and social skills.
              </p>
              <h3 class="text-lg font-semibold mb-2">What We Offer:</h3>
              <ul class="list-disc list-inside text-gray-600 space-y-1 mb-6">
                <li>Play-based learning approach</li>
                <li>Introduction to alphabets and numbers</li>
                <li>Arts and crafts activities</li>
                <li>Story time and language development</li>
                <li>Physical activities and games</li>
                <li>Basic Islamic studies</li>
              </ul>
            </div>
            
            <!-- Kindergarten Program -->
            <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold mb-4">Kindergarten Program</h2>
              <div class="bg-primary/10 text-primary px-3 py-1 rounded-full inline-block text-sm font-medium mb-4">
                Ages 5 - 6 years
              </div>
              <p class="text-gray-600 mb-6">
                Our kindergarten program prepares children for primary school with a focus on literacy, numeracy, and social skills. We provide a structured yet engaging curriculum that develops academic skills while fostering independence and critical thinking.
              </p>
              <h3 class="text-lg font-semibold mb-2">What We Offer:</h3>
              <ul class="list-disc list-inside text-gray-600 space-y-1 mb-6">
                <li>Reading and writing readiness</li>
                <li>Basic mathematics and problem-solving</li>
                <li>Science exploration and discovery</li>
                <li>Social studies and community awareness</li>
                <li>Islamic studies and character development</li>
                <li>Physical education and gross motor skills</li>
                <li>Preparation for primary school transition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Enrollment Section -->
      <section class="py-16 bg-secondary/50">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-12">
            <h2 class="text-3xl font-bold mb-4">Enroll Your Child Today</h2>
            <p class="text-gray-600">
              Give your child the gift of quality education in a nurturing environment. Our registration is open for the upcoming school term.
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="contact.html" class="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all font-medium text-center">
              Contact Us to Enroll
            </a>
          </div>
        </div>
      </section>
    </main>

    ${createFooter()}
  `;
}

function initializeGalleryPage() {
  const root = document.getElementById('root');
  
  root.innerHTML = `
    ${createHeader('gallery')}

    <main>
      <!-- Gallery Hero Section -->
      <section class="relative h-[400px] bg-primary text-white">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Photo Gallery
          </h1>
          <p class="text-lg md:text-xl max-w-3xl animate-fadeIn">
            Take a visual tour of our school and see our students in action
          </p>
        </div>
      </section>
      
      <!-- Gallery Content -->
      <section class="py-16">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Gallery images -->
            <div class="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://via.placeholder.com/600x400?text=Classroom" alt="Classroom" class="w-full h-64 object-cover" />
              <div class="p-4">
                <h3 class="font-semibold">Modern Classrooms</h3>
                <p class="text-gray-600 text-sm">Our well-equipped classrooms provide a stimulating learning environment.</p>
              </div>
            </div>
            
            <div class="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://via.placeholder.com/600x400?text=Playground" alt="Playground" class="w-full h-64 object-cover" />
              <div class="p-4">
                <h3 class="font-semibold">Outdoor Playground</h3>
                <p class="text-gray-600 text-sm">Safe and fun outdoor spaces for physical activities and play.</p>
              </div>
            </div>
            
            <div class="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://via.placeholder.com/600x400?text=Learning" alt="Learning Activities" class="w-full h-64 object-cover" />
              <div class="p-4">
                <h3 class="font-semibold">Learning Activities</h3>
                <p class="text-gray-600 text-sm">Engaging educational activities that make learning fun.</p>
              </div>
            </div>
            
            <div class="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://via.placeholder.com/600x400?text=Library" alt="Library" class="w-full h-64 object-cover" />
              <div class="p-4">
                <h3 class="font-semibold">Library</h3>
                <p class="text-gray-600 text-sm">Our library features age-appropriate books to foster a love of reading.</p>
              </div>
            </div>
            
            <div class="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://via.placeholder.com/600x400?text=Art+Room" alt="Art Room" class="w-full h-64 object-cover" />
              <div class="p-4">
                <h3 class="font-semibold">Art Room</h3>
                <p class="text-gray-600 text-sm">A creative space where children express themselves through art.</p>
              </div>
            </div>
            
            <div class="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://via.placeholder.com/600x400?text=School+Events" alt="School Events" class="w-full h-64 object-cover" />
              <div class="p-4">
                <h3 class="font-semibold">School Events</h3>
                <p class="text-gray-600 text-sm">Special celebrations and events throughout the school year.</p>
              </div>
            </div>
            
            <div class="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://via.placeholder.com/600x400?text=Music+Room" alt="Music Room" class="w-full h-64 object-cover" />
              <div class="p-4">
                <h3 class="font-semibold">Music Room</h3>
                <p class="text-gray-600 text-sm">Where children discover the joy of music and rhythm.</p>
              </div>
            </div>
            
            <div class="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://via.placeholder.com/600x400?text=Science+Corner" alt="Science Corner" class="w-full h-64 object-cover" />
              <div class="p-4">
                <h3 class="font-semibold">Science Corner</h3>
                <p class="text-gray-600 text-sm">Hands-on science experiments that spark curiosity.</p>
              </div>
            </div>
            
            <div class="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://via.placeholder.com/600x400?text=Building+Facade" alt="Building Facade" class="w-full h-64 object-cover" />
              <div class="p-4">
                <h3 class="font-semibold">Our School Building</h3>
                <p class="text-gray-600 text-sm">The welcoming entrance to our school.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    ${createFooter()}
  `;
}

function initializeContactPage() {
  const root = document.getElementById('root');
  
  root.innerHTML = `
    ${createHeader('contact')}

    <main>
      <!-- Contact Hero Section -->
      <section class="relative h-[400px] bg-primary text-white">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Contact Us
          </h1>
          <p class="text-lg md:text-xl max-w-3xl animate-fadeIn">
            We're here to answer your questions and help with admissions
          </p>
        </div>
      </section>
      
      <!-- Contact Content -->
      <section class="py-16">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 class="text-3xl font-bold mb-6">Get In Touch</h2>
              <p class="text-gray-600 mb-8">
                Have questions about our programs or admissions? We're here to help.
                Get in touch with us through the form or using our contact information.
              </p>
              
              <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                <div class="flex items-start mb-6">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <svg
                      class="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1">Address</h3>
                    <p class="text-sm text-gray-600">Kibuli Road, Kampala, Uganda</p>
                  </div>
                </div>
                
                <div class="flex items-start mb-6">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <svg
                      class="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1">Phone</h3>
                    <p class="text-sm text-gray-600">+256 (0) 7XX XXX XXX</p>
                  </div>
                </div>
                
                <div class="flex items-start mb-6">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <svg
                      class="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1">Email</h3>
                    <p class="text-sm text-gray-600">info@kibulinursery.ac.ug</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <svg
                      class="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1">School Hours</h3>
                    <p class="text-sm text-gray-600">Monday - Friday: 7:30 AM - 4:30 PM</p>
                    <p class="text-sm text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
                    <p class="text-sm text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 class="font-semibold mb-4">Follow Us</h3>
                <div class="flex space-x-4">
                  <a href="#" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.11 8.03l-1.01 4.72c-.07.35-.27.45-.55.29l-1.55-1.15-1.67 1.6c-.2.2-.43.09-.52-.12l-.73-2.43-1.73-.57c-.39-.13-.4-.4.09-.59l6.83-2.63c.31-.12.61.09.48.48z" />
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm5.76 5.36c.68 0 1.24.56 1.24 1.24 0 .68-.56 1.24-1.24 1.24-.7 0-1.24-.56-1.24-1.24 0-.7.56-1.24 1.24-1.24zM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 class="text-xl font-semibold mb-6">Send Us a Message</h3>
              <form id="contact-form" class="space-y-5">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    required
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    required
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
                  <select 
                    id="subject" 
                    name="subject" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="admissions">Admissions</option>
                    <option value="programs">Programs</option>
                    <option value="visit">Schedule a Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  class="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Map Section (Placeholder) -->
      <section class="py-16 bg-secondary/50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Find Us</h2>
            <p class="text-gray-600">Located in the heart of Kibuli, our school is easily accessible.</p>
          </div>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-md">
            <!-- Replace with an actual map if available -->
            <div class="h-96 bg-gray-200 flex items-center justify-center">
              <p class="text-gray-500">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    ${createFooter()}
  `;
  
  // Initialize contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Form submitted');
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
}
