import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Admin = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="6">I'm admin</Col>
                    <Col lg="6">show admin profile.......</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;