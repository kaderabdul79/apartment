import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImagel from './sliderImage/b1.webp';
import sliderImage2 from './sliderImage/b2.webp';
import './Slider.css';
import { Link } from 'react-router-dom';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="wrapper-slider">
                <img
                className="d-block w-100"
                src={sliderImage2}
                alt="First slide"
                />
                <Carousel.Caption>
                <div className="slider-btn"><Link to="/apartments">Visit Our Apartments</Link></div>
                <h3>Beautiful space in The Best Place</h3>
                <p>Convenient Location – Best Price</p>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="wrapper-slider">
                <img
                className="d-block w-100"
                src={sliderImagel}
                alt="First slide"
                />
                <Carousel.Caption>
                <div className="slider-btn"><Link to="/apartments">Visit Our Apartments</Link></div>
                <h3>Beautiful space in The Best Place</h3>
                <p>Convenient Location – Best Price</p>
                </Carousel.Caption>
            </div>
          </Carousel.Item> 
        </Carousel>
      );
};

export default Slider;