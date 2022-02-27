import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';


const MakeAdmin = () => {
    const [email,setEmail] = useState('');

    const handleOnBlur = (e) => {
        // console.log(e.target.value)
        setEmail(e.target.value);
      }

    const handleMakeAdminForm = (e) => {
        const user = {email}
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
        //   change form default behaviour
        e.preventDefault();
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="6"></Col>
                    <Col lg="6">
                        <form onSubmit={handleMakeAdminForm}>
                            Make Admin Write Email<input onBlur={handleOnBlur} type="email" placeholder="enter email" name="email" id="" />
                            {/* <Button type='submit' value="submit">submit</Button> */}
                            <input type='submit' value="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MakeAdmin;