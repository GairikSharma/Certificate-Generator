import React from 'react'
import "./Navbar.css"
import {PiCertificate} from "react-icons/pi"



function Navbar() {
  return (
    <div className="navbar-wrapper">
        <div className="navbar-logo">
          <PiCertificate className='certificate-logo-nav' />
          Certify</div>
    </div>
  )
}

export default Navbar