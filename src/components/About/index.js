import React from 'react'
import './index.css'

const About = () => {
  return (
    <div id="about">
      <div className="about-first-part">
        <h1 className="position">UI/UX Designer</h1>
        <h1 className="message">Jayakumar Kalaiselvan</h1>
        <p className="description">
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>
        <div className="buttons">
          <button className="projects-btn">Projects</button>
          <button className="linkedin-btn">LinkedIn</button>
        </div>
      </div>
    </div>
  )
}

export default About
