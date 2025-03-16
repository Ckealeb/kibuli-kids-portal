
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ImageProps {
  src: string;
  alt: string;
  caption: string;
}

const GalleryImage: React.FC<ImageProps> = ({ src, alt, caption }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="aspect-square relative overflow-hidden rounded-lg group"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isHovered ? 'scale-105' : 'scale-100'
        } ${isLoaded ? 'image-loaded' : 'image-loading'}`}
        onLoad={() => setIsLoaded(true)}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
      <div className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-transform duration-300 ${
        isHovered ? 'translate-y-0' : 'translate-y-10'
      }`}>
        <h3 className="font-medium text-sm">{caption}</h3>
      </div>
    </motion.div>
  );
};

const GalleryPreview = () => {
  // In a real app, these would come from an API or CMS
  const images = [
    {
      src: '/placeholder.svg',
      alt: 'Classroom',
      caption: 'Modern Classrooms'
    },
    {
      src: '/placeholder.svg',
      alt: 'Library',
      caption: 'Well-stocked Library'
    },
    {
      src: '/placeholder.svg',
      alt: 'Playground',
      caption: 'Safe Playground'
    },
    {
      src: '/placeholder.svg',
      alt: 'Computer Lab',
      caption: 'Computer Center'
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our School Gallery</h2>
          <p className="text-muted-foreground">
            Take a virtual tour of our state-of-the-art facilities designed to nurture growth, learning, and play.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              caption={image.caption}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center bg-white border border-primary/20 text-primary px-6 py-3 rounded-full hover:bg-primary/5 transition-all"
          >
            View Full Gallery
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
    </div>
  );
};

export default GalleryPreview;
