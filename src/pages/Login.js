import React, { useState } from 'react';
import './Login.css';
import InputBox from '../components/InputBox/InputBox';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = () => {

  const [loginInfo,setLoginInfo] = useState({})
  const {usingGoogleSignin,user,error,isLoading,userLogin,usingGithubSignin} = useAuth()

  const history = useHistory()
  const location = useLocation()

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newloginInfo = { ...loginInfo };
    newloginInfo[field] = value;
    setLoginInfo(newloginInfo);
  }

  // handle login button when user'll login using google
  const handleGoogleSignIn = () => {
    usingGoogleSignin(location, history)
  }
  
    // handle login button when user'll login using github
    const handleGithubSignin = () => {
      usingGithubSignin(location, history)
    }

  const handleSigninForm = (e) => {
    // console.log(loginInfo);
    userLogin(loginInfo.email,loginInfo.password,location,history)
    
    e.preventDefault();
  }
    return (
        <div className='login-area'>
            <div className="form-title">Login</div>
            {/*  */}
            <div className="login-cover">
              <form className="login-form" onSubmit={handleSigninForm}>
                <InputBox eventListener={handleOnBlur} type="email" name="email" placeholder="Your email"></InputBox>
                <InputBox eventListener={handleOnBlur} type="password" name="password" placeholder="Enter password"></InputBox>
                <input type="submit" value="Login" />
              </form>
            Have no Account ? <Link to="/register" className='signup-btn'>Signup Now</Link>
            <div className="provider">
                    <button className='google-btn' onClick={handleGoogleSignIn}>Login with Google</button>
                    <button className='github-btn' onClick={handleGithubSignin}>Login with Github</button>
            </div>
            {error ? <Button style={{margin: '15px 0px',backgroundColor: 'yellow'}} className="" variant="warning">{error.message}</Button> : <div></div>}
            </div>
        </div>
    );
};

export default Login;