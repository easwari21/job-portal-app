import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          JobPortal
        </Link>
        <div className="navbar-links">
          <Link to="/" className="btn" style={{ background: 'transparent', border: '1px solid var(--border)' }}>
            Post a Job
          </Link>
          <Link to="/" className="btn" style={{ marginLeft: '12px' }}>
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
