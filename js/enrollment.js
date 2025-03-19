
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
