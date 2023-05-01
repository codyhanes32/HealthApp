import React from 'react';
import './LandingPage.css'
import businessLogo from '../../images/placeholder.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
        <div className="text-heading">
            <h1>Focus Fitness</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="pic">
            <div className='pic-container'>
                <img className='business-image' src={businessLogo} />
            </div>
        </div>
    </div>
  );
}

export default LandingPage