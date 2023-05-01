import React from 'react';
import './Navbar.css';

const signedIn = true;

const Navbar = () => {
  return (
    <nav className="navbar">
        {signedIn && (
            <div className="navbar-center">
                <button className="navbar-button">Home</button>
                <button className="navbar-button">My Health</button>
            </div>
        )}
      <div className="navbar-right">
        <button className="navbar-button">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;