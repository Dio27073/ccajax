import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add API call or form submission logic here
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-lg text-center mb-12">
          If you have any questions or need details about our services? Feel free to contact us.
          We're here to help you on your journey toward healing, growth, and fulfillment.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@example.com"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Leave a comment..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6">Our Commitment to You</h2>
          <p className="text-lg leading-relaxed text-center">
            We strive to respond to all inquiries within 24 hours. Your journey toward healing and growth is important to us, and we're here to support you every step of the way.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;