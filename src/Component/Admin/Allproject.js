import React,{ useEffect, useState } from 'react';
import './Allproject.css';
import axios from 'axios';

export default function Allproject() {
  const [view, setView] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2500/project/list')
      .then(res => {
        setView(res.data);
      })
      .catch(err => {
        console.error('Failed to fetch projects:', err);
        alert('Error fetching data');
      });
  }, []);
  return (
    <div className='allproject-body'>
      <h3>All  Project</h3>
      <div className='table-responsive Allproject'>
        <table className='table table-light table-bordered border-dark border-opacity-50 shadow'>
          <thead>
            <tr id='ctrp'>
              <th>Name</th>
              <th>Project Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Period</th>
              <th>Domain</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {view.map((itemdat, index) => (
              <tr key={index} id='ctrp'>
                <td>{itemdat.Name}</td>
                <td>{itemdat.Projectname}</td>
                <td>{itemdat.Startdate}</td>
                <td>{itemdat.Enddate}</td>
                <td>{itemdat.Period}</td>
                <td>{itemdat.Domain}</td>
                <td>{itemdat.Status}</td>
                <td>
                  <button className='btn btnal' onClick={() => console.log('Edit:', index)}>Edit</button>
                  <button className='btn btnal' onClick={() => console.log('Delete:', index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
