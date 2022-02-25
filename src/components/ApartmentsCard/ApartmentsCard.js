import React from 'react';
import './ApartmentsCard.css';
import room1 from './ApartmentImage/room1.jpg';
import topBanner from './ApartmentImage/breadcrumb.webp';

const ApartmentsCard = () => {
    return (
        <div className='apartmentsCard'>
            <div className="banner-area">
                <div className="banner-title"><h2>Apartments</h2></div>
                <img src={topBanner} alt="" />
            </div>
        </div>
    );
};

export default ApartmentsCard;