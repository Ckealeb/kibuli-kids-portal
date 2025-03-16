
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 
        ${scrolled ? 'glass border-b' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center" onClick={closeMenu}>
          <div className="font-bold text-primary text-xl md:text-2xl transition-all">
            Kibuli Muslim <span className="font-light">Nursery School</span>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-all relative 
                ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}
                after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-4px] 
                after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100
                after:transition-transform after:duration-300 after:origin-center
                ${isActive ? 'after:scale-x-100' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Enrollment CTA - Desktop */}
        <div className="hidden md:block">
          <NavLink
            to="/admissions"
            className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-all"
          >
            Enroll Now
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-slate-950 z-50 flex flex-col pt-20 pb-6 px-6 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/admissions"
            className="mt-6 bg-primary text-white px-5 py-3 rounded-full text-center hover:bg-primary/90 transition-all"
            onClick={closeMenu}
          >
            Enroll Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
