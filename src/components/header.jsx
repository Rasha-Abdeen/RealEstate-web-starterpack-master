import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const header = () => {

  const [isopen, setisopen] = useState(false);
  return (
  	<>
    <div className='header sticky'>
      <img className="logo" src= '/logo.png' alt="logo" />
      <nav className="nav">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/sale">For Sale</Link>
    <Link to="/to-let">To Let</Link>
    <Link to ="/commercial">Commercial</Link>
    <Link to="/blog">Blog</Link>
     </nav>
   <a href ="#" className='contact-btn' > Login |</a>  <a href ="#" className='register'> Register </a>
    </div>


    <div className='header-mobile'>
    <img className="logo-mobile" src= '/logo.png' alt="logo" />
    <Hamburger toggled={isopen} toggle={setisopen} color=' #d1c601' />
    {isopen && (
    <div className='mobile-nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sale">For Sale</Link>
        <Link to="/to-let">To Let</Link>
        <Link to="/commercial">Commercial</Link>
        <a href="#">Blog</a>
     </div>)}


    </div>
    </>
  )
}

export default header
