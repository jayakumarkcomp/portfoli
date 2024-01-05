import React from 'react'
import {FaInstagram, FaLinkedin, FaEnvelope} from 'react-icons/fa'
import './index.css'

const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact</h2>

      <div className="social-icons">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:your.email@example.com">
          <FaEnvelope />
        </a>
      </div>

      <p className="copyright">Copyright © 2024. All rights reserved.</p>
    </div>
  )
}

export default Contact
