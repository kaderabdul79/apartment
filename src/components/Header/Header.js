import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-area'>
            {/* decdcd  <Button variant="primary">Primary</Button>{' '} */}
            {/* <Container fluid> */}
            <div className="header">
                <div className="logo">Apartment</div>
                <div className="navbar">
                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">Apartments</Link></li>
                        <li><Link to="">Contact</Link></li>
                        <li><Link to="">Login</Link></li>
                        <li><Link to="">Signup</Link></li>
                    </ul>
                </div>
                <div className="header-btn">Schedule a visit</div>
            </div>
            {/* </Container> */}
        </div>
    );
};

export default Header;