import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Playlist from './Playlist';

export default function Mainmenu() {
    const [videodata, setvideodata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:2500/uploadcourse/getfiles')
            .then((res) => {
                setvideodata(res.data)
            })
            .catch(err => {
                console.log("error:" + err);
            })
    }, [])

    const menuitems = [...new Set(videodata.map((val)=>val.title))]

    const filteritems = (cat) =>{
        const newitems = videodata.filter((newval)=>newval.title ===cat)
        setvideodata(newitems)
    }
  return (
    <div className='container'>
        <div className='row'>
        <Playlist video={videodata} menu={menuitems} filteritem = {filteritems} ></Playlist>

        </div>
        
    </div>
  )
}
