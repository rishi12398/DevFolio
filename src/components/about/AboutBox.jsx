import React from 'react'
import "./aboutbox.css"

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-cup"></i>
            <div>
                <h3 className="about__title">198</h3>
                <span className="about__subtitle">Projects Done</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">198</h3>
                <span className="about__subtitle">Projects Done</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">198</h3>
                <span className="about__subtitle">Projects Done</span>
            </div>
        </div>
    </div>

    
  )
}

export default AboutBox