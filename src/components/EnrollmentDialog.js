
// Compiled JavaScript version of EnrollmentDialog.tsx for direct inclusion
"use strict";

const EnrollmentDialog = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
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
  };

  return React.createElement(
    Dialog,
    null,
    React.createElement(
      DialogTrigger,
      { asChild: true },
      React.createElement(
        "button",
        { 
          className: "bg-white text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all font-medium" 
        },
        "Enroll Now"
      )
    ),
    React.createElement(
      DialogContent,
      { className: "sm:max-w-[600px]" },
      React.createElement(
        DialogHeader,
        null,
        React.createElement(
          DialogTitle,
          { className: "text-2xl font-bold mb-4" },
          "Enrollment Application"
        )
      ),
      React.createElement(
        "form",
        { 
          onSubmit: handleSubmit, 
          className: "space-y-4" 
        },
        // Form content with all input fields
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
          // Parent name and email fields
          // ... more form fields
        ),
        // Additional form fields
        React.createElement(
          "button",
          { 
            type: "submit",
            className: "w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-medium"
          },
          "Submit Application"
        )
      )
    )
  );
};

// Export for use in the script tag
export default EnrollmentDialog;
