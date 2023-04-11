import React from 'react'
import './About.css';
import CreateIcon from '@mui/icons-material/Create';
function About() {
  return (
    <div className="about">
        <div className="about-upper">
            <h3 className="about-me">ABOUT ME</h3>
            <button className="save-btn">Edit</button>
        </div>
        <div className="about__input__container">
            <input className="about__input" placeholder="Add Something about you."type="text"/>
             
            <CreateIcon className="createicon"/>
        
        </div>
    </div>
  )
}

export default About