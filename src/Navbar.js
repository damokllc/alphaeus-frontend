import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './App.css';

function Navbar({ onNavigate, adminLoggedIn, page }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container-fluid flex-wrap">
        <img
          src="/images/logo.png.jpg"
          alt="Alphaeus Logo"
          style={{ height: 60, marginRight: 60 }}
        />
        <div className="d-flex align-items-center gap-2 flex-wrap">
          {page !== 'home' && (
            <button className="btn btn-link nav-link" onClick={() => onNavigate('home')}>Home</button>
          )}
          <button className="btn btn-link nav-link" onClick={() => onNavigate('about')}>About Us</button>
          <button className="btn btn-link nav-link" onClick={() => onNavigate('services')}>Services</button>
          {adminLoggedIn && (
            <>
              <button className="btn btn-link nav-link" onClick={() => onNavigate('projects')}>Projects</button>
              <button className="btn btn-link nav-link" onClick={() => onNavigate('news')}>News</button>
            </>
          )}
          <button className="btn btn-link nav-link" onClick={() => onNavigate('sustainability')}>Sustainability</button>
          <button className="btn btn-link nav-link" onClick={() => onNavigate('health')}>Health & Safety</button>
          <button className="btn btn-link nav-link" onClick={() => onNavigate('contact')}>Contact</button>
          <button className="btn btn-link nav-link" onClick={() => onNavigate('admin')}>Admin</button>
        </div>
        <div className="d-flex align-items-center gap-2" style={{ marginLeft: 16 }}>
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
      </div>
    </nav>
  );
}

export default Navbar;