
import './Adminhome.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Adminhome() {

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

    axios.get("http://localhost:2500/admin/listAll", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.status === 200) {
          setLoading(false)
          console.log(response.data);
          setUser(response.data.admin.Name);
        }

      })
      .catch(error => {
        console.error("Error fetching user data", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      });
  }, []);


  return (
    <div className='admin-home-page'>
      <div className='shadow-lg'>
        <p className='display-4 bg-light'>
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Error: {error}</h1>
          ) : (
            <h1>Welcome, {user}</h1>
          )}
        </p>
      </div>
    </div>
  );
}
