
/**
 * Main JavaScript file for Kibuli Muslim Nursery School website
 */

// Helper functions for non-React parts of the site
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

// Page navigation for non-React parts
document.addEventListener('DOMContentLoaded', () => {
  // Handle smooth scrolling for anchor links
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = $(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Lazy load images
  lazyLoadImages();
  
  // Initialize statistics counters if they exist on the page
  initCounters();
});

// Email validation helper
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Lazy load images
function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    $$('img[data-src]').forEach(img => {
      imgObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver support
    $$('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
    });
  }
}

// Initialize number counters with animation
function initCounters() {
  const counterElements = $$('[data-counter]');
  
  if (counterElements.length === 0) return;
  
  const options = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const target = parseInt(element.dataset.counter, 10);
        const duration = parseInt(element.dataset.duration, 10) || 2000;
        const suffix = element.dataset.suffix || '';
        
        animateCounter(element, target, duration, suffix);
        observer.unobserve(element);
      }
    });
  }, options);
  
  counterElements.forEach(counter => {
    observer.observe(counter);
  });
}

function animateCounter(element, target, duration, suffix) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.min(Math.floor(start), target) + suffix;
    
    if (start >= target) {
      clearInterval(timer);
    }
  }, 16);
}
