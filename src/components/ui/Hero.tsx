
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Import placeholder images (you'll need to add these to public/)
const heroImage = '/placeholder.svg';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('welcome-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${isLoaded ? 'image-loaded' : 'image-loading'}`}
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/70"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`inline-block px-4 py-1 rounded-full bg-white text-primary text-sm font-medium mb-6 opacity-0 ${isLoaded ? 'fade-up' : ''}`}>
            Welcome to Excellence in Early Education
          </div>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 ${isLoaded ? 'fade-up stagger-1' : ''}`}
          >
            Kibuli Muslim Nursery School
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto opacity-0 ${isLoaded ? 'fade-up stagger-2' : ''}`}
          >
            Nurturing young minds through Islamic values and educational excellence. 
            Building a foundation for lifelong learning in a caring environment.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center opacity-0 ${isLoaded ? 'fade-up stagger-3' : ''}`}>
            <Link
              to="/admissions"
              className="bg-white text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all font-medium flex items-center justify-center gap-2 group"
            >
              Enroll Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="bg-transparent text-white border border-white px-8 py-3 rounded-full hover:bg-white/10 transition-all font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-0 ${isLoaded ? 'fade-in stagger-4 animate-float' : ''}`}
        onClick={scrollToNextSection}
      >
        <ChevronDown size={30} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;
