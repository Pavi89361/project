import './Viewdeveloper.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Viewdeveloper() {
  const [view, setview] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2500/devop/list')
      .then(res => setview(res.data))
      .catch(err => console.log(err))
  },[])
  return (
    <div>
      <div>
        <h1 className='display-5 mb-3 text-center'>Developer details</h1>
        <div className='table-responsive view-developer'>
          <table className='table table-light table-bordered border-dark border-opacity-50'>
            <thead>
              <tr id='trrs'>
                <th>Name</th>
                <th>Address</th>
                <th>DOB</th>
                <th>Experience</th>
                <th>Email id</th>
                <th>Phone no</th>
                <th>Domain</th>
                <th>Package</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
                view.map((dat, index) => {
                  const BDate = new Date(dat.DOB);
                  return (
                    <tr id='trrs' key={index}>
                      <td>{dat.Name}</td>
                      <td>{dat.Address}</td>
                      <td>{`${BDate.getFullYear()}/${BDate.getMonth() + 1}/${BDate.getDay()}`}</td>
                      <td>{dat.Exprience}</td>
                      <td>{dat.Email}</td>
                      <td>{dat.Phno}</td>
                      <td>{dat.Domain}</td>
                      <td>{dat.Package}</td>
                      <td>
                        <a className="btn btnvd btn-primary"
                          href={'/devupdate/' + dat._id}>Edit</a>
                        <button className='btn btnvd' onClick={() => {
                          axios.delete('http://localhost:1224/developer/delete/' + dat._id)
                            .then(alert("deleted"))
                        }}>Delete</button>
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
