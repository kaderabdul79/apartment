import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import InputBox from '../../../components/InputBox/InputBox';


const AddApartment = () => {

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
      }

    const handleApartmentForm = (e) => {
       e.preventDefault();
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                        <h3>add new apartment</h3>
                        <form className="login-form" onSubmit={handleApartmentForm}>
                        <InputBox eventListener={handleOnBlur} type="text" name="title" placeholder="Enter title"></InputBox>
                        <InputBox eventListener={handleOnBlur} type="textarea" name="description" placeholder="Write description"></InputBox>
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