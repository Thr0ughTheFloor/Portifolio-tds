import React from 'react';
import Style from './carousel.module.css';

import img01 from '../assets/images/Calendula-15.png';
import img02 from '../assets/images/Calendula-3.png';
import img03 from '../assets/images/SynthLixo.jpg';
import img04 from '../assets/images/roomAbleton.jpg';
import img05 from '../assets/images/artwork-1.jpg';
import img06 from '../assets/images/artwork-2.jpg';
import img07 from '../assets/images/artwork-3.jpg';


const CarouselBase = ({ id, images }) => {
  return (
    <section className={Style.container}>
      <div id={id} className={`carousel slide ${Style.carousel}`} data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={img} className="d-block w-100" alt={`slide-${index}`} />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};


export const Carousel = () => {
  const images = [img01, img02, img03, img04];
  return <CarouselBase id="carousel01" images={images} />;
};


export const Carousel_Artwork = () => {
  const images = [img05, img06, img07];
  return <CarouselBase id="carousel02" images={images} />;
};