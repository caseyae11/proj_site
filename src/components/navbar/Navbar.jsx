import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'


// Block element modifers
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
        <div className="navbar-links">
        <div className="navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#Info">Info</a></p>
          <p><a href="#portfolio">Thoughts</a></p>
        </div>
        </div>
        <div className="navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container">
          <div className="navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#Info">Info</a></p>
            <p><a href="#portfolio">Thoughts</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
