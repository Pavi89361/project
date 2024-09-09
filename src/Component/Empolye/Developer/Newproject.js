import React, { useState } from 'react'
import './Newproject.css';
import axios from 'axios';

export default function Newproject() {
    const [Name, setName] = useState('');
    const [Projectname, setProjectname] = useState('');
    const [StartDate, setstartdate] = useState(0);
    const [EndDate, setEnddate] = useState(0);
    const [Period, setPeriod] = useState('');
    const [Domain, setDomain] = useState('');
    const [Status, setStatus] = useState('');

    function Send() {
        axios.post('http://localhost:2500/project/create', {
            Name: Name,
            Projectname: Projectname,
            Startdate: StartDate,
            Enddate: EndDate,
            Period: Period,
            Domain: Domain,
            Status: Status
        })
            .then(alert("sucess"))
            .catch(err => console.log(err))
    }

    return (
        <div className='New-project'>
            <h2>New Project Entry Form</h2>
            <div id='New-project-main-menu'>
                <div className='add-a-New-project  bg-light shadow'>
                    <form className='form  New-project-form'>
                        <div className='row row-cols-3 gx-5'>
                            <div className='col-6'>
                                <label className='form-label'>Name</label>
                                <input type='text'
                                    className='form-control '
                                    value={Name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}></input>
                            </div>
                            <div className='col-6'>
                                <label className='form-label'>Project Name</label>
                                <input type='text'
                                    className='form-control'
                                    value={Projectname}
                                    onChange={(e) => {
                                        setProjectname(e.target.value)
                                    }}></input>
                            </div>
                            <div className='col-4'>
                                <label className='form-label'>Start Date:</label>
                                <input type='date'
                                    className='form-control'
                                    value={StartDate}
                                    onChange={(e) => {
                                        setstartdate(e.target.value)
                                    }}></input>
                            </div>

                            <div className='col-4'>
                                <label className='form-label'>End Date</label>
                                <input type='date'
                                    className='form-control '
                                    value={EndDate}
                                    onChange={(e) => {
                                        setEnddate(e.target.value)
                                    }}></input>
                            </div>
                            <div className='col-4'>
                                <label className='form-label'>Period</label>
                                <input type='number'
                                    className='form-control '
                                    value={Period}
                                    onChange={(e) => {
                                        setPeriod(e.target.value)
                                    }}
                                ></input>
                            </div>
                            <div className='col-4'>
                                <label className='form-label'>Domain</label>
                                <select className='form-select'
                                    value={Domain}
                                    onChange={(e) => {
                                        setDomain(e.target.value)
                                    }}>
                                    <option >Domain</option>
                                    <option value={"Fullstack"}>Fullstack</option>
                                    <option value={"Frontend"}>Frontend</option>
                                    <option value={"Backend"}>Backend</option>
                                    <option value={"Python"}>Python</option>
                                    <option value={"React js"}>React js</option>
                                    <option value={"java script"}>Javascript</option>
                                </select>

                            </div>
                            <div className='col-4'>
                                <label className='form-label'>Status</label>
                                <select className='form-select' onChange={(e) => { setStatus(e.target.value) }} >
                                    <option>Status</option>
                                    <option value={"Completed"}>Completed</option>
                                    <option value={"Ongoing"}>Ongoing</option>
                                </select>

                            </div>
                            <div className='d-flex ms-auto'>
                                <button type="button" className="btn btnsn bg-danger">Cancel</button>
                                <button type="button" className="btn btnsn" onClick={Send}>Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
