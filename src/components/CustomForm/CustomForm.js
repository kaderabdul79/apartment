import React from 'react';
import './CustomForm.css';
import InputBox from '../InputBox/InputBox';

const CustomForm = () => {
    return (
        <div className='form-area'>
            <div className="form-title">GET IN TOUCH !</div>
            <div className="form-cover">
                <div className="left-side">
                    <form>
                        <InputBox type="text" name="name" placeholder="Your Name"></InputBox>
                        <InputBox type="email" name="email" placeholder="Your email"></InputBox>
                        <InputBox type="textarea" name="message" placeholder="Your Message"></InputBox>
                        <input type="submit" value="Send Message" />
                    </form>
                </div>
                {/* <div className="right-side">
                    hello
                </div> */}
            </div> 
        </div>
    );
};

export default CustomForm;