
// About page React components for Kibuli Muslim Nursery School

// Hero component for About page
const AboutHero = () => {
  return (
    <section className="relative h-[400px] bg-primary text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
          About Our School
        </h1>
        <p className="text-xl max-w-3xl animate-fadeIn">
          Learn more about our history, mission, and vision for quality education
        </p>
      </div>
    </section>
  );
};

// Staff Member Card component
const StaffCard = ({ name, role, image, bio }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image || "/placeholder.svg"} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </div>
  );
};

// About Page App
const AboutApp = () => {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="index.html" className="text-2xl font-bold text-primary">Kibuli Nursery</a>
            <nav className="hidden md:flex space-x-8">
              <a href="index.html" className="text-gray-700 hover:text-primary">Home</a>
              <a href="about.html" className="text-primary font-medium">About</a>
              <a href="index.html#programs-section" className="text-gray-700 hover:text-primary">Programs</a>
              <a href="index.html#gallery-section" className="text-gray-700 hover:text-primary">Gallery</a>
              <a href="index.html#contact-section" className="text-gray-700 hover:text-primary">Contact</a>
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
        <AboutHero />
        
        {/* Mission and Vision Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-primary mb-6">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold mb-6">Nurturing Excellence in Education</h2>
                <p className="text-gray-600 mb-4">
                  At Kibuli Muslim Nursery School, our mission is to provide a holistic educational experience that balances academic excellence with strong Islamic values.
                </p>
                <p className="text-gray-600 mb-4">
                  We strive to create a nurturing environment where children can develop intellectually, spiritually, physically, and socially, preparing them for success in further education and in life.
                </p>
                <p className="text-gray-600">
                  Through personalized attention and a balanced curriculum, we aim to instill a love for learning while fostering critical thinking, creativity, and moral character.
                </p>
              </div>
              
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-primary mb-6">
                  Our Vision
                </div>
                <h2 className="text-3xl font-bold mb-6">Building Future Leaders</h2>
                <p className="text-gray-600 mb-4">
                  We envision Kibuli Muslim Nursery School as a center of excellence in early childhood education, recognized for its integration of quality academic programs with Islamic principles.
                </p>
                <p className="text-gray-600 mb-4">
                  Our vision is to be the premier institution where children from diverse backgrounds can receive an education that not only prepares them academically but also shapes them into compassionate, responsible, and ethical individuals.
                </p>
                <p className="text-gray-600">
                  We aspire to be a model school that demonstrates how Islamic values can enhance and enrich modern educational practices, producing graduates who contribute positively to society.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our History Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-white text-xs font-medium text-primary mb-6">
                Our History
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Legacy of Educational Excellence</h2>
              <p className="text-gray-600">
                Since our founding, Kibuli Muslim Nursery School has been committed to providing 
                quality education rooted in Islamic values to children in our community.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="School founding" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Our Founding</h3>
                  <p className="text-gray-600 mb-4">
                    Kibuli Muslim Nursery School was established in 1980 by a group of visionary 
                    community leaders who recognized the need for quality early childhood education 
                    with an Islamic foundation.
                  </p>
                  <p className="text-gray-600">
                    The school began with just two classrooms and twenty students, but with a clear 
                    mission to provide an exceptional educational experience that would prepare 
                    children for success while nurturing their spiritual growth.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="School growth" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Growth and Development</h3>
                  <p className="text-gray-600 mb-4">
                    Over the decades, the school has grown significantly, expanding its facilities, 
                    enhancing its curriculum, and increasing its student population. Today, we serve 
                    hundreds of children from diverse backgrounds.
                  </p>
                  <p className="text-gray-600">
                    Throughout this growth, we have remained committed to our core values and 
                    mission, continuously adapting our approaches to meet the changing needs of 
                    education while preserving our Islamic ethos.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="School today" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Kibuli Today</h3>
                  <p className="text-gray-600 mb-4">
                    Today, Kibuli Muslim Nursery School stands as a respected institution known for 
                    its academic excellence, nurturing environment, and commitment to Islamic values.
                  </p>
                  <p className="text-gray-600">
                    Our graduates consistently excel in primary school and beyond, a testament to 
                    the strong foundation they receive at Kibuli. We continue to evolve and improve, 
                    always striving to provide the best possible education for our students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Staff Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-primary mb-6">
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Staff</h2>
              <p className="text-gray-600">
                Our dedicated team of educators and support staff are committed to providing 
                an exceptional educational experience for every child.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaffCard 
                name="Aisha Nambi"
                role="Head Teacher"
                image="/placeholder.svg"
                bio="With over 15 years of experience in early childhood education, Ms. Nambi leads our school with passion and dedication."
              />
              
              <StaffCard 
                name="Ibrahim Kasozi"
                role="Deputy Head Teacher"
                image="/placeholder.svg"
                bio="Mr. Kasozi specializes in curriculum development and ensures our educational programs meet the highest standards."
              />
              
              <StaffCard 
                name="Fatima Nabulya"
                role="Nursery Teacher"
                image="/placeholder.svg"
                bio="Ms. Nabulya brings creativity and energy to her classroom, making learning fun and engaging for our youngest students."
              />
              
              <StaffCard 
                name="Mohammad Ssekandi"
                role="Islamic Studies Teacher"
                image="/placeholder.svg"
                bio="Mr. Ssekandi guides our students in understanding Islamic values and principles, integrating them into daily learning."
              />
              
              <StaffCard 
                name="Sarah Nakitto"
                role="Kindergarten Teacher"
                image="/placeholder.svg"
                bio="With a background in child psychology, Ms. Nakitto excels at preparing our older students for primary school."
              />
              
              <StaffCard 
                name="Ahmed Kakooza"
                role="School Administrator"
                image="/placeholder.svg"
                bio="Mr. Kakooza manages the day-to-day operations of our school, ensuring everything runs smoothly for students and staff."
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our School Community
              </h2>
              
              <p className="text-white/80 mb-10 text-lg">
                We invite you to become part of the Kibuli Muslim Nursery School family. 
                Contact us to learn more about admissions or to schedule a visit.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="index.html#contact-section"
                  className="bg-white text-primary px-8 py-3 rounded-full hover:bg-white/90 transition-all font-medium"
                >
                  Contact Us
                </a>
                
                <a
                  href="index.html"
                  className="bg-transparent text-white border border-white px-8 py-3 rounded-full hover:bg-white/10 transition-all font-medium"
                >
                  Back to Home
                </a>
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
                <li><a href="index.html" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="about.html" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="index.html#programs-section" className="text-gray-400 hover:text-white">Our Programs</a></li>
                <li><a href="index.html#gallery-section" className="text-gray-400 hover:text-white">Gallery</a></li>
                <li><a href="index.html#contact-section" className="text-gray-400 hover:text-white">Contact</a></li>
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
                <a href="index.html#contact-section" className="bg-primary text-white px-4 py-2 rounded-md inline-block hover:bg-primary/90 transition-colors">Contact Us</a>
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
ReactDOM.createRoot(document.getElementById('root')).render(<AboutApp />);
