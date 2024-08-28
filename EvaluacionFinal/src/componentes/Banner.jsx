import React, { useState, useEffect } from 'react';
import './Banner.css';
import image1 from '../assets/banner1.jpg'; 
import image2 from '../assets/banner 2.jpg';
import image3 from '../assets/banner3.jpg';

function Banner() {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  return (
    <div className="banner">
      <img src={images[currentIndex]} alt="Banner" className="banner-image" />
    </div>
  );
}

export default Banner;
