import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from 'react-bootstrap/Table'

const Schedule = () => {
    const {user} = useAuth()
    const [schedules,setSchedules] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/schedules?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            <h2>You Took Schedule : {schedules.length}</h2>
            <div className="schedule-table">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Schedule Booked Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map((schedule,index) => (
                            <tr>
                            <td>{index+1}</td>
                            <td>{schedule.name}</td>
                            <td>{schedule.email}</td>
                            <td>{schedule.confirmedToday}</td>
                            </tr>                            
                        ))}

                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Schedule;