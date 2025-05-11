import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-6 px-4 mt-auto">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-gray-700 mb-2">
          © {currentYear} Research Journal Manager. All rights reserved.
        </p>
        <div className="text-sm text-gray-500">
          <Link to="/terms" className="hover:text-blue-600 transition-colors">
            Terms of Service
          </Link>
          <span className="mx-2">|</span>
          <Link to="/privacy" className="hover:text-blue-600 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;