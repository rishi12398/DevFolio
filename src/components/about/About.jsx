import React from 'react'
import "./about.css"
import Avator2 from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Avator2} alt="" className="about__image" />
        <div className="about__data grid">
          
          <div className="about__info"> 
            <p className="about__description">
              Add info about me over here. Writeup pending. Add info about me over here. Writeup pending. Add info about me over here. Writeup pending. Add info about me over here. Writeup pending. Add info about me over here. Writeup pending.Add info about me over here. Writeup pending.
            </p>
            <a href="" className="btn"> Download CV</a>
          </div>          
          <div className="about__skills grid">
            
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Software Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill__1"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Systems and Linux Programming</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill__2"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill__3"></span>
              </div>
            </div>

          </div>
          
        </div>
      </div>

      < AboutBox />
    </section>
  )
}

export default About