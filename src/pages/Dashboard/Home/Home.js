import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Schedule from '../../../components/Schedule/Schedule';

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="6"><Schedule></Schedule></Col>
                    <Col lg="6"><Schedule></Schedule></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;