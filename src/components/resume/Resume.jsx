import React from 'react'
import "./resume.css"
import Data from './Data'
import Card from './Card'

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience and Education</h2>
      <div className="resume__container grid">
        
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                < Card 
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                  desc2={val.desc2}
                  desc3={val.desc3}
                /> 
              )
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "experience") {
              return (
                < Card 
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                  desc2={val.desc2}
                  desc3={val.desc3}
                /> 
              )
            }
          })}
        </div>
        
      </div>
    </section>
  )
}

export default Resume