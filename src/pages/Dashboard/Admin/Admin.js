import React from 'react';
import { Card, ListGroup, Col, Container, Row, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const Admin = () => {
    const {user} = useAuth()
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>My Profile</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{user.name}</ListGroup.Item>
                            <ListGroup.Item>{user.email}</ListGroup.Item>
                            <ListGroup.Item>{user.role}</ListGroup.Item>
                        </ListGroup>
                        <Button variant="secondary">Edit</Button>
                        <Button variant="secondary" style={{ marginTop: '1rem' }}>Delete</Button>
                    </Card>
                    </Col>
                    <Col lg="8"></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;