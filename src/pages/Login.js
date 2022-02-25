import React from 'react';
import './Login.css';
import InputBox from '../components/InputBox/InputBox';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-area'>
            <div className="form-title">Login</div>
            {/*  */}
            <div className="login-cover">
              <form className="login-form">
                <InputBox type="password" name="password" placeholder="Enter password"></InputBox>
                <InputBox type="email" name="email" placeholder="Your email"></InputBox>
                <input type="submit" value="Login" />
              </form>
            Have no Account ? <Link to="/signup" className='signup-btn'>Signup Now</Link>
            <div className="provider">
                    <button className='google-btn'>Login with Google</button>
                    <button className='github-btn'>Login with Github</button>
            </div>
            </div>
        </div>
    );
};

export default Login;