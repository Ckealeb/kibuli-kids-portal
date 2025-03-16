
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/ui/Hero';
import ProgramCard from '@/components/ui/ProgramCard';
import Statistics from '@/components/ui/Statistics';
import GalleryPreview from '@/components/ui/GalleryPreview';
import ContactForm from '@/components/ui/ContactForm';
import { motion } from 'framer-motion';
import { Book, Users, HeartHandshake, GraduationCap, Award } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />
      
      {/* Welcome Section */}
      <section id="welcome-section" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-primary mb-6">
                About Our School
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Kibuli Muslim Nursery School</h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe every child deserves an exceptional education that nurtures both academic excellence and spiritual growth. 
                Our school provides a unique blend of quality Islamic and secular education in a safe, caring environment.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Kibuli Muslim Nursery School, we focus on developing the whole child – intellectually, spiritually, 
                physically, and socially – preparing them for success in further education and in life.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Book size={20} className="text-primary" />
                  </div>
                  <span>Quality Education</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users size={20} className="text-primary" />
                  </div>
                  <span>Expert Teachers</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <HeartHandshake size={20} className="text-primary" />
                  </div>
                  <span>Caring Environment</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Happy students at Kibuli Muslim Nursery School" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-4 w-32 md:w-40">
                <Statistics />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-white text-xs font-medium text-primary mb-6">
              Our Programs
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Educational Programs</h2>
            
            <p className="text-muted-foreground">
              Discover our comprehensive range of educational programs designed to nurture young minds 
              and provide a strong foundation for their future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Daycare"
              description="A nurturing environment for our youngest learners with age-appropriate activities and care."
              icon={<Users size={24} className="text-primary" />}
              ageRange="6 months - 2 years"
              link="/programs#daycare"
              delay={1}
            />
            
            <ProgramCard
              title="Nursery"
              description="Building foundational skills through play-based learning and structured activities."
              icon={<Book size={24} className="text-primary" />}
              ageRange="3 - 4 years"
              link="/programs#nursery"
              delay={2}
            />
            
            <ProgramCard
              title="Kindergarten"
              description="Preparing children for primary school with literacy, numeracy, and social skills."
              icon={<GraduationCap size={24} className="text-primary" />}
              ageRange="5 - 6 years"
              link="/programs#kindergarten"
              delay={3}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all"
            >
              Explore All Programs
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: <Book size={24} className="text-primary" />,
                    title: "Islamic & Secular Education",
                    description: "Balanced curriculum integrating Islamic values with academic excellence."
                  },
                  {
                    icon: <Users size={24} className="text-primary" />,
                    title: "Small Class Sizes",
                    description: "Personalized attention for optimal learning and development."
                  },
                  {
                    icon: <Award size={24} className="text-primary" />,
                    title: "Qualified Teachers",
                    description: "Experienced educators passionate about early childhood education."
                  },
                  {
                    icon: <HeartHandshake size={24} className="text-primary" />,
                    title: "Safe Environment",
                    description: "Secure facilities with caring staff to ensure child safety."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-primary mb-6">
                Why Choose Us
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Providing the Best for Your Child</h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Kibuli Muslim Nursery School, we're committed to providing the highest quality 
                education in a nurturing environment that respects and integrates Islamic values.
              </p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our approach focuses on developing the whole child – intellectually, spiritually, 
                physically, and socially – preparing them for success in further education and in life.
              </p>
              
              <Link
                to="/about"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all"
              >
                Learn More About Us
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview Section */}
      <GalleryPreview />
      
      {/* Contact Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white text-xs font-medium text-primary mb-6">
                Get In Touch
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
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
                    <p className="text-sm text-muted-foreground">Kibuli Road, Kampala, Uganda</p>
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
                    <p className="text-sm text-muted-foreground">+256 (0) 7XX XXX XXX</p>
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
                    <p className="text-sm text-muted-foreground">info@kibulinursery.ac.ug</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Give Your Child an Exceptional Start?
            </h2>
            
            <p className="text-white/80 mb-10 text-lg">
              Begin your child's educational journey with Kibuli Muslim Nursery School. 
              Enroll today for a quality education centered on Islamic values.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admissions"
                className="bg-white text-primary px-8 py-3 rounded-full hover:bg-white/90 transition-all font-medium"
              >
                Apply for Admission
              </Link>
              
              <Link
                to="/contact"
                className="bg-transparent text-white border border-white px-8 py-3 rounded-full hover:bg-white/10 transition-all font-medium"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
