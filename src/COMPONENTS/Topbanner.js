import React from 'react'
import institute_logo from './julogo.png'

function Topbanner() {
  return (
    <div className="topBanner">
        <img className="bannerLogo" src={institute_logo} alt="Institute logo"/> <h3 className="blueFont">Jahangirnagar University</h3>
        <p className="smallFont boldFont">Outcome Based Education System</p>
    </div>
  )
}

export default Topbanner;
