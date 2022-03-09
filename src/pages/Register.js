import React, { useState } from 'react';
import './Login.css';
import InputBox from '../components/InputBox/InputBox';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const Register = () => {
  const [signupInfo,setSignUpInfo] = useState({})
  const {user, error, userRegistration,isLoading} = useAuth()
  const history = useHistory()

  const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newsignupInfo = { ...signupInfo };
      newsignupInfo[field] = value;
      setSignUpInfo(newsignupInfo);
  }
  
  const handleSignupForm = (e) => {
      // console.log(signupInfo);
      if(signupInfo.password !== signupInfo.repassword){
          alert("password doesn't match")
          return
      }
      userRegistration(signupInfo.email,signupInfo.password,signupInfo.name,history)
      e.preventDefault();
  }
    return (
        <div className='register-area'>
            <div className="form-title">Register</div>
            {/*  */}
            <div className="register-cover">
              {/* {!isLoading && */}
              <form className="register-form" onSubmit={handleSignupForm}>
                <InputBox eventListener={handleOnBlur} type="text" name="name" placeholder="Your Name"></InputBox>
                <InputBox eventListener={handleOnBlur} type="email" name="email" placeholder="Your email"></InputBox>
                <InputBox eventListener={handleOnBlur} type="password" name="password" placeholder="Enter password"></InputBox>
                <InputBox eventListener={handleOnBlur} type="password" name="repassword" placeholder="Retype password"></InputBox>
                <input type="submit" value="Register" />
              </form>
              {/* } */}
              {/* { !user ? isLoading : <div><Spinner animation="border" /></div>} */}
              {/* { user?.email && <div>User Created Successfully</div> } */}
              {error ? <Button style={{margin: '15px 0px',backgroundColor: 'yellow'}} className="" variant="warning">{error.message}</Button> : <div></div>}
              <br />Already have Account ? <Link to="/login" className='signup-btn'>Login Now</Link>
            
            </div>
        </div>
    );
};

export default Register;