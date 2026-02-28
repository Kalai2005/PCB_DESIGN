import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left section */}
        <div className="footer-brand">
          <h3>AI Assisted PCB Generator</h3>
          <p>
            Empowering engineers with intelligent power supply design automation.
            From requirements to schematics in seconds.
          </p>
        </div>

        {/* Middle section */}
        <div className="footer-links">
          <h4>Platform</h4>
          <ul>
            <li><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/design" style={{ color: 'inherit', textDecoration: 'none' }}>Generator</Link></li>
            <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>Architecture</Link></li>
          </ul>
        </div>

        {/* Right section */}
        <div className="footer-links1">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/about#privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link></li>
            <li><Link to="/about#terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</Link></li>
          </ul>
        </div>

      </div>
      <div style={{ maxWidth: '1280px', margin: '32px auto 0', padding: '32px 16px 0', borderTop: '1px solid #18181b', textAlign: 'center', color: '#52525b', fontSize: '12px' }}>
        © {new Date().getFullYear()} PCB AI Generator. Built for Academic Excellence.
      </div>
    </footer>
  );
}
