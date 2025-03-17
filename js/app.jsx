
// Main React application for Kibuli Muslim Nursery School

// Hero Component
const Hero = () => {
  return (
    <section className="relative h-[600px] bg-primary text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Kibuli Muslim Nursery School
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl animate-fadeIn">
          Nurturing young minds with quality education founded on Islamic values
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact-section" className="bg-white text-primary px-8 py-3 rounded-full hover:bg-opacity-90 transition-all font-medium">
            Enroll Now
          </a>
          <a href="#programs-section" className="bg-transparent border border-white px-8 py-3 rounded-full hover:bg-white/10 transition-all font-medium">
            Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

// ProgramCard Component
const ProgramCard = ({ title, description, icon, ageRange, delay }) => {
  const fadeInStyle = {
    opacity: 0,
    animation: `fadeIn 0.5s ease-out ${delay * 0.1}s forwards`
  };

  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
      style={fadeInStyle}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-sm text-gray-500 mb-4">
        <span className="font-medium">Age Range:</span> {ageRange}
      </div>
      <a href="#" className="text-primary font-medium flex items-center hover:underline">
        Learn More
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="4" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
          required
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Send Message
      </button>
    </form>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">Kibuli Nursery</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary">Home</a>
              <a href="#about-section" className="text-gray-700 hover:text-primary">About</a>
              <a href="#programs-section" className="text-gray-700 hover:text-primary">Programs</a>
              <a href="#gallery-section" className="text-gray-700 hover:text-primary">Gallery</a>
              <a href="#contact-section" className="text-gray-700 hover:text-primary">Contact</a>
            </nav>
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        
        {/* Programs Section */}
        <section id="programs-section" className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-white text-xs font-medium text-primary mb-6">
                Our Programs
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Educational Programs</h2>
              
              <p className="text-gray-600">
                Discover our comprehensive range of educational programs designed to nurture young minds 
                and provide a strong foundation for their future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProgramCard
                title="Daycare"
                description="A nurturing environment for our youngest learners with age-appropriate activities and care."
                icon={
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                }
                ageRange="6 months - 2 years"
                delay={1}
              />
              
              <ProgramCard
                title="Nursery"
                description="Building foundational skills through play-based learning and structured activities."
                icon={
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                }
                ageRange="3 - 4 years"
                delay={2}
              />
              
              <ProgramCard
                title="Kindergarten"
                description="Preparing children for primary school with literacy, numeracy, and social skills."
                icon={
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                }
                ageRange="5 - 6 years"
                delay={3}
              />
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact-section" className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-white text-xs font-medium text-primary mb-6">
                  Get In Touch
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
                
                <p className="text-gray-600 mb-8">
                  Have questions about our programs or admissions? We're here to help.
                  Get in touch with us through the form or using our contact information.
                </p>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-sm text-gray-600">Kibuli Road, Kampala, Uganda</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-sm text-gray-600">+256 (0) 7XX XXX XXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-gray-600">info@kibulinursery.ac.ug</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Kibuli Muslim Nursery School</h3>
              <p className="text-gray-400 mb-4">
                Providing quality education founded on Islamic values since 1980.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.11 8.03l-1.01 4.72c-.07.35-.27.45-.55.29l-1.55-1.15-1.67 1.6c-.2.2-.43.09-.52-.12l-.73-2.43-1.73-.57c-.39-.13-.4-.4.09-.59l6.83-2.63c.31-.12.61.09.48.48z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm5.76 5.36c.68 0 1.24.56 1.24 1.24 0 .68-.56 1.24-1.24 1.24-.7 0-1.24-.56-1.24-1.24 0-.7.56-1.24 1.24-1.24zM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#about-section" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#programs-section" className="text-gray-400 hover:text-white">Our Programs</a></li>
                <li><a href="#gallery-section" className="text-gray-400 hover:text-white">Gallery</a></li>
                <li><a href="#contact-section" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Admissions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">School Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>7:30 AM - 4:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 12:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
              <div className="mt-4">
                <a href="#contact-section" className="bg-primary text-white px-4 py-2 rounded-md inline-block hover:bg-primary/90 transition-colors">Contact Us</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Kibuli Muslim Nursery School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Render the React App
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
