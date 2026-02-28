import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="nav-logo">
        <div className="nav-logo-icon">
          <Cpu className="text-zinc-950 w-5 h-5" />
        </div>
        <span className="nav-logo-text">PCB<span className="nav-logo-text-accent">AI</span></span>
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/design" className="nav-link">Generator</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/design" className="nav-cta">Start Design</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
