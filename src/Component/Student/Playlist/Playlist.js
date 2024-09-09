import React from 'react';
import './Playlist.css';


export default function Playlist({ video,menu,filteritem }) {
    return (
        <div className='playlist'>
            <div className='container'>
                <div className='playlist-video'>
                    <h1>Playlist Video</h1>
                    <hr></hr>
                    <div className='d-flex justify-content-center'>
                        {
                            menu.map(val => (
                                <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold' onClick={() => filteritem(val)}>{val}</button>
                            ))
                        }

                    </div>
                    <div className='row row-cols-2'>
                        {
                            video.map((dat, index) => {
                                return (
                                    <div className='col  bg-light box-playlist shadow-lg'>
                                        <div className='box-playlist-card card bg-light' key={index}>
                                            <video src={`http://localhost:1224/uploadcourse/upload/${dat.coursevideo}`} controls></video>
                                            <h2>{dat.title}</h2>
                                            <h3>{`${dat.sublines}`}</h3>
                                            <h4>{`completed part${index + 1}`}</h4>
                                        </div>
                                    </div>
                                )
                            })

                        }



                    </div>


                </div>

            </div>


        </div>
    )
}