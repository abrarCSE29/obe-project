import React from 'react'
import logo from './person.png'
export default function Facultyinfo() {
  return (
    <div className="facultyinfo">
      <img className="imgPerson" src={logo} alt="Faculty" />
      <p>
      <h3>John Doe</h3>
      <h4>Associate Professor</h4>
      <h5>Department of Computer Science and Engineering</h5>
      </p>
    </div>
  )
}
