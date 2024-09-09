import React, { useState } from 'react';
import './Upload.css';
import axios from 'axios';

export default function Upload() {
  const [title, settitle] = useState('');
  const [sublines, setsublines] = useState('');
  const [coursevideo, setcoursevideo] = useState(null);

  const formData = new FormData();
  formData.append('title', title);
  formData.append('sublines', sublines);
  formData.append('coursevideo', coursevideo);

  function HandleAddvideo(e) {
    e.preventDefault();

    axios.post('http://localhost:1224/uploadcourse/uploadvideo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(() => {
        window.location.reload()
      })
      .catch(err => {
        console.error(err)
        alert('Not Uploaded')
      });
  }



  return (
    <div className='upload-video'>
      <div className='upload-video-form bg-light shadow'>
        <form className=''>
          <div className='row'>
            <div className='col-6'>
              <label className='form-label'>Title</label>
              <input type='text' className='form-control' value={title} onChange={(e)=>{settitle(e.target.value)}}></input>
            </div>
            <div className='col-6'>
              <label className='form-label'>Sub title</label>
              <input type='text' className='form-control' value={sublines}  onChange={(e)=>{setsublines(e.target.value)}}></input>
            </div>
            <div className='col-12'>
              <label className='form-label'>Course video</label>
              <input type='file' className='form-control'  onChange={(e)=>{setcoursevideo(e.target.files[0])}}></input>
            </div>
          </div>
        </form>
        <button className='btn col-6 btn-1' onClick={HandleAddvideo}>Add Video</button>
      </div>
    </div>
  )
}
