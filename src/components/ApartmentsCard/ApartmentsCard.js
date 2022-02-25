import React from 'react';
import './ApartmentsCard.css';
import room1 from './ApartmentImage/room1.jpg';
import room3 from './ApartmentImage/room3.jpg';
import TopBanner from '../TopBanner/TopBanner';

const ApartmentsCard = () => {
    return (
        <div className='apartmentsCard'>
            {/* top banner area */}
            <TopBanner title="Apartments"></TopBanner>
            {/* top banner end */}

            {/* all rooms grid */}
            <div className="apartments-area">
                {/* single-apartment start */}
                <div className="single-apartment">
                    <img src={room1} alt="room" />
                    <div className="apartment-desc">
                        <h3>studio apartments</h3>
                        <span>explore</span>
                    </div>
                </div>
                {/* single-apartment end */}
                {/* single-apartment start */}
                <div className="single-apartment">
                    <img src={room1} alt="room" />
                    <div className="apartment-desc">
                        <h3>studio apartments</h3>
                        <span>explore</span>
                    </div>
                </div>
                {/* single-apartment end */}
                {/* single-apartment start */}
                <div className="single-apartment">
                    <img src={room3} alt="room" />
                    <div className="apartment-desc">
                        <h3>studio apartments</h3>
                        <span>explore</span>
                    </div>
                </div>
                {/* single-apartment end */}
                                {/* single-apartment start */}
                                <div className="single-apartment">
                    <img src={room1} alt="room" />
                    <div className="apartment-desc">
                        <h3>studio apartments</h3>
                        <span>explore</span>
                    </div>
                </div>
                {/* single-apartment end */}

            </div>
            {/* all rooms grid end */}
        </div>
    );
};

export default ApartmentsCard;