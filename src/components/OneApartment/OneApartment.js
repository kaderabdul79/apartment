import React from 'react';
import Slider from '../Slider/Slider';
import TopBanner from '../TopBanner/TopBanner';
import './OneApartment.css';

const OneApartment = ({apartment}) => {
    // console.log(apartment.title)
    return (
        <div className='single-apartment-area'>
            <TopBanner title="STUDIO APARTMENTS"></TopBanner>
            <div className="single-apartment-wrapper">
                <div className="slider">
                    <Slider></Slider>
                </div>
                <div className="desc-1">
                    <h5>Introducing single apartment, the stunning new addition to the downtown Manhattan skyline. A perfect blend of breathtaking architecture designed, with awe-inspiring interiors envisioned</h5>
                    <p>Sleek and sophisticated, MaisonCo offers qualities always coveted, but rarely obtained in the finest New York rental residences – a unique blend of generously proportioned interiors and the enjoyment of Nassau Club over 10,000 square feet of indoor and outdoor amenities creatively conceived to enhance your exceptional FiDi lifestyle.</p>
                </div>
                <div className="desc-2">
                    <h3>{apartment.title}</h3>
                    <p>{apartment.description}</p>
                </div>
            </div>
        </div>
    );
};

export default OneApartment;