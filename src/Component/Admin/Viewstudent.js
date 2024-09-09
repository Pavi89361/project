import React, { useEffect, useState } from 'react';
import './Viewstudent.css';
import axios from 'axios';

export default function ViewStudent() {
  const [view, setview] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2500/student/list')
      .then(res => setview(res.data))
      .catch(err => console.log(err))
  })
  
  return (
    <div>
      <div>
        <h1>Student Details</h1>
        <div className='table-responsive view'>
          <table className='table table-light table-bordered border-dark border-opacity-50'>
            <thead>
              <tr id='trsv'>
                <th>Name</th>
                <th>Address</th>
                <th>College</th>
                <th>Department</th>
                <th>Year</th>
                <th>Email id</th>
                <th>Phone no</th>
                <th>DOB</th>
                <th>Course</th>
                <th>Fees</th>
                <th>Staff</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
                view.map((dat, index) => {
                  const BDate = new Date(dat.DOB);
                  return (
                    <tr id='trsv' key={index}>
                      <td>{dat.Name}</td>
                      <td>{dat.Address}</td>
                      <td>{dat.College}</td>
                      <td>{dat.Department}</td>
                      <td>{`${dat.Year} year`}</td>
                      <td>{dat.Email}</td>
                      <td>{dat.Phno}</td>
                      <td>{`${BDate.getFullYear()}/${BDate.getMonth() + 1}/${BDate.getDay()}`}</td>
                      <td>{dat.Course}</td>
                      <td>{dat.Fees}</td>
                      <td>{dat.Staff}</td>
                      <td>
                        <a className="btn btntr btn-primary"
                          href={'/Update/' + dat._id}>Edit</a>
                        <a href="#" className='btn btntr' onClick={() => {
                          axios.delete('http://localhost:1224/student/delete/' + dat._id)
                            .then(alert("deleted"))
                        }}>Delete</a>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
