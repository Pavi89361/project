import React, { useEffect, useState } from 'react';
import './Homepage.css';
import axios from 'axios';

export default function Homepage() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('auth');
        if (!token) {
            setError("No token found. Please log in.");
            setLoading(false);
            return;
        }

        axios.get("http://localhost:2500/student/listAll", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.status === 200) {
                    setLoading(false)
                    console.log(response.data);
                    setUser(response.data.student.Name);
                }

            })
            .catch(error => {
                console.error("Error fetching user data", error);
                setError("Failed to fetch data. Please try again later.");
                setLoading(false);
            });
    }, []);

    return (
        <div className='Homepage-body'>
            <center>{loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error: {error}</h1>
            ) : (
                <h1>Welcome, {user}</h1>
            )}</center>
            <div className="main-part-option">
                <div className="first-one">
                    <h1>Quick Options</h1>
                    <hr></hr>
                </div>
                <div className="second-one">
                    <div className="second-one-part-zero bg-light shadow">
                        <h4>Popular Topics</h4>
                        <div className="buttons">
                            <button className="btn shadow">Html</button>
                            <button className="btn shadow">css</button>
                            <button className="btn shadow">Bootstrap</button>
                            <br></br>
                            <button className="btn shadow">JavaScript</button>
                            <button className="btn shadow">React js</button>
                            <button className="btn shadow">Nodejs</button>
                            <br></br>
                            <button className="btn shadow">MongoDB</button>
                            <button className="btn shadow">Python</button>
                            <button className="btn shadow">Sql</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
