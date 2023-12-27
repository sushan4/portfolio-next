// Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-4 pb-2">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          &copy; {currentYear} Sushan Uchil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
