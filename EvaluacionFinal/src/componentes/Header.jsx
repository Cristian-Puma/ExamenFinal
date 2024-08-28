import React from 'react';
import logo from '../assets/logo.jpg'; 
import DateTime from './DateTime';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />
      <span className="logo-text">TRAVELING</span> 
      <div className="dateTime">
        <DateTime />
      </div>
    </header>
  );
}

export default Header;
