import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Pavi from '../Admin/Pavi.jpg';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const [logout, setLogout] = useState(false);
    const history = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('auth');
        if (!token) {
            history('/Login');
        }
    }, [logout, history]);

    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem("auth");
        setLogout(true);
    };

    return (
        <div className='dashboard'>
            <div className='verticals'>
                <nav class="navbar  fixed-top bg-light nav-part">
                    <div class="container-fluid">
                        <h5>Xyz institute</h5>
                        <input class="form-control ms-auto w-50" type="search" placeholder="Search" aria-label="Search" />
                        <img className="ms-2" src={Pavi} alt='pavi' />
                    </div>
                </nav>
                <div className='row'>
                    <div className='col-3 left-part-student'>
                        <div class="menus bg-light">
                            <div className='menus-1'>
                                <div class="menus-header">
                                    <button class="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Dashboard</button>
                                    <h5 class="offcanvas-title d-none d-lg-block" >Dashboard</h5>
                                </div>
                                <div class="offcanvas-sm offcanvas-start" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                                    <div class="offcanvas-header">
                                        <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body vstack" >
                                        <div class="menus-body mt-1">
                                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                                <li class="nav-item active">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                                                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                                                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                                                    </svg>
                                                    <Link class="nav-link" to={"/Admindashboard/Home"}>Home</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                                        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                                                    </svg>
                                                    <Link class="nav-link" to={"/Admindashboard/View-Trainer"}>View Trainer</Link>

                                                </li>
                                                <li class="nav-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-laptop-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                                                    </svg>
                                                    <Link class="nav-link" to={"/Admindashboard/View-developer"}>View Developer</Link>

                                                </li>
                                                <li class="nav-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                                                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                                    </svg>
                                                    <Link class="nav-link" to={"/Admindashboard/View-student"}>View Student</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" fill="currentColor" class="bi bi-grid-fill" viewBox="0 0 16 16">
                                                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
                                                    </svg>
                                                    <Link class="nav-link" to={"/Admindashboard/All-Project"}>All Project</Link>

                                                </li>
                                            </ul>
                                        </div>
                                        <div class="menus-header mt-3">
                                            <h5 class="offcanvas-title">New</h5>
                                        </div>
                                        <div class="menus-body mt-1">
                                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                                <li class="nav-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                                    </svg>
                                                    <Link class="nav-link " to={"/Admindashboard/Certificate"}>Certificate</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
                                                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                                        <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                                                    </svg>
                                                    <Link class="nav-link" to={"/Admindashboard/Add-student"}>Add Student</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                                                    </svg>
                                                    <Link class="nav-link " to={"/Admindashboard/Add-developer"}>Add Developer</Link>

                                                </li>
                                                <li class="nav-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                                                    </svg>
                                                    <Link class="nav-link " to={"/Admindashboard/Add-trainer"}>Add Trainer</Link>

                                                </li>
                                                <li class="nav-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                                                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                                    </svg>
                                                    <Link class="nav-link " to={"/Admindashboard/Fees-details"}>Fees Details</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='menus-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                            </svg>
                                            <Link className='link' onClick={logoutHandler}>Logout</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9 right-part-Student'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
