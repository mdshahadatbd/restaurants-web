import React from 'react'
import aboutimage from '../images/about.png'

function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>UPCOMING EVENT</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum veniam possimus eveniet</p>
            <button>Read More</button>
            </div> 
            <div className="about-image"></div>
            <img src={aboutimage} alt=''/>         
        </div>
    )
}

export default About
