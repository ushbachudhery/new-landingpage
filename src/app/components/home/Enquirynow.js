import {FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
const EnquiryNow = () => {
    return (
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">Enquiry Now</h2>
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Mobile"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary hover:text-white hover:bg-primary font-semibold rounded shadow transition-all border-2 border-primary"
              >
                <FaPaperPlane /> Send Message
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary hover:text-white font-semibold rounded shadow hover:bg-primary transition-all border-2 border-primary"
              >
                <FaPhoneAlt /> Call Now
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default EnquiryNow;