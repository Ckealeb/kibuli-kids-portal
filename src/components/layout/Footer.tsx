
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Kibuli Muslim Nursery School</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Providing quality Islamic and secular education for children in a safe, 
              nurturing environment that fosters spiritual growth and academic excellence.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                <Facebook size={18} className="text-primary" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                <Twitter size={18} className="text-primary" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                <Instagram size={18} className="text-primary" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Programs', path: '/programs' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Programs</h3>
            <ul className="space-y-2">
              {[
                { name: 'Daycare', path: '/programs#daycare' },
                { name: 'Nursery', path: '/programs#nursery' },
                { name: 'Kindergarten', path: '/programs#kindergarten' },
                { name: 'Primary School', path: '/programs#primary' },
                { name: 'Arabic & Quran', path: '/programs#quran' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Kibuli Road, Kampala, Uganda</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+256 (0) 7XX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@kibulinursery.ac.ug</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} Kibuli Muslim Nursery School. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
