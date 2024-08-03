import React from 'react';
import Header from './Header';

const AboutUs = () => {
  return (
    <>
      <Header />
        <div className="container mx-auto p-4">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
            <p className="text-gray-700 mb-4">
              Welcome to Auto Marketplace! We are a team of passionate individuals dedicated to providing the best car auction experience. Our platform allows users to bid on a variety of vehicles, ensuring transparency and fairness in every transaction.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to connect buyers and sellers through a reliable and user-friendly platform. We believe in making car auctions accessible to everyone, and we strive to offer a seamless and enjoyable experience for our users.
            </p>
            <p className="text-gray-700">
              Thank you for choosing Auto Marketplace. We look forward to serving you and helping you find your next vehicle!
            </p>
        </div>
      </div>
    </>

  );
};

export default AboutUs;
