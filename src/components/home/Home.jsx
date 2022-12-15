import React from 'react'
import "./home.css"
import Afro from "../../assets/afro_1.png"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
import StaticShapes from './StaticShapes'

const Home = () => {
  return (
    <section className="home contianer" id="home">
      <div className="intro">
        <img src={Afro} alt="" className="home__img" />
        
        <h1 className="home__name">Rishikesh Chaumal</h1>
        
        <span className="home__education">
          Hi, I'm a Software Developer
        </span>
      
      < HeaderSocials />
      
      <a href="#contact" className="btn">Contact Me</a>

      < ScrollDown />
      < Shapes />
      {/* < StaticShapes /> */}
      </div>
    </section>
  )
}

export default Home