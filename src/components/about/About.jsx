import React from 'react'
import "./about.css"
import Ilustration from "../../assets/ilustration2.png"
import Afro from "../../assets/pastel4.png"
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <div className="image-cropper">
          <img src={Afro} alt="" className="about__image"/>
        </div>
        <div className="about__data grid">
          
          <div className="about__info"> 
            <p className="about__description">
              Hi, Rishikesh here, I fight black bears in Antartica for sport. Now that I have 
              your attention, I am a software developer. Traveling, Gaming, Playing Sports, 
              Binging Anime, Drawing are some of the things I sacrifice my sleep for.
              I regret nothing you see in this feed. 🙂	
            </p>
            
            <a href="" className="btn"> Download CV</a>
          </div>          
          <div className="about__skills grid">
            <img src={Ilustration} alt="" className="about__image" />
            {/* <div className="skills__data">
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
            </div> */}

          </div>
          
        </div>
      </div>

      {/* < AboutBox /> */}
    </section>
  )
}

export default About