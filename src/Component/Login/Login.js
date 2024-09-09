import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { emailvalidator } from './Regexvalidator';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const history = useNavigate();

    const [input, setInput] = useState({ email: '', password: '' });
    const [errormessage, seterrormessage] = useState('');
    const [successmessage, setsuccessmessage] = useState('');
    const [position, setPosition] = useState("");
    const form = useRef();


    const handlechange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const formsubmiter = (e) => {

        e.preventDefault();
        setsuccessmessage('');
        if (!emailvalidator(input.email)) {
            return seterrormessage('Please enter valid email id');
        }

        if (position === "Student") {
            axios.post('http://localhost:2500/student/stuLogin', {
                Email: input.email,
                Password: input.password
            })
                .then(res => {
                    console.log(res.data);
                    if (res.status === 200) {
                        form.current.reset();
                        localStorage.setItem('auth', res.data.token)
                        window.location = '/Student-Home';
                    }
                })
                .catch(err => console.log(err))

        }
        else if (position === "Developer") {
            try{
                axios.post('http://localhost:2500/devop/devlogin', {
                    Email: input.email,
                    Password: input.password
                })
                    .then(res => {
                        if (res.status === 200) {
                            form.current.reset();
                            localStorage.setItem('auth', res.data.token)
                            window.location = '/Developer-home';
                            // history('/Developer-home')
                        }
                    })
                    .catch(err => console.log(err))

            }catch(err){
                console.log(err);
            }  
        }
        else if (position === "Trainer") {
            axios.post('http://localhost:2500/trainer/staffLogin', {
                Email: input.email,
                Password: input.password
            })
                .then(res => {
                    if (res.status === 200) {
                        form.current.reset();
                        // navi('/Trainer-home')
                        localStorage.setItem('auth', res.data.token)
                        window.location = '/Trainer-home';
                    }
                })
                .catch(err => console.log(err))
        }
        else if (position === "Admin") {
            axios.post('http://localhost:2500/admin/adminLogin', {
                Email: input.email,
                Password: input.password
            })
                .then(res => {
                    if (res.status === 200) {
                        form.current.reset();
                        localStorage.setItem('auth', res.data.token)
                        window.location = '/Admindashboard';
                    }
                })
                .catch(err => console.log(err))

        }
        else {
            alert(position);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            switch (position) {
                case "Trainer":
                    history('/Trainer-home');
                    break;
                case "Developer":
                    history('/Developer-home');
                    break;
                case "Student":
                    history('/Student-home');
                    break;
                case "Admin":
                    history('/Admindashboard');
                    break;
                default:
                    break;
            }
        }
    }, [position, history]);

    return (
        <div id='login-body'>
            <section className="wrapper ">
                <header>Login</header>

                <div className="form login">
                    <form action="#" ref={form}>
                        {errormessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errormessage}</div>}
                        {successmessage.length > 0 && <div style={{ marginBottom: '10px', color: 'green' }}>{successmessage}</div>
                        }
                        <div className='row row-cols-1'>
                            <div className='col'>
                                <label className='form-label' >Email</label>
                                <input type="email" className='form-control' name="email" onChange={handlechange} placeholder="Email address" required />
                            </div>
                            <div className='col'>
                                <label className='form-label'>Password</label>
                                <input className='form-control' type="password" name="password" onChange={handlechange} placeholder="Password" required />
                            </div>
                            <div>
                                <label className='form-label'>Position</label>
                                <select className='form-select' onChange={(e) => {
                                    setPosition(e.target.value);
                                }}>
                                    <option>Position</option>
                                    <option value={"Student"}>Student</option>
                                    <option value={"Trainer"}>Trainer</option>
                                    <option value={"Developer"}>Developer</option>
                                    <option value={"Admin"}>Admin</option>
                                </select>

                            </div>

                        </div>
                        <input className='btn btnl shadow' type="submit" value="Login" onClick={formsubmiter} />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;
