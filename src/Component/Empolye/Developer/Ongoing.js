import React, { useEffect, useState } from 'react'
import './Ongoing.css';
import axios from 'axios';


export default function Ongoing() {
    const [view, setview] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:2500/project/list')
            .then(res => {
                const OngoingProjects = res.data.filter(project => project.Status === "Ongoing");
                setview(OngoingProjects);
            })
            .catch(err => console.log(err))
    })
    return (
        <div className='ongoing-body'>
            <div>
                <h2>OnGoing Project</h2>
                <div className='table-responsive ongoing'>
                    <table className='table table-light table-bordered border-dark border-opacity-50 shadow'>
                        <thead>
                            <tr id='trs'>
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
                            {
                                view.map((itemdat, index) => {
                                    return (
                                        <tr key={index} id='trs'>
                                            <td>{itemdat.Name}</td>
                                            <td>{itemdat.Projectname}</td>
                                            <td>{itemdat.Startdate}</td>
                                            <td>{itemdat.Enddate}</td>
                                            <td>{itemdat.Period}</td>
                                            <td>{itemdat.Domain}</td>
                                            <td>{itemdat.Status}</td>
                                            <td>
                                                <a href='#' className='btn btns'>Edit</a>
                                                <a href='#' className='btn btns'>Delete</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
