import React from 'react';
import './Tcourses.css';
import { Link } from "react-router-dom";
import Pavi from '../../Admin/Pavi.jpg';
import Html from '../../Main/HTML5_Badge.svg.png';
import Css from '../../Main/CSS3_logo.svg.png';
import Bootstrap from '../../Main/bootstrap-logo.png';
import Js from '../../Main/javascript-logo.png';
import Reacts from '../../Main/React.webp';
import Nodejs from '../../Main/node-js.png';
import Mongodb from '../../Main/mongodb.png';
import Python from '../../Main/Python.svg.png';
import Java from '../../Main/java_logo.png';

export default function TrainerCourses() {
  return (
    <div className="Tcourse-body">
            <div id="Tcourse-page">
                <div className="Tcourse-first-one">
                    <h1>Our Courses</h1>
                    <hr></hr>
                </div>
                <div className="row  row-cols-3 Tcourse-second-one">
                    <div className="col Tbox bg-light">
                        <div className="Thead-part">
                            <img src={Pavi}  alt='profile' />
                            <div className="Tdetails">
                                <h3>Pavithra</h3>
                                <span>21-10-2022</span>

                            </div>
                        </div>
                        <div class="Tthumb">
                            <img src={Html} alt="course" />
                            <span>10 videos</span>
                        </div>
                        <h3 class="Ttitle"> HTML tutorial</h3>
                        <Link>View playlist</Link>
                    </div>
                    <div className="col Tbox bg-light">
                        <div className="Thead-part">
                            <img src={Pavi}  alt='profile' />
                            <div className="Tdetails">
                                <h3>Pavithra</h3>
                                <span>21-10-2022</span>

                            </div>
                        </div>
                        <div class="Tthumb">
                            <img src={Css} alt="course" />
                            <span>10 videos</span>
                        </div>
                        <h3 class="Ttitle"> Css tutorial</h3>
                        <Link>View playlist</Link>
                    </div>
                    <div className="col Tbox bg-light">
                        <div className="Thead-part">
                            <img src={Pavi}  alt='profile' />
                            <div className="Tdetails">
                                <h3>Pavithra</h3>
                                <span>21-10-2022</span>

                            </div>
                        </div>
                        <div class="Tthumb">
                            <img src={Bootstrap} alt="course" />
                            <span>10 videos</span>
                        </div>
                        <h3 class="Ttitle"> Bootstrap tutorial</h3>
                        <Link>View playlist</Link>
                    </div>
                    <div className="col Tbox bg-light">
                        <div className="Thead-part">
                            <img src={Pavi}  alt='profile'/>
                            <div className="Tdetails">
                                <h3>Pavithra</h3>
                                <span>21-10-2022</span>

                            </div>
                        </div>
                        <div class="Tthumb">
                            <img src={Js}  alt='course' />
                            <span>10 videos</span>
                        </div>
                        <h3 class="Ttitle">Js tutorial</h3>
                        <Link>View playlist</Link>
                    </div>
                    <div className="col Tbox bg-light">
                        <div className="Thead-part">
                            <img src={Pavi}  alt='profile' />
                            <div className="Tdetails">
                                <h3>Pavithra</h3>
                                <span>21-10-2022</span>

                            </div>
                        </div>
                        <div class="Tthumb">
                            <img src={Reacts} alt="course" />
                            <span>10 videos</span>
                        </div>
                        <h3 class="Ttitle"> React tutorial</h3>
                        <Link>View playlist</Link>
                    </div>
                    <div className="col Tbox bg-light">
                        <div className="Thead-part">
                            <img src={Pavi}  alt='profile' />
                            <div className="Tdetails">
                                <h3>Pavithra</h3>
                                <span>21-10-2022</span>

                            </div>
                        </div>
                        <div class="Tthumb">
                            <img src={Nodejs}  alt='course' />
                            <span>10 videos</span>
                        </div>
                        <h3 class="Ttitle"> Nodejs tutorial</h3>
                        <Link>View playlist</Link>
                    </div>
                    <div className="col Tbox bg-light">
                        <div className="Thead-part">
                            <img src={Pavi} alt="profile" />
                            <div className="Tdetails">
                                <h3>Pavithra</h3>
                                <span>21-10-2022</span>

                            </div>
                        </div>
                        <div class="Tthumb">
                            <img src={Mongodb} alt="course" />
                            <span>10 videos</span>
                        </div>
                        <h3 class="Ttitle">MongoDB tutorial</h3>
                        <Link>View playlist</Link>
                    </div>
                    <div className="col Tbox bg-light">
                        <div className="Thead-part">
                            <img src={Pavi} alt="profile" />
                            <div className="Tdetails">
                                <h3>Pavithra</h3>
                                <span>21-10-2022</span>

                            </div>
                        </div>
                        <div class="Tthumb">
                            <img src={Python} alt="course" />
                            <span>10 videos</span>
                        </div>
                        <h3 class="Ttitle"> Python tutorial</h3>
                        <Link>View playlist</Link>
                    </div>
                    <div className="col Tbox bg-light">
                        <div className="Thead-part">
                            <img src={Pavi} alt="profile" />
                            <div className="Tdetails">
                                <h3>Pavithra</h3>
                                <span>21-10-2022</span>

                            </div>
                        </div>
                        <div class="Tthumb">
                            <img src={Java} alt="course" />
                            <span>10 videos</span>
                        </div>
                        <h3 class="Ttitle">Java tutorial</h3>
                        <Link>View playlist</Link>
                    </div>
                </div>
            </div>
        </div >
  )
}
