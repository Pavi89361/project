
import React, { useEffect, useState } from 'react';
import './Completed.css';
import axios from 'axios';

export default function Completed() {
    const [view, setView] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:2500/project/list')
            .then(res => {
                const completedProjects = res.data.filter(project => project.Status === "Completed");
                setView(completedProjects);
            })
            .catch(err => {
                console.error('Failed to fetch projects:', err);
                alert('Error fetching data');
            });
    }, []);

    return (
        <div className='completed-body'>
            <h3>Completed Project</h3>
            <div className='table-responsive completed'>
                <table className='table table-light table-bordered border-dark border-opacity-50 shadow'>
                    <thead>
                        <tr id='ctr'>
                            <th>Name</th>
                            <th>Project Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Period</th>
                            <th>Domain</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {view.map((itemdat, index) => (
                            <tr key={index} id='ctr'>
                                <td>{itemdat.Name}</td>
                                <td>{itemdat.Projectname}</td>
                                <td>{itemdat.Startdate}</td>
                                <td>{itemdat.Enddate}</td>
                                <td>{itemdat.Period}</td>
                                <td>{itemdat.Domain}</td>
                                <td>{itemdat.Status}</td>
                                <td>
                                    <button className='btn btnc' onClick={() => console.log('Edit:', index)}>Edit</button>
                                    <button className='btn btnc' onClick={() => console.log('Delete:', index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

