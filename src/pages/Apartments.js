import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../components/ApartmentsCard/ApartmentsCard.css';
import ApartmentsCard from '../components/ApartmentsCard/ApartmentsCard';
import TopBanner from '../components/TopBanner/TopBanner';
import { Spinner } from 'react-bootstrap';

const Apartments = () => {
    const [apartments,setApartments] = useState([])
    // load data from server
    useEffect(()=>{
        fetch('https://fierce-atoll-66877.herokuapp.com/apartments')
        .then(res => res.json())
        .then(data => setApartments(data))
    },[])
    // to take spinnerCenter
    const spinnerCenter = {
        width: '1280px',
        textAlign: 'center'
    }
    return (
        <div className='apartmentsCard'>
            <TopBanner title="Apartments"></TopBanner>
            {/* {apartments.length} */}
            <div className="apartments-area">
            {/* <div className="single-apartment"> */}
            {/* show spinner if take time to show data */}
            {
                apartments.length === 0 ? <div style={spinnerCenter}><Spinner animation="border"/></div> : ''
            }
            {/* show spinner if take time to show data end */}
            {
                apartments.map(apartment => <ApartmentsCard apartment={apartment}></ApartmentsCard>)
            }
            {/* </div> */}
            </div>
        </div>
    );
};

export default Apartments;