import React from 'react'
import Facultyinfo from './Facultyinfo';
import Navbuttons from './Navbuttons';
function Nav(){
    return <div className="nav-bar">
        <Facultyinfo/>
        <Navbuttons/>
    </div>
}

export default Nav;