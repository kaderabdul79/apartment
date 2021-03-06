import React, { useState } from 'react';
import { Button, ModalBody } from 'react-bootstrap';
import './MyModal.css';
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom';
import InputBox from '../InputBox/InputBox';
import useAuth from '../../hooks/useAuth';

const MyModal = (props) => {
  // to show user name who are logined
  const {user} = useAuth()
  // 
  const initialData = {name: user.displayName,email: user.email,phone: '',message: ''}
  const [scheduleForVisit,setScheduleForVisit] = useState(initialData)
  // console.log(scheduleForVisit)
  // 
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newscheduleForVisit = { ...scheduleForVisit };
    newscheduleForVisit[field] = value;
    setScheduleForVisit(newscheduleForVisit);
    // console.log(scheduleForVisit)
  }
  // 
  const handleScheduleForVisit = (e) => {
    const schedule = {
      ...scheduleForVisit,
      // which day user confirm us he'll visit
      confirmedToday: new Date().toLocaleDateString()
    }
    // console.log(schedule)
      // send to the server if user submit schedule form
  fetch('https://fierce-atoll-66877.herokuapp.com/schedules', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(schedule)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data.insertedId)
  })

    e.preventDefault();
  }
  // handleScheduleForVisit end

  // 
    return (
        <Modal class="modal-dialog modal-dialog-centered"
          {...props}
          // size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Schedule A Visit
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* modal visit form start */}
            <div className="login-cover">
              <form className="login-form" onSubmit={handleScheduleForVisit}>
                <InputBox eventListener={handleOnBlur} type="text" name="name" placeholder="Your Name"></InputBox>
                <InputBox eventListener={handleOnBlur} type="email" name="email" placeholder="Your email"></InputBox>
                <InputBox eventListener={handleOnBlur} type="text" name="phone" placeholder="Phone Number"></InputBox>
                <InputBox eventListener={handleOnBlur} type="textarea" name="message" placeholder="How can we Help You"></InputBox>
                <input type="submit" value="Submit" />
              </form>
           </div>
           {/* modal visit form start */}
          </Modal.Body>
          {/* footer close btton alter has x */}
          {/* <Modal.Footer>
            <Button onClick={props.onHide} className="btn btn-primary">Close</Button>
          </Modal.Footer> */}
        </Modal>
      );
};

export default MyModal;