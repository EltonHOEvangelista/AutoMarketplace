import React from 'react';
import Header from './Header';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
        <div className="container mx-auto p-4">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
            <p className="text-gray-700 mb-4">
              At Auto Marketplace, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Information Collection</h2>
            <p className="text-gray-700 mb-4">
              We collect personal information that you provide to us when you use our services, such as your name, email address, and payment information. We also collect information about your interactions with our platform.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Information Use</h2>
            <p className="text-gray-700 mb-4">
              We use your information to provide and improve our services, process transactions, communicate with you, and ensure the security of our platform.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to access, correct, or delete your personal information. You can also opt out of receiving marketing communications from us.
            </p>
            <p className="text-gray-700 mb-4">
              If you have any questions about our Privacy Policy, please contact us at privacy@automarketplace.com.
            </p>
          </div>
        </div>
    </>
  );
};

export default PrivacyPolicy;
