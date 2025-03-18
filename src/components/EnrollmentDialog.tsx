
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EnrollmentDialog = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-white text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all font-medium">
          Enroll Now
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Enrollment Application</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name</label>
              <input 
                type="text" 
                id="parentName" 
                name="parentName" 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
            </div>
            
            <div>
              <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Email</label>
              <input 
                type="email" 
                id="parentEmail" 
                name="parentEmail" 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Phone</label>
            <input 
              type="tel" 
              id="parentPhone" 
              name="parentPhone" 
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">Child's Full Name</label>
              <input 
                type="text" 
                id="childName" 
                name="childName" 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
            </div>
            
            <div>
              <label htmlFor="childDob" className="block text-sm font-medium text-gray-700 mb-1">Child's Date of Birth</label>
              <input 
                type="date" 
                id="childDob" 
                name="childDob" 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Desired Program</label>
            <select 
              id="program" 
              name="program" 
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select a program</option>
              <option value="Daycare">Daycare (6 months - 2 years)</option>
              <option value="Nursery">Nursery (3 - 4 years)</option>
              <option value="Kindergarten">Kindergarten (5 - 6 years)</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4} 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-medium"
          >
            Submit Application
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentDialog;
