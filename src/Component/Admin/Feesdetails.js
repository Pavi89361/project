import React, { useEffect, useReducer, useState } from 'react';
import './Feesdetails.css';
import axios from 'axios';

function FeesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FEES':
      return action.payload;
    default:
      return state;
  }
}

export default function Feesdetails() {
  const [view, setView] = useState([]);
  const [amount, dispatch] = useReducer(FeesReducer, 0);

  useEffect(() => {
    axios.get('http://localhost:2500/student/list')
      .then(res => {
        setView(res.data);
        const totalFees = res.data.reduce((acc, curr) => acc + curr.Fees, 0);
        dispatch({ type: 'UPDATE_FEES', payload: totalFees });
      })
      .catch(err => console.log(err));
  }, []);

  const Paid = (acc) => {
    const updatedAmount = amount - acc;
    dispatch({ type: 'UPDATE_FEES', payload: updatedAmount });
  }

  return (
    <div className='Feesdetails-body'>
      <h3>Fees Details</h3>
      <div className='table-responsive Feesdetails'>
        <table className='table table-light table-bordered border-dark border-opacity-50 shadow'>
          <thead>
            <tr id='trfs'>
              <th>Name</th>
              <th>Course</th>
              <th>Fees</th>
              <th>Payments</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {view.map((item, index) => (
              <tr id='trfs' key={index}>
                <td>{item.Name}</td>
                <td>{item.Course}</td>
                <td>{item.Fees}</td>
                <td>
                  <button type="button" className="btn btn-primary" onClick={() => Paid(500)}>
                    paid
                  </button>
                </td>
                <td>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


