import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import Html from "./HTML5_Badge.svg.png";
import Css from './CSS3_logo.svg.png';
import Bootstrap from './bootstrap-logo.png';
import js from './javascript-logo.png';
import react from './React.webp';
import nodejs from './node-js.png';
import Mongodb from './mongodb.png';
import python from './Python.svg.png';
import java from './java_logo.png';
import Facebook from 'bootstrap-icons/icons/facebook.svg';
import Whatsapp from 'bootstrap-icons/icons/whatsapp.svg';
import Twitter from 'bootstrap-icons/icons/twitter-x.svg';
import Instagram from 'bootstrap-icons/icons/instagram.svg';

export default function Main() {
    return (
        <div className='main'>
            <div className='fixed-top navigations'>
                <nav class="navbar bg-primary navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand fs-3" href="#">XYZ institute</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-start  bg-primary w-75  navigations-offcanvas" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a className="nav-link" href='#home'>Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a className="nav-link" href="#About">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a className="nav-link" href='#contact'>Contact</a>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/Login" className="nav-link">Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='home bg-primary bg-opacity-10 pt-5' id='home'>
                {/* <div className=''> */}
                    <div className='para'>
                        <p>Play learn and grow<br /> <span>Creative <br></br>kid's world</span></p>
                    </div>
                    <div class="area" >
                        <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div >
                {/* </div> */}
            </div>
            <section className="bg-primary bg-opacity-25 about-us" id='About'>
                <div className='container-fluid'>
                    <div class="about">
                        <div class="text">
                            <h2>About Us</h2>
                            <h5>Traning & <span>Development</span></h5>
                            <p>Welcome to XYZ Institute, your premier destination for professional training and development. Established in [year], XYZ Institute has been a trusted provider of high-quality training programs designed to enhance skills, knowledge, and capabilities across various industries.At XYZ Institute, our mission is to empower individuals and organizations with the knowledge and skills they need to excel in their respective fields. We are committed to delivering innovative and practical training solutions that drive performance, foster growth, and inspire success.</p>

                            <p>XYZ Institute offers a wide range of training programs covering [mention key areas or industries]. Whether you're looking to upskill, reskill, or advance your career, our comprehensive programs cater to learners at all levels, from beginners to seasoned professionals. Our expert instructors leverage real-world experience and cutting-edge instructional methodologies to deliver engaging and effective training experiences.</p>

                            <p>At XYZ Institute, we believe in a learner-centered approach to training. Our programs are designed to be interactive, practical, and outcome-oriented, providing participants with hands-on experience and actionable insights that they can apply immediately in their professional roles. We offer a blend of in-person, online, and hybrid training options to accommodate diverse learning preferences and needs.</p>
                        </div>
                    </div>
                    <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1040 320"><path fill="#0d6efd" fill-opacity="0.25" d="M0,32L720,0L1440,64L1440,0L720,0L0,0Z"></path></svg>
                </div>
            </section>
            <div className='contact' id='contact'>
                <div className='container-fluid'>
                    <div id='circles-animate'>
                        <ol id='clircles-ol '>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </div>
                    <div className='Address'>
                        <div id='address-animate'>
                            <ol>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ol>

                        </div >
                        <div className='Address-menu'>
                            <p>Branches:<br></br>
                                <span>Coimbatore</span>
                                <span>Chennai</span>
                                <span style={{ marginLeft: '90px' }}>Salem</span>
                            </p>
                            <p>Phone no: +91<br></br>
                                <span>0987654321</span>
                                <span>0987654321</span>
                                <span style={{ marginLeft: '70px' }}>0987654321</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='footer bg-primary bg-opacity-75'>
                <div className='container-fluid'>
                    <ul className='body-part p-5'>
                        <li className='bg-light text-center bg-opacity-50 p-4 rounded-4 '><img src={Facebook} alt='f'></img>
                            <br></br>
                            <span >Facebook</span></li>
                        <li className='bg-light text-center bg-opacity-50 p-4 rounded-4'><img src={Instagram} alt='i'></img>
                            <br></br>
                            <span >Instagram</span>
                        </li>
                        <li className='bg-light text-center bg-opacity-50 p-4 rounded-4'> <img src={Whatsapp} alt='w'></img>
                            <br></br>
                            <span>Whatsapp</span></li>
                        <li className='bg-light text-center bg-opacity-50 p-4 rounded-4' ><img src={Twitter} alt='t'></img>
                            <br></br>
                            <span>Twitter</span>
                        </li>
                    </ul>
                    <p>Email id : <span>Xyzinstitute@gmail.com</span></p>
                </div>
            </div>
        </div >
    )
}





