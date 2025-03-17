
/**
 * Main JavaScript file for Kibuli Muslim Nursery School website
 */

// Helper functions
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

// Page navigation
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

  // Form validations
  const forms = $$('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      // Basic validation
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          e.preventDefault();
          isValid = false;
          field.classList.add('border-red-500');
          
          // Add error message if not already present
          const errorMessage = field.nextElementSibling?.classList.contains('error-message');
          if (!errorMessage) {
            const errorSpan = document.createElement('span');
            errorSpan.className = 'error-message text-red-500 text-xs mt-1';
            errorSpan.textContent = 'This field is required';
            field.parentNode.insertBefore(errorSpan, field.nextSibling);
          }
        } else {
          field.classList.remove('border-red-500');
          const errorMessage = field.nextElementSibling?.classList.contains('error-message');
          if (errorMessage) {
            field.nextElementSibling.remove();
          }
        }
      });
      
      // Email validation for email fields
      const emailFields = form.querySelectorAll('input[type="email"]');
      emailFields.forEach(field => {
        if (field.value.trim() && !isValidEmail(field.value)) {
          e.preventDefault();
          isValid = false;
          field.classList.add('border-red-500');
          
          const errorMessage = field.nextElementSibling?.classList.contains('error-message');
          if (!errorMessage) {
            const errorSpan = document.createElement('span');
            errorSpan.className = 'error-message text-red-500 text-xs mt-1';
            errorSpan.textContent = 'Please enter a valid email address';
            field.parentNode.insertBefore(errorSpan, field.nextSibling);
          }
        }
      });
      
      // Show success message if valid
      if (isValid && form.id === 'contact-form') {
        e.preventDefault(); // Prevent actual submission for demo
        simulateFormSubmission(form);
      }
    });
  });
  
  // Clear error states on input
  $$('input, textarea').forEach(field => {
    field.addEventListener('input', function() {
      this.classList.remove('border-red-500');
      const errorMessage = this.nextElementSibling?.classList.contains('error-message');
      if (errorMessage) {
        this.nextElementSibling.remove();
      }
    });
  });
  
  // Image lazy loading
  lazyLoadImages();
  
  // Initialize statistics counters if they exist on the page
  initCounters();
});

// Simulate form submission (for demo purposes)
function simulateFormSubmission(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  // Disable the form and show loading state
  form.querySelectorAll('input, textarea, button').forEach(el => el.disabled = true);
  submitBtn.textContent = 'Sending...';
  
  // Simulate API call delay
  setTimeout(() => {
    // Show success message
    form.innerHTML = `
      <div class="bg-green-50 border border-green-200 text-green-800 px-4 py-6 rounded-md text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-lg font-semibold mb-2">Thank You!</h3>
        <p class="mb-4">Your message has been sent successfully. We'll get back to you soon.</p>
        <button type="button" class="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors" onclick="resetContactForm()">Send Another Message</button>
      </div>
    `;
  }, 1500);
}

// Reset the contact form after submission
window.resetContactForm = function() {
  const contactFormContainer = $('#contact-form').parentElement;
  contactFormContainer.innerHTML = `
    <h3 class="text-xl font-semibold mb-4">Send Us a Message</h3>
    <form id="contact-form" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input type="text" id="name" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required>
      </div>
      
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required>
      </div>
      
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input type="tel" id="phone" name="phone" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
      </div>
      
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea id="message" name="message" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required></textarea>
      </div>
      
      <button type="submit" class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        Send Message
      </button>
    </form>
  `;
  
  // Reattach event listeners
  document.dispatchEvent(new Event('DOMContentLoaded'));
};

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
