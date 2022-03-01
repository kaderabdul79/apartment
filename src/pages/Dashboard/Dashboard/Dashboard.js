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
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../../AdminRoute/AdminRoute';
import './Dashboard.css';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {admin} = useAuth();

    return (
        <div className='dashboard-area'>
            <div className="dashboard">
            <Container>
                <Row>
                    {/* sidebar start here */}
                    <Col lg="2" className='sidebar'>
                    <ul>
                        <li>
                        <Link to={`${url}/isAdmin`}>Admin</Link>
                        </li>
                        <li>
                        <Link to={`${url}`}>Home</Link>
                        </li>
                        { admin && <>
                        <li>
                        <Link to={`${url}/addApartment`}>AddApartment</Link>
                        </li>
                        <li>
                        <Link to={`${url}/makeadmin`}>Make Admin</Link>
                        </li>
                        </>
                        }
                    </ul>
                    </Col>
                    {/* sidebar end here */}
                    {/* all content will take space */}
                    <Col lg="10">
                    <Switch>
                        <Route exact path={path}>
                            <Home></Home>
                        </Route>
                        <Route path={`${path}/isAdmin`}>
                            <Admin></Admin>
                        </Route>
                        <AdminRoute path={`${path}/addApartment`}>
                            <AddApartment></AddApartment>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                    </Switch>
                    </Col>
                    {/* all content will take space */}
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default Dashboard;