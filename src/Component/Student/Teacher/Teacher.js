import React from 'react';
import './Teacher.css';
import Pavi from '../../Admin/Pavi.jpg';



export default function Teacher() {
    return (
        <div className='teacher-page'>
            <section class="teachers">

                <h1 class="heading"> Expert Teachers</h1>
                <hr></hr>

                <form method="post" class="search-tutor bg-light shadow">
                    <input type="text" name="search_box" placeholder="Search Tutors..." required maxlength="100" />
                </form>

                <div class="box-container row row-cols-2">
                    <div class="col box offer bg-light shadow">
                        <h3>become a tutor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque ipsam fuga ex et aliquam.</p>
                        <a href="register.html" class="inline-btn">get started</a>
                    </div>

                    <div class="col  box  bg-light shadow">
                        <div class="tutor">
                            <img src={Pavi}  alt='profile' />
                            <div>
                                <h3>Pavithra</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                        <p>Current Student: <span>4</span></p>
                        <p>Total Student : <span>18</span></p>
                        {/* <a href="teacher_profile.html" class="inline-btn">view profile</a> */}
                    </div>

                    <div class="col box bg-light shadow">
                        <div class="tutor">
                            <img src={Pavi}  alt='profile' />

                            <div>
                                <h3>pavithra</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                        <p>Current Student: <span>4</span></p>
                        <p>Total Student : <span>18</span></p>
                        {/* <a href="teacher_profile.html" class="inline-btn">view profile</a> */}
                    </div>

                    <div class="col box bg-light shadow">
                        <div class="tutor">
                            <img src={Pavi}  alt='profile'/>
                            <div>
                                <h3>Pavithra</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                        <p>Current Student: <span>4</span></p>
                        <p>Total Student : <span>18</span></p>
                        {/* <a href="teacher_profile.html" class="inline-btn">view profile</a> */}
                    </div>

                    <div class="col box bg-light shadow">
                        <div class="tutor">
                            <img src={Pavi}  alt='profile' />

                            <div>
                                <h3>Pavithra</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                        <p>Current Student: <span>4</span></p>
                        <p>Total Student : <span>18</span></p>
                        {/* <a href="teacher_profile.html" class="inline-btn">view profile</a> */}
                    </div>

                    <div class="col box bg-light shadow">
                        <div class="tutor">
                            <img src={Pavi}  alt='profile' />
                            <div>
                                <h3>Pavithra</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                        <p>Current Student: <span>4</span></p>
                        <p>Total Student : <span>18</span></p>
                        {/* <a href="teacher_profile.html" class="inline-btn">view profile</a> */}
                    </div>

                    <div class="col box bg-light shadow">
                        <div class="tutor">
                            <img src={Pavi}  alt='profile' />
                            <div>
                                <h3>Pavithra</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                        <p>Current Student: <span>4</span></p>
                        <p>Total Student : <span>18</span></p>
                    </div>

                    <div class="col box bg-light shadow">
                        <div class="tutor">
                            <img src={Pavi}  alt='profile' />
                            <div>
                                <h3>Pavithra</h3>
                                <span>developer</span>
                            </div>
                        </div>
                        <p>Current Student: <span>4</span></p>
                        <p>Total Student : <span>18</span></p>
                    </div>

                </div>

            </section>

        </div>
    )
}
