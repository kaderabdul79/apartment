import React from 'react';
import './Login.css';
import InputBox from '../components/InputBox/InputBox';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Login = () => {
  const {usingGoogleSignin,user,error} = useAuth()

  const history = useHistory()
  const location = useLocation()

  const handleGoogleSignIn = () => {
    usingGoogleSignin(location, history)
  }
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
            Have no Account ? <Link to="/register" className='signup-btn'>Signup Now</Link>
            <div className="provider">
                    <button className='google-btn' onClick={handleGoogleSignIn}>Login with Google</button>
                    <button className='github-btn'>Login with Github</button>
            </div>
            </div>
        </div>
    );
};

export default Login;