import React from 'react';
import './ApartmentsCard.css';
import TopBanner from '../TopBanner/TopBanner';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ApartmentsCard = (props) => {
    // console.log(props.apartment)
    const {title,image,_id} = props.apartment
    const {isLoading} = useAuth()
 
    return (
        <div>
            <div className="single-apartment">
                    <img src={`data:image/png;base64,${image}`} alt="room" />
                    <Link to={`/apartments/${_id}`}><div className="apartment-desc">
                        <h3>{title}</h3>
                        <span>explore</span>
                    </div></Link>
                </div>
            {/* all rooms grid end */}
        </div>
    );
};

export default ApartmentsCard;