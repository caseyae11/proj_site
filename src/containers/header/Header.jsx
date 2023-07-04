import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header-content">
        <h1 className="gradient__text">Learning Everyday, Practice makes perfect. Lets Go!</h1>
        <p>This is just a simple practice site for me to get my hands dirty and work on. I plan to design and develop this site to put on my portfolio in the front end category. It would be my first fully completed project hopefully lol. </p>
      </div>

    <div className="header-content__input">
    <input type="email" placeholder='Your Email Address' />
    <button type='button'>Lets Talk</button>
    </div>
    
    </div>

  )
}

export default Header
