import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyModal from '../MyModal/MyModal';
import Modal from 'react-bootstrap/Modal'
import './Header.css';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const [modalShow, setModalShow] = useState(false);
    const {user,logOut} = useAuth()

    return (
        <div className='header-area'>
            {/* decdcd  <Button variant="primary">Primary</Button>{' '} */}
            <div className="header">
                <div className="logo">Apartment</div>
                <div className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/apartments">Apartments</Link></li>
                        <li><Link to="/myapartments">one Apartments</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        {
                            user.email ? <li><Link onClick={logOut}>Logout</Link></li>
                            : <li><Link to="/login">Login</Link></li>
                        }
                        <li><Link to="/register">Signup</Link></li>
                    </ul>
                </div>
                
                <div className="header-btn" onClick={() => setModalShow(true)}>Schedule a visit</div>
                
                <MyModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div>
    );
};

export default Header;