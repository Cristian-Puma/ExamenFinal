// src/componentes/Footer.jsx
import React from 'react';
import fbImage from '../assets/fb.webp';
import youtubeImage from '../assets/Youtube.png';
import igImage from '../assets/ig.jpeg';

function Footer() {
  const handleMouseOver = (e) => {
    e.target.style.filter = 'grayscale(0%)';
  };

  const handleMouseOut = (e) => {
    e.target.style.filter = 'grayscale(100%)';
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Espacio entre texto y iconos
    alignItems: 'center', // Centra verticalmente
    padding: '1rem',
    backgroundColor: '#178c17',
    color: '#fff',
  };

  const textStyle = {
    flex: '1',
    textAlign: 'left',
    fontSize: '1.3rem', // Aumenta el tamaño del texto
    color: '#fff', // Cambia el color del texto a blanco
  };

  const iconContainerStyle = {
    display: 'flex',
    gap: '1rem', // Espacio entre iconos
  };

  const iconStyle = {
    width: '2rem',
    height: '2rem',
    filter: 'grayscale(100%)',
    transition: 'filter 0.3s ease',
  };

  return (
    <footer style={footerStyle}>
      <div style={textStyle}>
        <p>TRAVELING</p>
      </div>
      <div style={iconContainerStyle}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img 
            src={fbImage} 
            alt="Facebook" 
            style={iconStyle} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
          />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img 
            src={youtubeImage} 
            alt="YouTube" 
            style={iconStyle} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img 
            src={igImage} 
            alt="Instagram" 
            style={iconStyle} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
