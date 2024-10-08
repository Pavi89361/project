import { Link, Outlet, useNavigate } from "react-router-dom";
import './Shome.css';
import Pavi from '../../Admin/Pavi.jpg';
import { useEffect, useState } from "react";


export default function Shome() {
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
        <div id="shome-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <div className="shome-vertical bg-light">
                            <div className="shome-vertical-menu-zero">
                                <img src={Pavi} alt='profile'></img>
                                <h5>Pavithra</h5>
                                <h6>Student</h6>
                            </div>
                            <div className="shome-vertical-menu-one">
                                <div className="shome-vertical-menu-body">
                                    <ul class="navbar-nav">
                                        <li class="nav-item active">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                                                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                                            </svg>
                                            <Link class="nav-link" to={"/Student-Home/Homepage"}>Home</Link>
                                        </li>
                                        <li class="nav-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                                                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                                            </svg>
                                            <Link class="nav-link " to={"/Student-Home/payment"}>Payment</Link>
                                        </li>
                                        <li class="nav-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                                                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                                            </svg>
                                            <Link class="nav-link " to={"/Student-Home/view-course"}>Courses</Link>
                                        </li>
                                        <li class="nav-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-video3" viewBox="0 0 16 16">
                                                <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2" />
                                                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783Q16 12.312 16 12V4a2 2 0 0 0-2-2z" />
                                            </svg>
                                            <Link class="nav-link " to={"/Student-Home/Teacher"}>Teachers</Link>
                                        </li>
                                        <li class="nav-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                            </svg>
                                            <Link class="nav-link" to={"/Student-Home/Upload-task"} >Upload-Task</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="shome-vertical-menu-two">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                </svg>
                                <Link  className='link' onClick={logoutHandler}>Logout</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-9  right-part">
                        <div className="row row-cols-1">
                            <div className="col">
                                <div className='fixed-top student-home'>
                                    <nav className="navbar navbar-expand-sm bg-light header-part">
                                        <div className="container">
                                            <Link className="navbar-brand fs-3" >Education</Link>
                                            <input class="form-control ms-auto w-50" type="search" placeholder="Search" aria-label="Search" />
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="col student-mid">
                                <Outlet />

                            </div>

                            <div className="col">
                                <div className='fixed-bottom student-bottom'>
                                    <nav className="navbar navbar-expand-sm bg-light footer-part">
                                        <div className="container">
                                            <Link className="navbar-brand fs-5 footer-bottom" >Copy right @2022 by mr.web designer| all rights reserved </Link>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}