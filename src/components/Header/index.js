import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="nav-text">Modelyn Torff</h1>
      <nav className="nav-item">
        <Link to="/" className="items">
          About
        </Link>
        <Link to="/projects" className="items">
          Projects
        </Link>
        <Link to="/contact" className="items">
          Contact
        </Link>
      </nav>
    </div>
  )
}

export default Header
