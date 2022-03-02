import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import InputBox from '../../../components/InputBox/InputBox';


const AddApartment = () => {
    // const [apartmentInfo,setApartmentInfo] = useState({})
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [subtextarea,setTsubtextarea] = useState('')
    const [image,setImage] = useState(null)

    const handleApartmentForm = (e) => {
        e.preventDefault();
        // 
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('subtextarea', subtextarea);
        formData.append('image', image);
        // send to server 
        fetch('http://localhost:5000/apartments', {
            method: 'POST',
            body: formData
        })
    }
    // file field style
    const filestyle = {
        width: '350px',
        height: '75px',
        padding: '20px',
        border: '1px solid #CABE9F',
        marginBottom: '20px',
        borderRadius: '4px',
        fontSize: '18px'
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                        <h3 style={{textTransform: 'capitalize'}}>add new apartment</h3>
                        <form className="login-form" onSubmit={handleApartmentForm}>
                        <input className='allfield' onChange = { e => setTitle(e.target.value)} type="text" name="title" placeholder="Enter title"/>
                        <input className='allfield' onChange = { e => setDescription(e.target.value)} type="textarea" name="description" placeholder="Write description"/>
                        <input style={filestyle} onChange = { e => setImage(e.target.files[0])} type="file" accept="image/*" name="featureImg" placeholder="Upload featureImg" />
                        <input className='allfield' onChange = { e => setTsubtextarea(e.target.value)} type="textarea" name="subtextarea" placeholder="Enter sub details"/>

                        <input type="submit" value="Add Apartment" />
                        </form>
                    </Col>
                    <Col lg="8"></Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddApartment;