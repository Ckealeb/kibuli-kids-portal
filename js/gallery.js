
/**
 * Gallery page JavaScript
 */

import { getContactInfo } from './utils.js';

/**
 * Create the gallery page content
 * @returns {string} HTML for the gallery page
 */
export function createGalleryContent() {
  return `
    <div class="container mx-auto px-6 py-12">
      <h1 class="text-4xl font-bold text-center mb-8">School Gallery</h1>
      <p class="text-center max-w-3xl mx-auto mb-12">
        Welcome to our school gallery. Here you can see glimpses of our daily activities, 
        special events, and the nurturing environment we provide for our students.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        ${createGalleryImages()}
      </div>
    </div>
  `;
}

/**
 * Create gallery images
 * @returns {string} HTML for gallery images
 */
function createGalleryImages() {
  const images = [
    {
      src: 'public/lovable-uploads/17aa9191-3493-4286-a2bf-3003c2e3a848.png',
      alt: 'Students lined up for prayer',
      caption: 'Morning prayer assembly'
    },
    {
      src: 'public/lovable-uploads/cc09cf7b-1022-4989-965d-47d026fc3fad.png',
      alt: 'Students in school uniform',
      caption: 'Students attending outdoor class'
    },
    {
      src: 'public/lovable-uploads/f19a6dd6-4e04-485f-bf49-5f540196ccf6.png',
      alt: 'Students kneeling in prayer',
      caption: 'Prayer time at school'
    },
    {
      src: 'public/lovable-uploads/373d258a-ba2f-48d3-94b2-44e8c4ac3873.png',
      alt: 'Students gathering outside',
      caption: 'Group activities in the schoolyard'
    },
    {
      src: 'public/lovable-uploads/013bd3f6-80e0-49bd-a1f5-899424a644db.png',
      alt: 'Students in prayer position',
      caption: 'Students learning proper prayer techniques'
    },
    {
      src: 'public/lovable-uploads/ff020603-8474-44c6-a98d-982f8c8f2532.png',
      alt: 'School building and students',
      caption: 'Our colorful school building and playground'
    },
    {
      src: 'public/lovable-uploads/b22ef48e-e1ea-4ce5-8673-366a55e9a9e4.png',
      alt: 'Students with teachers outside',
      caption: 'Students with teachers during outdoor activities'
    },
    {
      src: 'public/lovable-uploads/37def0d0-99dc-45b1-a59f-44d95c2d3989.png',
      alt: 'Students with teachers in the schoolyard',
      caption: 'Learning and playing in our safe environment'
    }
  ];

  return images.map(image => `
    <div class="gallery-item overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div class="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src="${image.src}" 
          alt="${image.alt}" 
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div class="p-4 bg-white">
        <p class="font-medium text-gray-800">${image.caption}</p>
      </div>
    </div>
  `).join('');
}
