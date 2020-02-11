import React from 'react'
import logo from '../images/transparentLogo.png'

const NavBar = () => {

    return (
        <div className='navbar'>
            <img className='navLogo' src={logo}></img>
            <ul className='navLinks'>
                <li className='navLink'>Projects</li>
                <li className='navLink'>Experience</li>
                <li className='navLink'>Education</li>
                <li className='navLink'>Contact</li>
            </ul>
        </div>
    )
}

export default NavBar