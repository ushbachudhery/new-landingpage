"use client"
import { useState, useEffect } from 'react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={handleClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-primary mb-4">Contact Us</h2>
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-custom-purple focus:border-custom-purple"
                  placeholder="Enter your name"
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-custom-purple focus:border-custom-purple"
                  placeholder="Enter your email"
                />
              </div>
              {/* Mobile */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-custom-purple focus:border-custom-purple"
                  placeholder="Enter your mobile number"
                />
              </div>
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-custom-purple focus:border-custom-purple"
                  placeholder="Enter your message"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-primary border border-2 border-primary bg-white rounded-lg shadow-lg hover:bg-primary hover:text-white transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
