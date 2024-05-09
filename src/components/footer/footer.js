import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "./footer.scss"
export default function Footer() {
  return (
    <div className='footer-body'>

        <div className='footer'>
            <div>
            <p>
            <FaRegCopyright /> &nbsp; Talup 2023: All rights reserved
            </p>
            </div>
           <div>
             <a>Terms and conditions</a> &nbsp;&nbsp;&nbsp;
             <a>Privacy policy</a>
           </div>
        </div>
    </div>
  )
}
