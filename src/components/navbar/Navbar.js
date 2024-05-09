// import React from 'react'
import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { TiTick } from 'react-icons/ti';
import './Navbar.scss';

export default function Navbar() {
    
  
  
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <p>THENCE</p>
            </div>
            <div className="navbar-menu">
            <div className='buttons'>
               <button className='getpro' ><a href='/Register'>Get Projects</a></button>
               <button className='onboard'>Onboard Talent</button>
            </div>
            </div>
            {/* <div className="navbar-profile">
              <CgProfile className="navbar-profile-icon"/>
              <TiTick className="navbar-profile-icon"/>
            </div> */}
          </div>
        </nav>
      </div>
    )
}
