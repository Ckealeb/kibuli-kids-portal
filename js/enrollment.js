
/**
 * Enrollment form functionality
 */

/**
 * Handle enrollment form submission
 * @param {Event} event - The form submission event
 */
export function handleEnrollmentSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {
    parentName: formData.get('parentName'),
    parentEmail: formData.get('parentEmail'),
    parentPhone: formData.get('parentPhone'),
    childName: formData.get('childName'),
    childDob: formData.get('childDob'),
    program: formData.get('program'),
    message: formData.get('message')
  };

  // Send email using mailto link as a fallback
  const subject = encodeURIComponent('New Enrollment Application');
  const body = encodeURIComponent(`
    Parent Details:
    Name: ${data.parentName}
    Email: ${data.parentEmail}
    Phone: ${data.parentPhone}

    Child Details:
    Name: ${data.childName}
    Date of Birth: ${data.childDob}
    Desired Program: ${data.program}

    Additional Message:
    ${data.message}
  `);

  window.location.href = `mailto:kibulimuslimnurseryschool@gmail.com?subject=${subject}&body=${body}`;
}

/**
 * Create enrollment form HTML
 * @returns {string} HTML string for enrollment form
 */
export function createEnrollmentForm() {
  return `
    <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
      <h3 class="text-xl font-semibold mb-6">Enrollment Application</h3>
      <form id="enrollment-form" class="space-y-4" onsubmit="handleEnrollmentSubmit(event)">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="parentName" class="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name</label>
            <input 
              type="text" 
              id="parentName" 
              name="parentName" 
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
            />
          </div>
          
          <div>
            <label for="parentEmail" class="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Email</label>
            <input 
              type="email" 
              id="parentEmail" 
              name="parentEmail" 
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
            />
          </div>
        </div>

        <div>
          <label for="parentPhone" class="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Phone</label>
          <input 
            type="tel" 
            id="parentPhone" 
            name="parentPhone" 
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="childName" class="block text-sm font-medium text-gray-700 mb-1">Child's Full Name</label>
            <input 
              type="text" 
              id="childName" 
              name="childName" 
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
            />
          </div>
          
          <div>
            <label for="childDob" class="block text-sm font-medium text-gray-700 mb-1">Child's Date of Birth</label>
            <input 
              type="date" 
              id="childDob" 
              name="childDob" 
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
            />
          </div>
        </div>

        <div>
          <label for="program" class="block text-sm font-medium text-gray-700 mb-1">Desired Program</label>
          <select 
            id="program" 
            name="program" 
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select a program</option>
            <option value="Daycare">Daycare (6 months - 2 years)</option>
            <option value="Nursery">Nursery (3 - 4 years)</option>
            <option value="Kindergarten">Kindergarten (5 - 6 years)</option>
          </select>
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          ></textarea>
        </div>

        <button 
          type="submit" 
          class="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-medium"
        >
          Submit Application
        </button>
      </form>
    </div>
  `;
}
