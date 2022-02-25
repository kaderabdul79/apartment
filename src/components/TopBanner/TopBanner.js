import React from 'react';
import './TopBanner.css';
import topBanner from './breadcrumb.webp';

const TopBanner = ({title}) => {
    return (
        <div>
            {/* top banner area */}
            <div className="banner-area">
                <div className="banner-title"><h2>{title}</h2></div>
                <img src={topBanner} alt="" />
            </div>
            {/* top banner end */}            
        </div>
    );
};

export default TopBanner;