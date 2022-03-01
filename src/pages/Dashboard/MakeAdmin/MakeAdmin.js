import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import InputBox from '../../../components/InputBox/InputBox';
import useAuth from '../../../hooks/useAuth';


const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [successmsg,setSuccessmsg] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = (e) => {
        // console.log(e.target.value)
        setEmail(e.target.value);
      }

    const handleMakeAdminForm = (e) => {
        const user = {email}
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
              // Bearer means who are donig bear
              'authorization' : `Bearer ${token}`,
              'content-type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => {
            if(data.modifiedCount){
                // console.log(data)
                setEmail('')
                setSuccessmsg(true)
            }
          })
        //   change form default behaviour
        e.preventDefault();
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                        <form onSubmit={handleMakeAdminForm}>
                            <h3>Make Admin Write Email</h3>
                            <InputBox eventListener={handleOnBlur} type="email" name="email" placeholder="Enter email"></InputBox>
                            {/* <input onBlur={handleOnBlur} type="email" placeholder="enter email" name="email" id="" /> */}
                            {/* <Button type='submit' value="submit">submit</Button> */}
                            <input type='submit' value="submit" />
                        </form>
                        { successmsg && <div>Successfully Made Admin</div> }
                    </Col>
                    <Col lg="8"></Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default MakeAdmin;