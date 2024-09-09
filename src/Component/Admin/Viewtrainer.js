import React, { useEffect, useState } from 'react'
import './Viewtrainer.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Viewtrainer() {
  const [view, setview] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2500/trainer/list')
      .then(res => setview(res.data))
      .catch(err => console.log(err))
  })


  return (
    <div>
      <div>
        <h1 className='display-5 mb-3 text-center'>Trainer Details</h1>
        <div className='table-responsive view-trainer'>
          <table className='table table-light table-bordered border-dark border-opacity-50'>
            <thead>
              <tr id='trt'>
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
                    <tr id='trt' key={index}>
                      <td>{dat.Name}</td>
                      <td>{dat.Address}</td>
                      <td>{`${BDate.getFullYear()}/${BDate.getMonth() + 1}/${BDate.getDay()}`}</td>
                      <td>{dat.Exprience}</td>
                      <td>{dat.Email}</td>
                      <td>{dat.Phno}</td>
                      <td>{dat.Domain}</td>
                      <td>{dat.Package}</td>
                      <td>
                        <a className="btn btntr btn-primary"
                          href={'/Update/' + dat._id}>Edit</a>
                        <Link className='btn btntr' onClick={() => {
                          axios.delete('http://localhost:1224/trainer/delete/' + dat._id)
                            .then(alert("deleted"))
                        }}>Delete</Link>
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
