import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Schedule from '../../../components/Schedule/Schedule';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Admin from '../Admin/Admin';
import Home from '../Home/Home';
import AddApartment from '../AddApartment/AddApartment';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className='dashboard-area'>
            {/*  */}
            <div className="dashboard">
            <Container>
                <Row>
                    <h2>Dashboard</h2>
                    <ul>
                        <li>
                        <Link to={`${url}/isAdmin`}>Admin</Link>
                        </li>
                        <li>
                        <Link to={`${url}`}>Home</Link>
                        </li>
                        <li>
                        <Link to={`${url}/addApartment`}>AddApartment</Link>
                        </li>
                    </ul>
                </Row>
            </Container>
            {/*  */}
            <Switch>
                        <Route exact path={path}>
                            <Home></Home>
                        </Route>
                        <Route path={`${path}/isAdmin`}>
                            <Admin></Admin>
                        </Route>
                        <Route path={`${path}/addApartment`}>
                            <AddApartment></AddApartment>
                        </Route>
                    </Switch>
            </div>
        </div>
    );
};

export default Dashboard;