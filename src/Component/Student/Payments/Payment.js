import React, { useEffect, useState } from 'react';
import './Payment.css';
import axios from 'axios';

export default function Payment() {
  const [students, setStudents] = useState([]);
  const [balances, setBalances] = useState([]);
  const [amount, setAmount] = useState({});
  const [activeStudent, setActiveStudent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:1224/feesdetails/feesd')
      .then(res => setBalances(res.data))
      .catch(err => console.log(err));

    axios.get('http://localhost:1224/student/list')
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  function handlePayment() {
    if (activeStudent) {
      axios.post('http://localhost:1224/feesdetails/fees', { Amount: parseFloat(amount[activeStudent] || 0) })
        .then(() => {
          alert("Paid successfully");
          setAmount(prev => ({ ...prev, [activeStudent]: 0 })); // Reset the amount after payment
          setActiveStudent(null); // Reset active student
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div className='Payment-body'>
      <h3>Fees Details</h3>
      <div className='table-responsive Payment'>
        <table className='table table-light table-bordered border-dark border-opacity-50 shadow'>
          <thead>
            <tr id='trpm'>
              <th>Name</th>
              <th>Course</th>
              <th>Fees</th>
              <th>Payments</th>
              <th>Balance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => {
              const studentBalance = balances.find(balance => balance.studentId === student.id); // Assuming an ID match
              return (
                <tr key={student.id} id='trpm'>
                  <td>{student.Name}</td>
                  <td>{student.Course}</td>
                  <td>{student.Fees}</td>
                  <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#paymentModal" onClick={() => setActiveStudent(student.id)}>
                      Pay
                    </button>
                  </td>
                  <td>{studentBalance ? studentBalance.Amount : 'N/A'}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Payment Modal */}
      <div className="modal fade" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="paymentModalLabel">Payment</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label className='form-label'>Amount</label>
              <input type='number' className='form-control' value={amount[activeStudent] || 0} onChange={(e) => setAmount({ ...amount, [activeStudent]: e.target.value })} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handlePayment} data-bs-dismiss="modal">Pay</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}



