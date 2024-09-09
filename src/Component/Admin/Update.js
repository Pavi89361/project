import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Update.css';
// import { useNavigate, useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function Update() {
    const [Name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const [DOB, setDOB] = useState(0);
    const [Exprience, setExperience] = useState(0);
    const [Phno, setPhno] = useState(0);
    const [Email, setEmail] = useState('');
    const [Domain, setDomain] = useState('');
    const [Package, setPackage] = useState('');
    const [Password, setPassword] = useState('');


    const { id } = useParams();
    // const navi = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:2500/trainer/listAll/' + id)
            .then((items) => {
                setName(items.data.Name)
                setAddress(items.data.Address)
                setDOB(items.data.DOB)
                setExperience(items.data.Exprience)
                setPhno(items.data.Phno)
                setEmail(items.data.Email)
                setPackage(items.data.Package)
                setPassword(items.data.Password)
            })
            .catch(err => console.log(err))
    }, [id])

    function Edit() {
        axios.put('http://localhost:2500/trainer/update/' + id, {
            Name: Name,
            Address: Address,
            DOB: DOB,
            Exprience: Exprience,
            Phno: Phno,
            Email: Email,
            Domain: Domain,
            Package: Package,
            Password: Password
        })
            .then(alert("sucess"))
            .catch(err => console.log(err))
    }

    return (
        <div className='update'>
            <h2>Trainer Register Form</h2>
            <div id='update-list-menu'>
                <div className='update-list bg-light shadow'>
                    <div className='form  update-form'>
                        <div className='row row-cols-3 gx-5'>
                            <div className='col-4'>
                                <label className='form-label'>Name</label>
                                <input type='text' className='form-control' value={Name} onChange={(e) => { setName(e.target.value) }}></input>
                            </div>
                            <div className='col-4'>
                                <label className='form-label'>DOB:</label>
                                <input type='date' className='form-control' value={DOB} onChange={(e) => { setDOB(e.target.value) }}></input>
                            </div>
                            <div className='col-4'>
                                <label className='form-label'>Phone no</label>
                                <input type='number' className='form-control ' value={Phno} onChange={(e) => { setPhno(e.target.value) }}></input>
                            </div>

                            <div className='col-6'>
                                <label className='form-label'>Address</label>
                                <input type='text' className='form-control' value={Address} onChange={(e) => setAddress(e.target.value)}></input>
                            </div>
                            <div className='col-6'>
                                <label className='form-label'>Email id</label>
                                <input type='text' className='form-control' value={Email} onChange={(e) => { setEmail(e.target.value) }}></input>
                            </div>
                            <div className='col-3'>
                                <label className='form-label'>Exprience</label>
                                <input type='text' className='form-control ' value={Exprience} onChange={(e) => { setExperience(e.target.value) }}></input>
                            </div>
                            <div className='col-3'>
                                <label className='form-label' >Domain</label>
                                <select className='form-select' onChange={(e) => { setDomain(e.target.value) }}>
                                    <option value={"Fullstack"}>Fullstack</option>
                                    <option value={"Frontend"}>Frontend</option>
                                    <option value={"Backend"}>Backend</option>
                                    <option value={"Python"}>Python</option>
                                    <option value={"React js"}>React js</option>
                                    <option value={"java script"}>Javascript</option>
                                </select>

                            </div>
                            <div className='col-3'>
                                <label className='form-label'> package</label>
                                <input type='number' className='form-control ' value={Package} onChange={(e) => { setPackage(e.target.value) }}></input>
                            </div>
                            <div className='col-3'>
                                <label className='form-label'>Password</label>
                                <input type='password' className='form-control ' value={Password} onChange={(e) => { setPassword(e.target.value) }}></input>
                            </div>
                            <div className='d-flex ms-auto'>
                                <button type="button" className="btn bg-danger">Cancel</button>
                                <button type="button" className="btn" onClick={Edit}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}




