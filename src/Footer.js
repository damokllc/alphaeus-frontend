import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './App.css';

function Footer() {
  return (
    <footer className="bg-primary text-white py-4 mt-5">
      <div className="container d-flex flex-column align-items-center">
        <div className="mb-2">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Alphaeus Engineering and Manufacturing Company Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;