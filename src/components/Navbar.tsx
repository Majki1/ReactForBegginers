import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          React Auth App
        </Link>
        <div className="nav-menu">
          <div className="nav-item">
            <Link to="/" className="nav-links">
              Login
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/register" className="nav-links">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
