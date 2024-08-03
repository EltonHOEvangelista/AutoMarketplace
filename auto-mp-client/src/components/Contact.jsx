import React from 'react';
import Header from './Header';

const Contact = () => {
  return (
    <>
    <Header />
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-gray-700 mb-4">
            If you have any questions or need assistance, feel free to reach out to us. We are here to help!
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full border border-gray-300 rounded-lg p-2" rows="5"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </>

  );
};

export default Contact;
