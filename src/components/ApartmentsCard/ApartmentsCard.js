import React from 'react';
import './ApartmentsCard.css';
import room1 from './ApartmentImage/room1.jpg';
import room3 from './ApartmentImage/room3.jpg';
import TopBanner from '../TopBanner/TopBanner';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ApartmentsCard = (props) => {
    // console.log(props.apartment)
    const {title,image,_id} = props.apartment
    const {isLoading} = useAuth()
    // if(isLoading){
    //     return 'loading.........'
    // }
    return (
        <div>
            <div className="single-apartment">
                    <img src={`data:image/png;base64,${image}`} alt="room" />
                    {/* <img src={room1} alt="room" /> */}
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