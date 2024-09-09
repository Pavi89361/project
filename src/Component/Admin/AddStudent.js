import React, { useState } from 'react';
import './Addstudent.css';
import axios from 'axios';


export default function AddStudent() {
    const [Name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const [College, setCollege] = useState('');
    const [Department, setDepartment] = useState('');
    const [Year, setYear] = useState('');
    const [DOB, setDOB] = useState(0);
    const [Phno, setPhno] = useState(0);
    const [Email, setEmail] = useState('');
    const [Fees, setFees] = useState('');
    const [Course, setCourse] = useState('');
    const [Staff, setStaff] = useState('');
    const [Password, setPassword] = useState('');

    function Add() {
        axios.post('http://localhost:2500/student/create', {
            Name: Name,
            Address: Address,
            College: College,
            Department: Department,
            Year: Year,
            Email: Email,
            Phno: Phno,
            DOB: DOB,
            Course: Course,
            Fees: Fees,
            Staff: Staff,
            Password:Password
        })
            .then(alert("sucess"))
            .catch(err => console.log(err))
    }

    return (
        <div className='add-home'>
            <h2>Student Register Form</h2>
            <div id='main-menu-add'>
                <div className='add-a-student  bg-light shadow'>
                    <form className='form  student-form'>
                        <div className='row row-cols-3 gx-5'>
                            <div className='col-5'>
                                <label className='form-label'>Name</label>
                                <input type='text' className='form-control ' value={Name} onChange={(e) => { setName(e.target.value) }}></input>
                            </div>
                            <div className='col-7'>
                                <label className='form-label'>Address</label>
                                <input type='text' className='form-control' value={Address} onChange={(e) => { setAddress(e.target.value) }}></input>
                            </div>


                            <div className='col-6'>
                                <label className='form-label'>College</label>
                                <input type='text' className='form-control ' value={College} onChange={(e) => { setCollege(e.target.value) }}></input>
                            </div>
                            <div className='col-3'>
                                <label className='form-label'>Department</label>
                                <input type='text' className='form-control ' value={Department} onChange={(e) => { setDepartment(e.target.value) }}></input>
                            </div>

                            <div className='col-3'>
                                <label className='form-label'>Year</label>
                                <input type='text' className='form-control ' value={Year} onChange={(e) => { setYear(e.target.value) }}></input>
                            </div>
                            <div className='col-6'>
                                <label className='form-label'>Email id</label>
                                <input type='text' className='form-control ' value={Email} onChange={(e) => { setEmail(e.target.value) }}></input>
                            </div>
                            <div className='col-3'>
                                <label className='form-label'>Phone no</label>
                                <input type='number' className='form-control ' value={Phno} onChange={(e) => { setPhno(e.target.value) }}></input>
                            </div>
                            <div className='col-3'>
                                <label className='form-label'>DOB:</label>
                                <input type='date' className='form-control' value={DOB} onChange={(e) => { setDOB(e.target.value) }}></input>
                            </div>
                            <div className='col-6'>
                                <label className='form-label'>Course</label>
                                <select className='form-select' onChange={(e) => { setCourse(e.target.value) }}>
                                    <option>Course</option>
                                    <option value={"Fullstack"}>Fullstack</option>
                                    <option value={"Frontend"}>Frontend</option>
                                    <option value={"Backend"}>Backend</option>
                                    <option value={"Python"}>Python</option>
                                    <option value={"React js"}>React js</option>
                                    <option value={"Javascript"}>Javascript</option>
                                </select>
                            </div>

                            <div className='col-6'>
                                <label className='form-label' >Staff</label>
                                <select className='form-select' value={Staff} onChange={(e) => { setStaff(e.target.value) }}>
                                    <option>Staff</option>
                                    <option value={"Pavithra"}>Pavithra</option>
                                    <option value={"Hariharan"}>Hariharan</option>
                                </select>
                            </div>
                            <div className='col-6'>
                                <label className='form-label'>Fees</label>
                                <input type='number' className='form-control ' value={Fees} onChange={(e) => { setFees(e.target.value) }}></input>
                            </div>
                            <div className='col-6'>
                                <label className='form-label'>Password</label>
                                <input type='password' className='form-control ' value={Password} onChange={(e) => { setPassword(e.target.value) }}></input>
                            </div>
                            <div className=' d-flex ms-auto'>
                                <button type="button" className="btn btnas">Cancel</button>
                                <button type="button" className="btn btnas" onClick={Add}>Add</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
