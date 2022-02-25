import React from 'react';
import './Login.css';
import InputBox from '../components/InputBox/InputBox';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='register-area'>
            <div className="form-title">Register</div>
            {/*  */}
            <div className="register-cover">
              <form className="register-form">
                <InputBox type="text" name="name" placeholder="Your Name"></InputBox>
                <InputBox type="email" name="email" placeholder="Your email"></InputBox>
                <InputBox type="password" name="password" placeholder="Enter password"></InputBox>
                <InputBox type="password" name="repassword" placeholder="Retype password"></InputBox>
                <input type="submit" value="Register" />
              </form>
            Already have Account ? <Link to="/login" className='signup-btn'>Login Now</Link>
            
            </div>
        </div>
    );
};

export default Register;