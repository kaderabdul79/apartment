import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import OneApartment from '../components/OneApartment/OneApartment';

const SingleApartment = () => {
    const {id} = useParams()
    const [apartment,setApartment] = useState({})
    // load data from server
    useEffect(()=>{
        fetch(`https://fierce-atoll-66877.herokuapp.com/apartments/${id}`)
        .then(res => res.json())
        .then(data => setApartment(data))
    },[])
    return (
        <div>
            <OneApartment apartment={apartment}></OneApartment>
        </div>
    );
};

export default SingleApartment;