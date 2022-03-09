import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Col, Container, Row, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ViewProfile = () => {
    const {user} = useAuth()
    const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data));
    // }, []);

    // DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://fierce-atoll-66877.herokuapp.com/users/${id}`;
            console.log(url)
            // fetch(url, {
            //     method: 'DELETE'
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.deletedCount > 0) {
            //             alert('deleted successfully');
            //         }
            //     });
        }
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                    <h3 style={{textTransform: 'capitalize'}}>view profile</h3>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>My Profile</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{user.name}</ListGroup.Item>
                            <ListGroup.Item>{user.email}</ListGroup.Item>
                            <ListGroup.Item>{user.role}</ListGroup.Item>
                        </ListGroup>
                        <Button variant="secondary">Edit</Button>
                        <Button variant="secondary" onClick={() => handleDeleteUser(user._id)} style={{ marginTop: '1rem' }}>Delete</Button>
                    </Card>
                    </Col>
                    <Col lg="8"></Col>
                </Row>
            </Container>
        </div>
    );
};

export default ViewProfile;