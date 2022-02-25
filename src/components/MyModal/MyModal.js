import React from 'react';
import { Button, ModalBody } from 'react-bootstrap';
import './MyModal.css';
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom';
import InputBox from '../InputBox/InputBox';

const MyModal = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Schedule a visit
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* modal visit form start */}
            <div className="login-cover">
              <form className="login-form">
                <InputBox type="text" name="name" placeholder="Your Name"></InputBox>
                <InputBox type="email" name="email" placeholder="Your email"></InputBox>
                <InputBox type="text" name="phone" placeholder="Phone Number"></InputBox>
                <InputBox type="textarea" name="message" placeholder="How can we Help You"></InputBox>
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