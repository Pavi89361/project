import React from "react";
import './Course.css';
import { Link } from "react-router-dom";
import Html from '../../Main/HTML5_Badge.svg.png';
import Css from '../../Main/CSS3_logo.svg.png';
import Bootstrap from '../../Main/bootstrap-logo.png';
import Js from '../../Main/javascript-logo.png';
import Reacts from '../../Main/React.webp';
import Nodejs from '../../Main/node-js.png';
import Mongodb from '../../Main/mongodb.png';
import Python from '../../Main/Python.svg.png';
import Java from '../../Main/java_logo.png';



function Course() {
    return (
        <div className="course-body">
            <div id="course-page">
                <div className="course-first-one">
                    <h1>Our Courses</h1>
                    <Link to={'/Student-Home/playlist'} class="d-flex justify-content-center fs-4">PlayList</Link>
                    <hr></hr>
                </div>

                <div className="row  row-cols-1 row-cols-sm-2 row-cols-lg-3 course-second-one">
                    <div className="col box bg-light">
                        <div class="thumb">
                            <img src={Html} alt="course" />
                        </div>
                        <h3 class="title"> HTML tutorial</h3>
                    </div>
                    <div className="col box bg-light">
                        <div class="thumb">
                            <img src={Css} alt="course" />
                        </div>
                        <h3 class="title"> Css tutorial</h3>
                    </div>
                    <div className="col box bg-light">
                        <div class="thumb">
                            <img src={Bootstrap} alt="course" />
                        </div>
                        <h3 class="title"> Bootstrap tutorial</h3>
                    </div>
                    <div className="col box bg-light">
                        <div class="thumb">
                            <img src={Js} alt='course' />
                        </div>
                        <h3 class="title">Js tutorial</h3>
                    </div>
                    <div className="col box bg-light">
                        <div class="thumb">
                            <img src={Reacts} alt="course" />
                        </div>
                        <h3 class="title"> React tutorial</h3>
                    </div>
                    <div className="col box bg-light">
                        <div class="thumb">
                            <img src={Nodejs} alt='course' />
                        </div>
                        <h3 class="title"> Nodejs tutorial</h3>
                    </div>
                    <div className="col box bg-light">
                        <div class="thumb">
                            <img src={Mongodb} alt="course" />
                        </div>
                        <h3 class="title">MongoDB tutorial</h3>
                    </div>
                    <div className="col box bg-light">
                        <div class="thumb">
                            <img src={Python} alt="course" />
                        </div>
                        <h3 class="title"> Python tutorial</h3>
                    </div>
                    <div className="col box bg-light">
                        <div class="thumb">
                            <img src={Java} alt="course" />
                        </div>
                        <h3 class="title">Java tutorial</h3>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Course;