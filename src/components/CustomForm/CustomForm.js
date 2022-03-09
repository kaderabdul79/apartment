import React, { useState } from 'react';
import './CustomForm.css';
import InputBox from '../InputBox/InputBox';

const CustomForm = () => {
    const [contactInfo,setContactInfo] = useState({})
    const [successmsg,setSuccessmsg] = useState(false)

    const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newcontactInfo = { ...contactInfo };
      newcontactInfo[field] = value;
      setContactInfo(newcontactInfo);
    }
    
    const handleContactForm = (e) => {
        // send info to server
        fetch('https://fierce-atoll-66877.herokuapp.com/contacts', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(contactInfo)
          })
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            if(data.insertedId){
                setContactInfo('')
                setSuccessmsg(true)
                // 
            }
          })
        // prevent form default behaviour
        e.preventDefault();
    }
    return (
        <div className='form-area'>
            <div className="form-title">GET IN TOUCH !</div>
            <div className="form-cover">
                <div className="left-side">
                    <form onSubmit={handleContactForm}>
                        <InputBox eventListener={handleOnBlur} type="text" name="name" placeholder="Your Name"></InputBox>
                        <InputBox eventListener={handleOnBlur} type="email" name="email" placeholder="Your email"></InputBox>
                        <InputBox eventListener={handleOnBlur} type="textarea" name="message" placeholder="Your Message"></InputBox>
                        <input type="submit" value="Send Message" />
                        { successmsg && <div>Successfully Message Sent</div> }
                    </form>
                </div>
            </div> 
        </div>
    );
};

export default CustomForm;