import React from "react";
import logo from '../assets/img/logo.png';
import '../styesheets/Logo.css';

const Logo = (props) => (
    <div className='calc-logo-container'>
      <img 
        src={logo}
        className='calc-logo'
        alt='Logo'
      />
    </div>
);

export default Logo;