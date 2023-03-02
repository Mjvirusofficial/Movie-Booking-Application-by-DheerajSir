import React from 'react'
import './Try.css'
import pvr from './image/pvr.png'

function Try() {
  return (
   
    <div className='home'>
    <div className="header">
        <div className="left">
            <p>Home</p>
            <p>About</p>
        </div>
        <div className="right">
            <p>Gmail</p>
            <p>Menu</p>
            <img src={pvr} alt="" />
        </div>
    </div>
       
       <div className="logo">
        <img className='img' src={pvr} alt="" />
       </div>
       <div className="search">
        <input type="text" />
       </div>
       <div className="btn">
        <button>Search</button>
        <button>More</button>
       </div>
    </div>
  )
}

export default Try