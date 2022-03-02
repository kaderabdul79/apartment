import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../components/ApartmentsCard/ApartmentsCard.css';
import ApartmentsCard from '../components/ApartmentsCard/ApartmentsCard';
import TopBanner from '../components/TopBanner/TopBanner';

const Apartments = () => {
    const [apartments,setApartments] = useState([])
    // load data from server
    useEffect(()=>{
        fetch('http://localhost:5000/apartments')
        .then(res => res.json())
        .then(data => setApartments(data))
    },[])

    return (
        <div className='apartmentsCard'>
            <TopBanner title="Apartments"></TopBanner>
            {/* {apartments.length} */}
            <div className="apartments-area">
            {/* <div className="single-apartment"> */}
            {
                apartments.map(apartment => <ApartmentsCard apartment={apartment}></ApartmentsCard>)
            }
            {/* </div> */}
            </div>
            {/* <ApartmentsCard></ApartmentsCard> */}
        </div>
    );
};

export default Apartments;